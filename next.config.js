/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['10.145.129.95'],
  webpack: (config, { isServer }) => {
    // Optimisations webpack
    config.optimization = {
      ...config.optimization,
      minimize: true,
    }
    return config
  },
}

module.exports = nextConfig 