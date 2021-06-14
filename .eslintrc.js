module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    camelcase: 0,
    'react/react-in-jsx-scope': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'no-unused-vars': 0,
    'react/prop-types': 0,
    'dot-notation': 0,
    'multiline-ternary': 0,
  },
}
