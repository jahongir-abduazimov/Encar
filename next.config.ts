import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gmcar-backend.best-change-grozniy.ru',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;
