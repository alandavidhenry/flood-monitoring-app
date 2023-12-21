/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      body: [
        'Inter',
        'ui-sans-serif', 
        'system-ui'
      ],
      sans: [
        'Inter',
        'ui-sans-serif', 
        'system-ui'
      ],
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
  darkMode: 'media',
}

