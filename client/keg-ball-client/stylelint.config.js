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
  },
  overrides: [
    {
      files: ['*.svelte'],
      customSyntax: 'postcss-html',
    },
  ],
}
