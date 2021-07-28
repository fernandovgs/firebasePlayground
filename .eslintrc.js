module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb/hooks'],
  rules: {
    'import/no-unresolved': 'off',
  },
  env: {
    jest: true,
  },
};
