/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html',
    'stylelint-config-concentric-order',
  ],
  files: ['**/*.css', '**/*.svelte'],
  plugins: ['stylelint-order', '@stylistic/stylelint-plugin'],
  rules: {
    'order/order': [
      ['custom-properties',
        {
          type: 'at-rule',
          name: 'mixin',
        },
        'declarations',
        'at-rules',
        'rules',
        {
          type: 'at-rule',
          name: 'keyframes',
        }], {
        unspecified: 'bottom',
      }],
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }],
    'alpha-value-notation': 'number',
    'at-rule-no-unknown': [true, { ignoreAtRules: ['define-mixin', 'mixin', 'if'] }],
    'declaration-empty-line-before': 'never',
    'import-notation': 'string',
    'comment-empty-line-before': null,
    '@stylistic/indentation': [2, { baseIndentLevel: 1 }],
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
    '@stylistic/declaration-colon-space-before': 'never',
    '@stylistic/declaration-colon-space-after': 'always',
  },
  overrides: [
    {
      files: ['**/*.svelte'],
      customSyntax: 'postcss-html',
    },
  ],
}
