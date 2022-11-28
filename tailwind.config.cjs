/** @type {import('tailwindcss').Config} */
const { screens } = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		screens: {
			xs: '406px',
			...screens,
		},
	},
	plugins: [],
};
