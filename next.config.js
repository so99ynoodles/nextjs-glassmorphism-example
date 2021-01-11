const RemoveServiceWorkerPlugin = require('webpack-remove-serviceworker-plugin');

module.exports = {
  i18n: {
    locales: ['en', 'ja', 'ko'],
    defaultLocale: 'ja',
    localeDetection: false,
  },
  async redirects() {
    return [
      {
        source: '/tags/:slug*',
        destination: '/blog/tags/:slug*',
        permanent: true,
      },
      {
        source: '/:slug([0-9]{4}-[0-9]{2}-[0-9]{2}.*$)',
        destination: '/blog/posts/:slug',
        permanent: true,
      },
    ];
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new RemoveServiceWorkerPlugin());
    return config;
  },
};
