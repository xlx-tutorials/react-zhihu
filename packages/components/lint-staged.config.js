module.exports = {
  '**/*.{ts,tsx}': () => [
    'yarn test:typechecks',
    'yarn test:lint',
    'yarn test:format',
  ],
}
