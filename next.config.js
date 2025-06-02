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
  images: {
    domains: ['media.giphy.com', 'illustrations.popsy.co', 'cdn.pixabay.com'],
  },
}

module.exports = nextConfig 