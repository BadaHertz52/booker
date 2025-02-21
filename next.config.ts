import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: 'www.nl.go.kr',
      },
      { hostname: 'image.aladin.co.kr' },
      { protocol: 'https', hostname: '**' },
    ],
  },
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  experimental: {
    optimizePackageImports: ['classnames', 'fast-xml-parser'],
  },
};
export default nextConfig;
