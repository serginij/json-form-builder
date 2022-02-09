module.exports = {
  extends: 'react-app',
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'jsx-a11y/alt-text': 'off',
        'jsx-a11y/img-redundant-alt': 'off',
        '@typescript-eslint/no-useless-constructor': 'off',
        'import/no-anonymous-default-export': [
          'off',
          {
            allowObject: true,
          },
        ],
      },
    },
  ],
  plugins: ['import'],
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'components/**',
            group: 'internal',
          },
          {
            pattern: 'pages/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
  },
};
