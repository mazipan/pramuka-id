// const withPrefesh = require('@prefresh/next')
const withPWA = require('next-pwa')
const withPreact = require('next-plugin-preact')

const workboxConfig = require('./wb.config')

const configs = {
  poweredByHeader: false,
  pwa: workboxConfig,
  webpack(config, { dev, isServer }) {
    const splitChunks = config.optimization && config.optimization.splitChunks
    if (splitChunks) {
      const cacheGroups = splitChunks.cacheGroups
      const preactModules =
        /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/

      if (cacheGroups) {
        if (cacheGroups.framework) {
          cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
            test: preactModules
          })
        } else {
          cacheGroups.preact = {
            name: 'framework',
            chunks: 'all',
            test: preactModules
          }
        }
      }
    }

    config.resolve.fallback = { fs: false, path: false, stream: false, constants: false }

    // Install webpack aliases:
    const aliases = config.resolve.alias || (config.resolve.alias = {})
    aliases.react = aliases['react-dom'] = 'preact/compat'

    // inject Preact DevTools
    if (dev && !isServer) {
      const entry = config.entry
      config.entry = () =>
        entry().then((entries) => {
          entries['main.js'] = ['preact/debug'].concat(entries['main.js'] || [])
          return entries
        })
    }

    return config
  }
}

module.exports = withPreact(withPWA(configs))
