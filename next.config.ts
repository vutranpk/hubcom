import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  devIndicators: false,
  // Allow network access for local testing on mobile/other PCs
  // @ts-ignore - Some Next.js versions use this under experimental or undocumented flags
  allowedDevOrigins: ['10.154.149.103', 'http://10.154.149.103:3000'],
};

export default nextConfig;
