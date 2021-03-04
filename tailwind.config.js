const brandLight = '#D4CACB';
const brandDark = '#51363B';

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    uniformColorPalette: true,
    extendedFontSizeScale: true,
    applyComplexClasses: true,
  },
  purge: {
    content: ['./src/**/*.html', './src/**/*.js'],
  },
  theme: {
    interFontFeatures: {
      default: ['calt', 'liga', 'kern'],
      numeric: ['tnum', 'salt', 'ss02'],
    },
    extend: {
      fontFamily: {
        brand: ["'Caecilia LT Std 56 Italic'", 'serif'],
      },
      colors: {
        brand: {
          light: brandLight,
          dark: brandDark,
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-font-inter')({
      importFontFace: true,
      disableUnusedFeatures: true,
    }),
  ],
};
