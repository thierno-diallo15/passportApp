/** @type {import('next').NextConfig} */
const nextConfig = {
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