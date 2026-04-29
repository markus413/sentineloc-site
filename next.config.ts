import type { NextConfig } from "next";

// Static export — Cloudflare Pages serves the `out/` directory.
// trailingSlash: true makes /pricing → /pricing/index.html which CF
// Pages handles natively (no clean-URL rewrites needed).
// images.unoptimized: true is required because next/image's
// optimization needs a Node.js runtime that static export doesn't
// provide. We use plain <img> or static-imported assets instead.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
