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
        memberSyntaxSortOrder: ['all', 'multiple', 'single', 'none'],
        allowSeparatedGroups: false,
      },
    ],
  },
  ignorePatterns: ['src/**/*.mdx', 'src/**/*.*css'], //mdx, scss or css
}
