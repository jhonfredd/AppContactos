/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Analiza el archivo principal de tu proyecto
    "./src/**/*.{js,ts,jsx,tsx}", // Analiza los archivos JS, TS, JSX y TSX en la carpeta src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};