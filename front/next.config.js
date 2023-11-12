/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:slug*",
        destination: "/pages/:slug*",
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};

module.exports = nextConfig;
