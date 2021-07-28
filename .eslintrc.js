module.exports = {
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'standard',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    camelcase: 'off',
    'import/extensions': 'off',
    'no-alert': 'warn',
    'no-console': 'warn',
    'no-nested-ternary': 'off',
    'no-unused-vars': 'error',
    'multiline-ternary': 'off',
    'react/prop-types': 'off',
    'react/no-children-prop': 'off',
    'react/no-unescaped-entities': 'warn',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2
  }
}
