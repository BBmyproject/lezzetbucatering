import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/hizmetlerimiz',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
