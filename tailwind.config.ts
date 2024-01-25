import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import { kayordPlugin } from '@kayord/tw-plugin';

export default {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/@kayord/ui/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		}
	},
	plugins: [kayordPlugin]
} satisfies Config;
