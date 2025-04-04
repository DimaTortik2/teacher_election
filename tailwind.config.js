/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				'soft-up': '0 -10px 15px -3px rgba(0, 0, 0, 0.3)', // Мягкая тень вверх
				'softer-up': '0 -15px 25px -5px rgba(0, 0, 0, 0.15)', // Ещё мягче
			},
		},
	},
	plugins: [],
}
