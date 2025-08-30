import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },

  // 👇 force relative paths for assets
  assetPrefix: "./",
  basePath: "",
  trailingSlash: true,
};

export default nextConfig;
