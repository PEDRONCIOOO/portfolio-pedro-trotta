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
        source: "/:path*",  
        destination: "https://www.trotta.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
