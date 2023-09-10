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
          'News: KoinDX Contract Migration - <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/koindx">Follow us on Twitter</a> and don\'t miss an update.',
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
                href: 'https://blog.koindx.com',
              },
              {
                label: 'Koinos Whaletracker',
                href: 'https://t.me/koinoswhaletracker',
              },
              {
                label: 'Status',
                href: 'https://status.koindx.com',
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
