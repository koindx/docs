// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KoinDX Docs',
  tagline: 'The Koinos Dex',
  url: 'https://docs.koindx.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'koindx', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  scripts: [{src: 'https://plausible.io/js/script.js', async: true, defer: true, 'data-domain': 'docs.koindx.com'}],
  markdown: {
    mermaid: true
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Docs folder path relative to website dir.
          path: './docs',
          routeBasePath: '/',
          // Sidebars file relative to website dir.
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
   
      announcementBar: {
        id: 'support_us',
        content:
          'News: KoinDX Contract Migration - <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/koindx?utm_source=koindx-docs">Follow us on Twitter</a> and don\'t miss an update.',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      image: 'img/koindx_open_graph_image.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'KoinDX',

        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/koindx?utm_source=koindx-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'General',
            items: [
              {
                label: 'Docs',
                to: '/',
              },
              {
                label: 'KoinDX Labs',
                href: 'https://koindx.com?utm_source=koindx-docs'
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/v7K49BBH8N?utm_source=koindx-docs',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/koindx?utm_source=koindx-docs',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/koindx?utm_source=koindx-docs'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.koindx.com?utm_source=koindx-docs',
              },
              {
                label: 'Koinos Whaletracker',
                href: 'https://t.me/koinoswhaletracker?utm_source=koindx-docs',
              },
              {
                label: 'Status',
                href: 'https://status.koindx.com?utm_source=koindx-docs',
              }
              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KoinDX`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
