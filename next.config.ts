import CompressionPlugin from 'compression-webpack-plugin';
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
  webpack: (config, { isServer }) => {
    config.optimization.minimize = true;
    config.optimization.splitChunks = {
      ...config.optimization.splitChunks,
      chunks: 'all',
      minSize: 100,
      minChunks: 2,
    };

    if (!isServer) {
      config.plugins.push(
        new CompressionPlugin({
          filename: '[path][base].br',
          algorithm: 'brotliCompress',
          test: /\.(js|css|html|svg)$/,
          compressionOptions: {
            level: 8,
          },
          threshold: 1 * 1024,
          minRatio: 0.8,
        }),
      );
    }

    return config;
  },
};

export default nextConfig;
