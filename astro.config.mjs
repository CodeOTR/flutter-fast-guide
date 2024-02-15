import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: 'https://codeotr.github.io/flutter-fast-guide/',
  base: '/flutter-fast-guide',
  integrations: [
    starlight({
      title: "Flutter Fast",
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      sidebar: [
        {
          label: "Start",
          items: [
            {
              label: "Installation",
              link: "/start/installation",
            },
            {
              label: "Build",
              link: "/start/build",
            },
            {
              label: "Deploy",
              link: "/start/deploy",
            },
            {
              label: "Getting Updates",
              link: "/start/updates",
            },
          ],
        },
        {
          label: "Setup",
          items: [
            {
              label: "Overview",
              link: "/setup/overview",
            },
            {
              label: "Amplitude",
              link: "/setup/amplitude",
            },
            {
              label: "Fastlane",
              link: "/setup/fastlane",
            },
            {
              label: "Firebase",
              link: "/setup/firebase",
            },
            {
              label: "PocketBase",
              link: "/setup/pocketbase",
            },
            {
              label: "RevenueCat",
              link: "/setup/revenuecat",
            },
            {
              label: "Sentry",
              link: "/setup/sentry",
            },
            {
              label: "Supabase",
              link: "/setup/supabase",
            },
          ],
        },
        {
          label: "Features",
          items: [
            {
              label: "Overview",
              link: "/features/overview",
            },
            {
              label: "Scripts",
              link: "/features/scripts",
            },
          ],
        },
        {
          label: "Roadmap",
          items: [
            {
              label: "Changelog",
              link: "/roadmap/changelog",
            },
            {
              label: "Plan",
              link: "/roadmap/plan",
            },
          ],
        },
      ],
    }),
  ],
});
