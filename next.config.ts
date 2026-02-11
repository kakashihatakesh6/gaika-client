import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
      {
        protocol: 'https',
        hostname: 'wallpaperaccess.com',
      },
      {
        protocol: 'https',
        hostname: 'e0.365dm.com',
      },
      {
        protocol: 'https',
        hostname: 'media.pitchfork.com',
      },
      {
        protocol: 'https',
        hostname: 'in.bmscdn.com',
      },
      {
        protocol: 'https',
        hostname: 'img.etimg.com',
      },
      {
        protocol: 'https',
        hostname: 'images.news18.com',
      },
      {
        protocol: 'https',
        hostname: 'tatamumbaimarathon.procam.in',
      },
      {
        protocol: 'https',
        hostname: 'bsmedia.business-standard.com',
      },
      {
        protocol: 'https',
        hostname: 'www.wimbledon.com',
      },
      {
        protocol: 'https',
        hostname: 'documents.iplt20.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'www.t20worldcup.com',
      },
      {
        protocol: 'https',
        hostname: 'commons.wikimedia.org',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:5000/api/:path*",
      },
    ];
  },
};

export default nextConfig;
