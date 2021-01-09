const withMDX = require('@next/mdx')();

module.exports = withMDX({
  pageExtensions: ['tsx', 'mdx'],
  i18n: {
    locales: ['en', 'ja', 'kr'],
    defaultLocale: 'ja',
  },
});
