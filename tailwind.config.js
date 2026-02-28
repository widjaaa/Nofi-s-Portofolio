export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Lora', 'serif'],
            },
            boxShadow: {
                'card': '0 10px 40px -10px rgba(15, 23, 42, 0.05)',
                'card-hover': '0 20px 40px -10px rgba(15, 23, 42, 0.1)',
            }
        },
    },
    plugins: [],
}
