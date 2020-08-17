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
			'250': '250px'
		},
		minHeight: {
			'80': '80px'
		},
		listStyleType: {
			'lower-alpha': 'lower-alpha',
		}
  },
  variants: {},
  plugins: [],
};
