import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: '/server.js',
            },
        ];
    },
};

export default nextConfig;
