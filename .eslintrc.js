module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb/hooks'],
  rules: {
    'import/no-unresolved': 'off',
    'no-console': 'off', // it is a study project, no need for overengineering
  },
  env: {
    jest: true,
  },
};
