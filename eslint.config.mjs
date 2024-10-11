import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'
import angularEslintPlugin from '@angular-eslint/eslint-plugin'
import angularEslintTemplatePlugin from '@angular-eslint/eslint-plugin-template'
import angularTemplateParser from '@angular-eslint/template-parser'

export default [
  {
    files: ['**/*.ts'],
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@angular-eslint/recommended',
      'plugin:@angular-eslint/template/process-inline-templates',
      'airbnb',
      'airbnb-typescript',
      eslintConfigPrettier
    ],
    plugins: ['@typescript-eslint', '@angular-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      project: './tsconfig.json'
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'import/extensions': [
        'error',
        'ignorePackages',
        { js: 'never', ts: 'never' }
      ],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.test.ts',
            '**/*.spec.ts',
            'tailwind.config.js'
          ],
          optionalDependencies: false
        }
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type'
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ],
      'import/prefer-default-export': 'off',
      'linebreak-style': [
        'error',
        process.platform === 'win32' ? 'windows' : 'unix'
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' }
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton']
        }
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'app', style: 'kebab-case' }
      ],
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'app', style: 'camelCase' }
      ]
    }
  },
  {
    files: ['**/*.html'],
    extends: ['plugin:@angular-eslint/template/recommended'],
    parser: angularTemplateParser,
    plugins: [angularEslintTemplatePlugin],
    rules: {}
  }
]
