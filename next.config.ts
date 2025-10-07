import type { NextConfig } from 'next';
// import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

const nextConfig: NextConfig = {
  poweredByHeader: false,

  // assetPrefix: '/blog',

  compress: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  devIndicators: false,

  compiler: {
    removeConsole: true,
  },

  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
