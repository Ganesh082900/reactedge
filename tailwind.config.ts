/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Official ReActEdge Brand Colors (Per Brand Guidelines)
        'shift-blue': '#166FB4',         // Deep Azure Blue - Primary (40%)
        'shift-orange': '#F07F22',       // Signal Orange - Secondary (30%)
        'shift-white': '#F2F0E6',        // Neutral White - Accent (10%)
        'shift-ice': '#D9F1FD',          // Ice Blue - Accent (10%)
        'shift-gray': '#4F4E51',         // Carbon Gray - Accent (10%)
        // Legacy compatibility (mapped to new palette)
        'shift-dark': '#0A0A0F',         // Deep Black for text/backgrounds
        'shift-cream': '#F2F0E6',        // Same as shift-white
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'out': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
        'scale-in': 'scaleIn 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};