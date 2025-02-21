import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],

  async redirects() {
    return [
      {
        source: "https://trotta.dev/:path*",
        has: [{ type: "host", value: "trotta.dev" }],
        destination: "https://www.trotta.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
