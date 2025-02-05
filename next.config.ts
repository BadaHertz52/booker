import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.nl.go.kr',
      },
    ],
  },
};
export default nextConfig;
