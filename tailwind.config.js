const {theme} = require('tailwindcss/defaultConfig')
module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {},
    inset: {
      '0': 0,
      '1/2': '50%',
		},
		minWidth: {
			'80': '80px',
			'150': '150px',
			'250': '250px',
			full: '100%',
		},
		minHeight: {
			'80': '80px',
			full: '100%',
      screen: '100vh',
		},
		listStyleType: {
			...theme.listStyleType,
			'lower-alpha': 'lower-alpha',
		}
  },
  variants: {},
  plugins: [],
};
