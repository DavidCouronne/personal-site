// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'David Couronné',
  siteDescription:
    'A simple portfolio theme for Gridsome powered by Tailwind CSS v1',
  siteUrl: 'https://gridsome-portfolio-starter.netlify.com',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          whitelist: [
            'body',
            'html',
            'img',
            'a',
            'g-image',
            'g-image--lazy',
            'g-image--loaded',
            'active',
            'rich-text',
            'code',
            'language-text',
            'svg-inline--fa',
            'table',
            'table-striped',
            'table-bordered',
            'table-hover',
            'table-sm',
          ],
          whitelistPatterns: [
            /fa-$/,
            /blockquote$/,
            /^token/,
            /^pre/,
            /^code/,
            /^language/,
            /^gridsome/,
            /^line/,
            /^has/,
            /table$/,
            /table-$/,
          ],
          whitelistPatternsChildren: [
            /^token/,
            /^pre/,
            /^code/,
            /^language/,
            /^gridsome/,
            /^line/,
            /^has/,
          ],
        },
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
      },
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Documentation', // Required
        baseDir: './docs', // Where .md files are located
        pathPrefix: '/docs', // Add route prefix. Optional
        template: './src/templates/Documentation.vue', // Optional
        plugins: [
          'gridsome-plugin-remark-prismjs-all',
          'gridsome-remark-katex',
        ],
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
      },
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Gridsome Portfolio Starter Blog',
          feed_url: 'https://gridsome-portfolio-starter.netlify.com/rss.xml',
          site_url: 'https://gridsome-portfolio-starter.netlify.com/',
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://gridsome-portfolio-starter.netlify.com' + node.path,
          author: 'David Couronné',
          date: node.date,
        }),
        output: {
          dir: './static',
          name: 'rss.xml',
        },
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      },
    },
  ],
  templates: {
    Tag: '/tag/:id',
  },
  transformers: {
    remark: {
      plugins: [
        'gridsome-plugin-remark-prismjs-all',
        'gridsome-remark-katex',
        // [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
      ],
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    },
  },
}
