import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "img.freepik.com/**",
  //     },
  //   ],
  // },

  images: {
    remotePatterns: [ 
      {
        protocol: "https",
        hostname: "github.com/**",
      },
    ],
  },
  // if used turbopack
  // transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
