/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Enable image optimization caching
    minimumCacheTTL: 31536000, // Cache for 1 year (in seconds)
    formats: ['image/webp'], // Use WebP format for better compression
  },
}

module.exports = nextConfig