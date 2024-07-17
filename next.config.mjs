/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',  // Allows loading images from any https domain
      },
      {
        protocol: 'http',
        hostname: '**',  // Allows loading images from any http domain
      },
    ],
  },
};

export default nextConfig;
