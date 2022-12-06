/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'ts'],
  images: {
    domains: ['images.ctfassets.net', 'res.cloudinary.com']
  },
  swcMinify: true,
}
