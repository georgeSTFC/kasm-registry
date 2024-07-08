/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Hartree Centre vis-E Kasm Registry',
    description: 'Hartree Centre vis-E Kasm workspaces.',
    icon: 'https://georgeSTFC.github.io/kasm-registry/1.0/image.png',
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
