// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BK`s notes",
  tagline: "Because notes are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://kolevbm.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: "kolevbm.github.io", // Usually your repo name.
  organizationName: "kolevbm", // Usually your GitHub org/user name.
  deploymentBranch: "gh-pages",
  trailingSlash: undefined,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },

          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Notes",
        logo: {
          alt: "BK Notes Logo",
          src: "img/favicon.ico",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "espressifSidebar",
            position: "left",
            label: "Espressif",
          },
          // {
          //   type: "docSidebar",
          //   sidebarId: "gitSidebar",
          //   position: "left",
          //   label: "Git",
          // },
          {
            type: "docSidebar",
            sidebarId: "linuxSidebar",
            position: "left",
            label: "Linux",
          },
          {
            type: "docSidebar",
            sidebarId: "mikrotikSidebar",
            position: "left",
            label: "MikroTik",
          },
          {
            type: "docSidebar",
            sidebarId: "dockerSidebar",
            position: "left",
            label: "Docker",
          },
          {
            type: "docSidebar",
            sidebarId: "regexSidebar",
            position: "left",
            label: "RegEx",
          },
          {
            type: "docSidebar",
            sidebarId: "nvidiaSidebar",
            position: "left",
            label: "Nvidia",
          },
          { to: "/blog", label: "Blog", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   label: "Stack Overflow",
          //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Boris Kolev`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["powershell", "bash"],
      },
    }),
};


export default config;
