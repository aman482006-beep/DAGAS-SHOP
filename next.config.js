/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
// If building for GitHub Pages under repository /DAGAS-SHOP
const isGitHubPages = process.env.GITHUB_PAGES === 'true' || isProd;
const basePath = isGitHubPages ? '/DAGAS-SHOP' : '';

const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
