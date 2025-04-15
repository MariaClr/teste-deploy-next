/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: "clara",
    basePath: process.env.SUBPATH,
    assetPrefix: process.env.SUBPATH,

};

export default nextConfig;
