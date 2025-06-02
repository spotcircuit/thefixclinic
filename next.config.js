/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // This ensures that image optimization works correctly
    // for images from your WordPress site
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thefixclinic.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  // Handle redirects to maintain WordPress URL structure
  async redirects() {
    return [
      // Redirect from WordPress style URLs to Next.js style URLs
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/about-us-2',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/success-stories',
        destination: '/reviews',
        permanent: true,
      },
      {
        source: '/blogpost',
        destination: '/blog',
        permanent: true,
      },
      // Keep the same structure for service pages
      {
        source: '/facial-balancing/:slug',
        destination: '/facial-balancing/:slug',
        permanent: false,
      },
      {
        source: '/skin/:slug',
        destination: '/skin/:slug',
        permanent: false,
      },
      {
        source: '/weight-loss-wellness/:slug',
        destination: '/weight-loss-wellness/:slug',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;