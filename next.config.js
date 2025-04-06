//add type checking in IDE using JSDoc as below:
/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {  
  //experimental: {},
  trailingSlash: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'public/styles')],
  },
  images: {
    //loader: 'custom',
    //loaderFile: './lib/utils/ImageLoaderUtils.ts',
    domains: ['decodelocal.com:3000', 'lh3.googleusercontent.com'],
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],  
}


module.exports = nextConfig