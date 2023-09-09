import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/CodeOTR',
  base: '/flutter-fast-guide',
  integrations: [
    tailwind(
      // {	applyBaseStyles: false,}
    ), 
    starlight({
    favicon: 'favicon.ico',
    title: 'Flutter Fast',
    logo: {
      src: './src/assets/flutter-fast-small.png'
    },
    customCss: 
      [
        './src/styles/index.css',
       './src/styles/tailwind.css',

  ]
    ,
    social: {
      github: 'https://github.com/CodeOTR/flutter-fast-guide',
      twitter: 'https://twitter.com/CodeOnTheRocks_',
      threads: 'https://www.threads.net/@codeontherocks'
    },
    sidebar: [{
      label: 'Start Here',
      items: [
        // Each item here is one entry in the navigation menu.
        {
          label: 'Why Flutter Fast?',
          link: '/docs/start/why/'
        }, {
          label: 'Installation',
          link: '/docs/start/installation/'
        }, {
          label: 'Building',
          link: '/docs/start/build/'
        }, 
        {
          label: 'Deploying',
          link: '/docs/start/deploy/'
        },{
          label: 'CLI Updates',
          link: '/docs/start/updates/'
        }]
    }, {
      label: 'Setup Steps',
      items: [{
        label: 'Setup?',
        link: '/docs/setup/overview/'
      }, {
        label: 'Firebase',
        link: '/docs/setup/firebase/'
      }, {
        label: 'Supabase',
        link: '/docs/setup/supabase/'
      }, {
        label: 'Sentry',
        link: '/docs/setup/sentry/'
      }, {
        label: 'Amplitude',
        link: '/docs/setup/amplitude/'
      }, {
        label: 'RevenueCat',
        link: '/docs/setup/revenuecat/'
      },
      {
        label: 'Fastlane',
        link: '/docs/setup/fastlane/'
      }]
    }, {
      label: 'Features',
      items: [{
        label: 'List',
        link: '/docs/features/overview/'
      },
      {
        label: 'Scripts',
        link: '/docs/features/scripts/'
      }]
    }, {
      label: 'Roadmap',
      items: [{
        label: 'Planned Features',
        link: '/docs/roadmap/plan/'
      }, {
        label: 'Changelog',
        link: '/docs/roadmap/changelog/'
      }]
    }]
  })]
});