import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "opengraph.githubassets.com",
        pathname: "/**",
      },
    ],
    qualities: [75, 100],
  },
};

export default nextConfig;
