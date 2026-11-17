import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: 'standalone',
  turbopack: {
    root: path.resolve(__dirname),
  },
  experimental: {
    // Increase the default body size limit for API routes (PDF uploads can be large)
    serverActions: {
      bodySizeLimit: "100mb",
    },
  },
};

export default nextConfig;
