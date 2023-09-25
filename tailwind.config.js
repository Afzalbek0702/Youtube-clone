/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				// => @media (max-width: ...) { ... }
				"2xl": { max: "1535px" },
				xl: { max: "1279px" },
				lg: { max: "1023px" },
				md: { max: "767px" },
				sm: { max: "400px" },
			},
			colors: {
				Primary: "#101010",
				brGray: "#303030",
				Secondary: "#303030",
				hover: "#606060",
				Gray: "#AAAAAA",
			},
		},
	},
	plugins: [],
};
