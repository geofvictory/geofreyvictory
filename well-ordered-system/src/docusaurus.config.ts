import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Well-Ordered System',
  tagline: 'Docs-as-Code Infrastructure Platform',
  favicon: 'img/favicon.ico',


  // Future flags
  future: {
    v4: true, 
  },

  // 1. Set the exact production URL where your docs will live
  url: 'https://docs.geofreyvictory.com', 
  
  // 2. Keep this as '/' since it's serving from the root of your subdomain
  baseUrl: '/',            

  // 3. Configure your GitHub parameters for automated deployment
  organizationName: 'geofvictory', // Your GitHub username
  projectName: 'well-ordered-system', // The exact name of your GitHub repository
  deploymentBranch: 'gh-pages',     // The branch where compiled HTML will be pushed
  trailingSlash: false,             // Recommended setting for GitHub Pages clean URLs

  onBrokenLinks: 'throw',
  // ... rest of your presets and themeConfig remain exactly the same
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'left',
          label: 'Guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'troubleshootingSidebar',
          position: 'left',
          label: 'Troubleshooting',
        },
        {
          type: 'docSidebar',
          sidebarId: 'adrsSidebar',
          position: 'left',
          label: 'ADRs',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Guide',
              to: '/docs/guide/intro',
            },
            {
              label: 'Troubleshooting',
              to: '/docs/troubleshooting/common-issues',
            },
            {
              label: 'ADRs',
              to: '/docs/adrs/README',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
