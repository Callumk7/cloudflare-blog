import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				mono: ["Inconsolata", "monospace"],
				syne: ["Syne", "sans-serif"],
				grotesk: ["Space Grotesk", "sans-serif"],
			},
			fontSize: {
				"2vw": "2vw",
				"3vw": "3vw",
				"4vw": "4vw",
				"5vw": "5vw",
				"6vw": "6vw",
			},
			colors: {
				background: {
					DEFAULT: "hsl(var(--background))",
					hover: "hsl(var(--background-hover))",
					"hover-light": "hsl(var(--background-hover-light))",
					accent: "hsl(var(--background-accent))",
				},
				foreground: "hsl(var(--foreground))",
				primary: {
					1: "hsl(var(--primary-1))",
					2: "hsl(var(--primary-2))",
					3: "hsl(var(--primary-3))",
				},
				ring: "hsl(var(--ring))",
				accent: "hsl(var(--accent))",
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
} satisfies Config;
