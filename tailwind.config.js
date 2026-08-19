export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
                heading: ['Syne', 'sans-serif'],
            },
            colors: {
                // Photography & Film Inspired Palette
                'film-amber': '#d97706',
                'darkroom-red': '#c84b31',
                'obsidian-dark': '#0b0d10',
                'paper-light': '#f7f6f3',
                'film-slate': '#16191e',

                // Warm Film Amber (Replacing generic SaaS blue)
                accent: {
                    50: '#fffbeb',
                    100: '#fef3c7',
                    200: '#fde68a',
                    300: '#fcd34d',
                    400: '#fbbf24',
                    500: '#d97706', // Film Amber Main
                    600: '#b45309', // High contrast text on light bg (WCAG AA > 4.5:1)
                    700: '#92400e',
                    800: '#78350f',
                    900: '#451a03',
                    950: '#291002',
                },
                // Darkroom Safelight Red / Terracotta (Replacing sky blue)
                highlight: {
                    50: '#fef2f2',
                    100: '#fee2e2',
                    200: '#fecaca',
                    300: '#fca5a5',
                    400: '#f87171',
                    500: '#c84b31', // Darkroom Red Main
                    600: '#b91c1c',
                    700: '#991b1b',
                    800: '#7f1d1d',
                    900: '#450a0a',
                },
                // Obsidian Studio Darkroom & Fine Art Paper Surface
                surface: {
                    50: '#f7f6f3',  // Studio paper light bg
                    100: '#efece6', // Light card / surface
                    200: '#e2dfd7', // Light border
                    300: '#c5c0b6', // Muted light element
                    400: '#8e95a5', // Silver halide muted text
                    500: '#64748b', // Body secondary
                    600: '#475569', // Body primary light
                    700: '#2a2e37', // Dark border / divider
                    800: '#16191e', // Film slate card dark
                    900: '#0b0d10', // Obsidian dark bg
                    950: '#050608', // Deepest background shadow
                },
            },
            boxShadow: {
                'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                'card-hover': '0 10px 25px -5px rgba(30, 58, 138, 0.1), 0 8px 10px -6px rgba(30, 58, 138, 0.1)',
                'card-dark': '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)',
                'card-dark-hover': '0 10px 25px -5px rgba(96, 165, 250, 0.15), 0 8px 10px -6px rgba(96, 165, 250, 0.1)',
                'glow': '0 0 20px rgba(30, 58, 138, 0.2)',
                'glow-lg': '0 0 40px rgba(30, 58, 138, 0.25)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 2s infinite',
                'float-slow': 'float 8s ease-in-out 1s infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
                'slide-up': 'slide-up 0.5s ease-out',
                'gradient-shift': 'gradient-shift 8s ease infinite',
                'spin-slow': 'spin 8s linear infinite',
                'marquee': 'marquee var(--marquee-duration, 25s) linear infinite',
                'marquee-reverse': 'marquee-reverse var(--marquee-duration, 25s) linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                'pulse-soft': {
                    '0%, 100%': { opacity: '0.4' },
                    '50%': { opacity: '0.8' },
                },
                'slide-up': {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'gradient-shift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'marquee': {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'marquee-reverse': {
                    '0%': { transform: 'translateX(-50%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
