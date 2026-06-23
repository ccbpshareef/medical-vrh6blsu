import type { NextConfig } from "next";
import path from "node:path";

const repoRoot = path.join(__dirname, "../../..");
const clientRoot = path.join(repoRoot, "apps", "client");

const nextConfig: NextConfig = {
  outputFileTracingRoot: repoRoot,
  turbopack: {
    root: repoRoot,
    resolveAlias: {
      "@/lib": path.join(repoRoot, "packages/shared/src/lib"),
      "@/theme": path.join(clientRoot, "src/theme"),
      "@generated": path.join(repoRoot, "generated/lib"),
      "@generated-theme": path.join(repoRoot, "generated/theme"),
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
