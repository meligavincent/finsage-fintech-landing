import type { NextConfig } from "next";

const staticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  reactStrictMode: true,
  ...(staticExport && {
    output: "export",
    basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
    trailingSlash: true,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
