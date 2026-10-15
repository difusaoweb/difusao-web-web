import path from "node:path";
import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const rootDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  turbopack: {
    root: rootDir,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.facebook.com",
        port: "",
        pathname: "/tr/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/vi_webp/**",
      },
    ],
  },
};

export default nextConfig;