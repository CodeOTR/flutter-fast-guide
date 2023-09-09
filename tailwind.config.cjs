const defaultTheme = require("tailwindcss/defaultTheme");
const starlightPlugin = require('@astrojs/starlight-tailwind')
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue,css,md,mdx}"
  ],
  theme: {

    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",

        // Your preferred accent color. Indigo is closest to Starlight’s defaults.
        accent: colors.indigo,
        // Your preferred gray scale. Zinc is closest to Starlight’s defaults.
        gray: colors.zinc,

      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
    },
  },
  corePlugins: {
    fontSize: false,
    preflight: true
  },
  plugins: [require("tailwindcss-fluid-type"),
  starlightPlugin()
  ],
};
