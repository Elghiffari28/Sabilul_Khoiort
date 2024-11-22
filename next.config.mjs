/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
      {
        hostname: "cdn.devdojo.com",
      },
    ],
  },
};

export default nextConfig;
