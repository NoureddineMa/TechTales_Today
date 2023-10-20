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
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};

module.exports = nextConfig;
