module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {},
    inset: {
      '0': 0,
      '1/2': '50%',
		},
		minWidth: {
			'80': '80px'
		},
		minHeight: {
			'80': '80px'
		}
  },
  variants: {},
  plugins: [],
};
