/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Enable image optimization caching
    minimumCacheTTL: 31536000, // Cache for 1 year (in seconds)
    formats: ['image/webp'], // Use WebP format for better compression
  },
  async rewrites() {
    return [
      {
        source: '/blog/:id.md',
        destination: '/blog/:id/md',
      },
    ];
  },
}

module.exports = nextConfig