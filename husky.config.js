module.exports = {
  hooks: {
    'pre-commit': [
      'lint-staged',
      'npm run cache:posts && git add cache/data.js',
    ],
  },
};
