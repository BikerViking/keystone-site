const eslintPlugin = require('@eslint/js');

module.exports = [
  eslintPlugin.configs.recommended,
  {
    files: ['**/*.js'],
    ignores: ['dist/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        document: 'readonly',
        window: 'readonly',
        localStorage: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        fetch: 'readonly',
        history: 'readonly',
        location: 'readonly',
        IntersectionObserver: 'readonly',
        require: 'readonly',
        module: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
      },
    },
    rules: {
      semi: ['error', 'always'],
      'no-unused-vars': ['error', { args: 'none' }],
      'no-console': 'error',
    },
  },
];
