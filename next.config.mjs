import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.digitaloceanspaces.com",
      },
      {
        protocol: "https",
        hostname: "**.cloudimg.io",
      },
      {
        protocol: "https",
        hostname: "**.soum.sa",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
