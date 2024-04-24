import autoprefixer from 'autoprefixer'
import postcssNested from 'postcss-nested'
import postcssImport from 'postcss-import'

export default {
  plugins: [autoprefixer(), postcssImport(), postcssNested()],
}
