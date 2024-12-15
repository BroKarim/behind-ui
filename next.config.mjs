import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === "production" ? "standalone" : undefined,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
  images: {
    domains: ["localhost"],
    domains: ["res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: "/components/:path*",
        destination: "/shots/components/:path*",
        permanent: true,
      },
      {
        source: "/r/:name",
        destination: "/r/styles/default/:name.json",
        permanent: true,
      },
    ];
  },
};

export default withContentCollections(nextConfig);
