const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
module.exports = withContentlayer({
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'cdn.hashnode.com', 'ik.imagekit.io'],
  },
});
