import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.kasimovstudio.uz',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;
