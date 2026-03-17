/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/NewPortifolio',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
