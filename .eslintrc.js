module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: 'react-app',
  rules: {
    'no-console': [2],
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
  ignorePatterns: ['src/**/*.mdx', 'src/**/*.*css', 'src/images/*'], //mdx, scss or css
}
