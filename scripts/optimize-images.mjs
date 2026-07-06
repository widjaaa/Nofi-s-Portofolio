import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PUBLIC_DIR = join(__dirname, '..', 'public');
const IMAGES_DIR = join(PUBLIC_DIR, 'images');

// Config per directory
const CONFIG = {
  'projects': { maxWidth: 1200, quality: 80 },
  'certificates': { maxWidth: 700, quality: 75 },
  'activities': { maxWidth: 900, quality: 78 },
  'logo': { maxWidth: 200, quality: 85 },
  // Root images
  '_root': { maxWidth: 800, quality: 82 },
};

const SUPPORTED_EXTS = ['.png', '.jpg', '.jpeg'];

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getFiles(fullPath)));
    } else if (SUPPORTED_EXTS.includes(extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

async function optimizeImage(filePath) {
  const rel = relative(IMAGES_DIR, filePath);
  const dir = rel.includes('\\') || rel.includes('/') ? rel.split(/[/\\]/)[0] : '_root';
  const config = CONFIG[dir] || CONFIG['_root'];

  const outputPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

  try {
    const originalStats = await stat(filePath);
    const originalSize = originalStats.size;

    await sharp(filePath)
      .resize({ width: config.maxWidth, withoutEnlargement: true })
      .webp({ quality: config.quality })
      .toFile(outputPath);

    const newStats = await stat(outputPath);
    const newSize = newStats.size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

    console.log(`✅ ${rel} → .webp | ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (${savings}% smaller)`);
  } catch (err) {
    console.error(`❌ Error processing ${rel}:`, err.message);
  }
}

async function main() {
  console.log('🔧 Starting image optimization...\n');

  // Also handle the root-level images (background, nofi.png, favicon)
  const files = await getFiles(IMAGES_DIR);
  
  // Also handle root public images if any specific ones
  const rootImages = ['favicon.png'];
  for (const name of rootImages) {
    const p = join(PUBLIC_DIR, name);
    try {
      await stat(p);
      files.push(p);
    } catch {}
  }

  console.log(`Found ${files.length} images to optimize.\n`);

  for (const file of files) {
    await optimizeImage(file);
  }

  console.log('\n🎉 Done! All images converted to WebP.');
  console.log('⚠️  You can now delete the original PNG/JPG files if everything looks good.');
}

main();
