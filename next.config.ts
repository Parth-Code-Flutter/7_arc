import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This project lives on an exFAT volume.
  // Turbopack's on-disk cache cannot open there, so the dev server exits after "Ready".
  agentRules: false,
  images: {
    unoptimized: true,
  },
  experimental: {
    turbopackFileSystemCacheForDev: false,
    turbopackFileSystemCacheForBuild: false,
  },
};

export default nextConfig;
