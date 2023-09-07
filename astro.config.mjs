import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://github.com/CodeOTR',
    base: '/flutter-fast-guide',
	integrations: [
		starlight({
			title: 'Flutter Fast',
			logo: {
				src: './src/assets/flutter-fast.png',
			},
			social: {
				github: 'https://github.com/CodeOTR/flutter-fast-guide',
				twitter: 'https://twitter.com/CodeOnTheRocks_',
				threads: 'https://www.threads.net/@codeontherocks',
			},
			sidebar: [
				{
					label: 'Start Here',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Why Flutter Fast?', link: '/start/why/' },
						{ label: 'Installation', link: '/start/installation/' },
						{ label: 'Updates', link: '/start/updates/' },
						{ label: 'Build an App', link: '/start/build/' },
					],
				},
				{
					label: 'Setup Steps',
					items: [
						{ label: 'Setup?', link: '/flutter-fast-guide/setup/overview/' },
						{ label: 'Firebase', link: '/flutter-fast-guide/setup/firebase/' },
						{ label: 'Supabase', link: '/flutter-fast-guide/setup/supabase/' },
						{ label: 'Sentry', link: '/flutter-fast-guide/setup/sentry/' },
						{ label: 'Amplitude', link: '/flutter-fast-guide/setup/amplitude/' },
						{ label: 'RevenueCat', link: '/flutter-fast-guide/setup/revenuecat/' },
					],
				},
				{
					label: 'Features',
					items: [
						{ label: 'List', link: '/flutter-fast-guide/features/overview/' },
					],
				},
				{
					label: 'Roadmap',
					items: [
						{ label: 'Planned Features', link: '/flutter-fast-guide/roadmap/plan/' },
					],
				},
			],
		}),
	],
});
