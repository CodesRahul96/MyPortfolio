/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      animation: {
        updown: 'bounce 3s ease-in-out infinite',
        updn: 'mover 1s infinite  alternate',
        hanim1: 'rotat1 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        hanim2: 'rotat2 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      keyframes: {
        rotat1: {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(90deg)' },
        },
        rotat2: {
          '0%': { transform: 'rotate(90deg)' },
          '100%': { transform: 'rotate(0)' },
        },
        mover: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-10px)' },
        },
      },
    },
    fontFamily: { poppins: ['Poppins'], centra: ['Centra'] },
    screens: {
      xlx: { max: '1350px' },
      lgx: { max: '1023px' },
      mdx: { max: '850px' },
      msx: { max: '768px' },
      mxi: { min: '768px' },
      smx: { max: '640px' },
      xsx: { max: '340px' },
    },
    backgroundImage: {
      'banner-bg': "url('./assets/img/banner-bg.png')",
      'footer-bg': "url('./assets/img/footer-bg.png')",
    },
  },
  plugins: [],
};
