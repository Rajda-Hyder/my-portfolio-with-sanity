import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"], // Add the Sanity CDN domain here
  },
};

export default nextConfig;
