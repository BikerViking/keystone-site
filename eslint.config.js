const js = require('@eslint/js');
module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    ignores: ['dist/**','node_modules/**'],
    languageOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    rules: {
      semi: ['error', 'always'],
      'no-unused-vars': ['error', { args: 'none' }],
      'no-console': 'error'
    }
  }
];
