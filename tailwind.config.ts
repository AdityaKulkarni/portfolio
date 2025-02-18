import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				fade: "fadeIn 1s ease-in-out forwards",
				"fade-slide-300": "fade-slide 1s ease 300ms forwards",
				"fade-slide-500": "fade-slide 1s ease 500ms forwards",
				"fade-slide-700": "fade-slide 1s ease 700ms forwards",
				"fade-slide-900": "fade-slide 1s ease 900ms forwards",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},

				"fade-slide": {
					"0%": {
						opacity: "0",
						transform: "translateX(-100%)",
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)",
					},
				},
			},
		},
	},
	plugins: [],
};
export default config;
