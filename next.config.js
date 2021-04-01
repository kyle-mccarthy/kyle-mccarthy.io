// eslint-disable @typescript-eslint

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });
// module.exports = withBundleAnalyzer({
//   env: {
//     CONTACT_EMAIL: process.env.CONTACT_EMAIL,
//   },
//   webpack(config, options) {
//     config['externals'] = config['externals'] || {};
//     console.log(config);
//     config.externals['mdcms'] = 'commonjs mdcms_js/mdcms_js.node';
//     return config;
//   },
// });

module.exports = {
  webpack: (config, options) => {
    config.externals = [
      {
        mdcms: 'commonjs mdcms_node',
      },
      ...config.externals,
    ];
    return config;
  },
};
