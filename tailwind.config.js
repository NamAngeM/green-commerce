/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': '#2E7D32',
        'green-light': '#4CAF50',
        'green-pale': '#A5D6A7',
        'green-dark': '#1B5E20',
        'green-accent': '#00C853',
        'cream': '#FFF8E1',
        'cream-light': '#FFFDF7',
        'earth-brown': '#5D4037',
        'earth-light': '#8D6E63',
        'secondary': '#F9F5EB',
        'text-dark': '#212121',
        'text-medium': '#424242',
        'text-light': '#757575',
        'background': '#F5F7FA',
        'card': '#FFFFFF',
        'accent': '#FF5722',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'medium': '0 6px 12px rgba(0, 0, 0, 0.08)',
        'strong': '0 10px 25px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
}