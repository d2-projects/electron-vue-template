/* eslint-disable no-template-curly-in-string */

module.exports = {
  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: 'page-'
    },
    electronBuilder: {
      builderOptions: {
        productName: 'electron-vue-template',
        artifactName: '${productName}-${version}.${ext}',
        win: {
          signAndEditExecutable: false,
          target: ['nsis', 'portable']
        },
        portable: {
          artifactName: '${productName}-Portable-${version}.${ext}'
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transformAssetUrls = {
          img: 'src',
          image: 'xlink:href',
          'a-avatar': 'src'
        }
        return options
      })
  }
}
