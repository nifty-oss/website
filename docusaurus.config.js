// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "nifty-oss",
  tagline: "Open source protocols for digital assets on Solana",
  favicon: "img/favicon.ico",
  url: "https://nifty-oss.org/",
  baseUrl: "/",
  organizationName: "nifty-oss",
  projectName: "website",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        theme: {
          customCss: "./src/css/nifty.css"
        }
      })
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/nifty-oss-social-card.jpg",
      navbar: {
        title: "nifty-oss",
        logo: {
          alt: "nifty-oss",
          src: "img/nifty-logo-small.png"
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "left",
            label: "Nifty Asset",
            href: "/standard"
          },
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "left",
            label: "Documentation"
          },
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "left",
            label: "Blog",
            href: "/blog"
          },
          {
            href: "https://github.com/nifty-oss/asset",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Overview",
                to: "/docs/asset/overview"
              },
              {
                label: "Getting Started",
                to: "/docs/category/getting-started"
              }
            ]
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/nifty_oss"
              },
              {
                label: "Discord",
                href: "https://discord.gg/ZJebrdQr7K"
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/nifty-oss/asset"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} nifty-oss`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      }
    })
};

export default config;
