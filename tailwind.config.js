/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				blackColor: '#313131',
				greyColor: '#9D9D9D',
				mainColor: '#00E979',
				inputColor: '#F6F6F6',
				hoverColor: '#00D870',
			},
		},
	},
	plugins: [],
};
