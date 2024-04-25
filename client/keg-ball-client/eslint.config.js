import eslint from '@eslint/js'
import teslint from 'typescript-eslint'
import eslintStylisticPlugin from '@stylistic/eslint-plugin'
import eslintSvelteParser from 'svelte-eslint-parser'
import eslintSveltePlugin from 'eslint-plugin-svelte'
import eslintTypescriptParser from '@typescript-eslint/parser'
import globals from 'globals'

export default [
  eslintStylisticPlugin.configs['recommended-flat'],
  eslint.configs.recommended,
  ...teslint.configs.strict,
  ...teslint.configs.stylistic,
  ...eslintSveltePlugin.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'no-alert': 'warn',
      'no-console': 'warn',
      'no-debugger': 'warn',
    },
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: eslintSvelteParser,
      parserOptions: {
        parser: eslintTypescriptParser,
      },
    },
    rules: {
      'indent': 'off',
      'svelte/block-lang': ['error', { script: 'ts', style: 'postcss' }],
      'svelte/indent': 'error',
      'svelte/html-quotes': ['warn', { prefer: 'single' }],
      'svelte/html-closing-bracket-spacing': 'error',
      'svelte/mustache-spacing': 'error',
      'svelte/no-spaces-around-equal-signs-in-attribute': 'error',
      'svelte/shorthand-attribute': 'error',
      'svelte/shorthand-directive': 'error',
      'svelte/sort-attributes': 'error',
      'svelte/spaced-html-comment': 'error',
    },
  },
]
