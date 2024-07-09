/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'HC vis-E Kasm Registry',
    description: 'HC vis-E Kasm workspaces.',
    icon: 'https://georgeSTFC.github.io/kasm-registry/image.png',
    listUrl: 'https://georgeSTFC.github.io/kasm-registry/',    
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
