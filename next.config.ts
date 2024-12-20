import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io","url","cdn-icons-png.flaticon.com"], // Add the Sanity CDN domain here
  },
};

export default nextConfig;
