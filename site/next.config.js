/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Hartree Kasm Registry',
    description: 'Hartree Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://georgeSTFC.github.io/repositoryname/',
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
