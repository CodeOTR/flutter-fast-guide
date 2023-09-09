import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
	site: 'https://github.com/CodeOTR',
    base: '/flutter-fast-guide',
	integrations: [
		markdoc(),
		starlight({
			favicon: 'favicon.ico',
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
						{ label: 'Build an App', link: '/start/build/' },
						{ label: 'Updates', link: '/start/updates/' },
					],
				},
				{
					label: 'Setup Steps',
					items: [
						{ label: 'Setup?', link: '/setup/overview/' },
						{ label: 'Firebase', link: '/setup/firebase/' },
						{ label: 'Supabase', link: '/setup/supabase/' },
						{ label: 'Sentry', link: '/setup/sentry/' },
						{ label: 'Amplitude', link: '/setup/amplitude/' },
						{ label: 'RevenueCat', link: '/setup/revenuecat/' },
					],
				},
				{
					label: 'Features',
					items: [
						{ label: 'List', link: '/features/overview/' },
					],
				},
				{
					label: 'Roadmap',
					items: [
						{ label: 'Planned Features', link: '/roadmap/plan/' },
						{ label: 'Changelog', link: '/roadmap/changelog/' },
					],
				},
			],
		}),
	],
});
