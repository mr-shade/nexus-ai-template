import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  experimental: {
    // Tree-shake barrel imports
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
