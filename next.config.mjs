/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      // change file size limit
      bodySizeLimit: '2MB',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
