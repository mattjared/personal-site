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
  async headers() {
    return [
      {
        // The canonical blog URL serves HTML *or* markdown depending on the
        // Accept header (see proxy.ts). Advertise `Vary: Accept` on the HTML
        // variant too, so CDNs never serve the cached HTML body to an agent
        // that requested markdown (acceptmarkdown.com compliance). Next.js
        // merges this with its own router Vary values.
        source: '/blog/:id',
        headers: [
          {
            key: 'Vary',
            value: 'Accept, Accept-Encoding',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig