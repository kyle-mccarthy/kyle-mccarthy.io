// eslint-disable @typescript-eslint

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
module.exports = withBundleAnalyzer({
  env: {
    CONTACT_EMAIL: process.env.CONTACT_EMAIL
  }
});
