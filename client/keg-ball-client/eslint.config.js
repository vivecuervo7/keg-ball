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
  },
]
