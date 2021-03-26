module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
  	filter: { // defaults to {}
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)',
      'sepia': 'sepia(1)',
      'brightness': 'brightness(30%)'
    },
    backdropFilter: { // defaults to {}
      'none': 'none',
      'blur': 'blur(5px)',
    },
    extend: {
    	backgroundImage: () => ({
    		'landing-image': 'url(/images/background.png)'
    	})
    },
  },
  variants: {
    filter: ['responsive'], // defaults to ['responsive']
    backdropFilter: ['responsive'], // defaults to ['responsive']
  },
  plugins: [
    require('tailwindcss-filters'),
  ]
}
