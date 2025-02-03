/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      ccolors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        heartbeat: 'heartbeat 1.5s ease-in-out infinite', // Animación existente
        'fade-in': 'fade-in 1.5s ease-out', // Nueva animación
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }, // Cierra keyframes
    }, // Cierra extend
  }, // Cierra theme
  plugins: [],
};
