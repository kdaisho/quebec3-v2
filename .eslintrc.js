module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: 'react-app',
  rules: {
    'no-console': [1],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],
  },
}
