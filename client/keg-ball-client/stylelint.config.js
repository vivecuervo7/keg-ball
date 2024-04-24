/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-html', 'stylelint-config-html/svelte'],
  plugins: ['stylelint-order', '@stylistic/stylelint-plugin'],
  rules: {
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': ['width', 'height'],
    'order/properties-alphabetical-order': [true],
    'alpha-value-notation': 'number',
    '@stylistic/indentation': 2,
    '@stylistic/color-hex-case': 'lower',
    '@stylistic/string-quotes': 'single',
    '@stylistic/unit-case': 'lower',
    '@stylistic/property-case': 'lower',
    '@stylistic/block-opening-brace-newline-after': 'always',
    '@stylistic/block-closing-brace-newline-before': 'always',
    '@stylistic/block-opening-brace-space-before': 'always',
    '@stylistic/named-grid-areas-alignment': true,
    '@stylistic/max-empty-lines': 1,
    '@stylistic/no-empty-first-line': true,
    '@stylistic/no-eol-whitespace': true,
    '@stylistic/no-extra-semicolons': true,
    '@stylistic/no-missing-end-of-source-newline': true,
  },
  overrides: [
    {
      files: ['*.svelte'],
      customSyntax: 'postcss-html',
    },
  ],
}
