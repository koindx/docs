// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KoinDX Docs',
  tagline: 'The Koinos Dex',
  url: 'https://doc.koindx.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'koindx', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
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
          'Q2 2023: KoinDX DAO IDO <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/koindx">Follow us on Twitter</a> and don\'t miss an update.',
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
          { href: 'https://medium.com/@koindx', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/koindx',
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
                href: 'https://koindx.com'
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/v7K49BBH8N',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/koindx',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/koindx'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://medium.com/@koindx',
              },
              {
                label: 'Koinos Whaletracker',
                href: 'https://t.me/koinoswhaletracker',
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
