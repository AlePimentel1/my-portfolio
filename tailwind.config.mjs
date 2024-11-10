/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				text: 'text 5s ease infinite',
				wave: 'wave 1.5s ease infinite',
			},
			keyframes: {
				text: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center',
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center',
					},
				},
				wave: {
					'0%': {
						transform: 'rotate(0deg)',
					},
					'10%': {
						transform: 'rotate(14deg)',
					},
					'20%': {
						transform: 'rotate(-8deg)',
					},
					'30%': {
						transform: 'rotate(14deg)',
					},
					'40%': {
						transform: 'rotate(-4deg)',
					},
					'50%': {
						transform: 'rotate(10deg)',
					},
					'60%': {
						transform: 'rotate(0deg)',
					},
					'100%': {
						transform: 'rotate(0deg)',
					},
				},
			},
		},
	},
	plugins: [],
}
