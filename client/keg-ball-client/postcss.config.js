import postcssLightDark from '@csstools/postcss-light-dark-function'
import autoprefixer from 'autoprefixer'
import postcssImport from 'postcss-import'
import postcssNested from 'postcss-nested'
import postcssCustomMedia from 'postcss-custom-media'
import postcssGlobalData from '@csstools/postcss-global-data'

export default {
  plugins: [
    postcssGlobalData({
      files: [
        './src/styles/media-queries.css',
      ],
    }),
    autoprefixer(),
    postcssImport(),
    postcssCustomMedia(),
    postcssNested(),
    postcssLightDark(),
  ],
}
