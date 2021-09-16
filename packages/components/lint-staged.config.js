module.exports = {
  '**/*.{ts,tsx}': () => [
    'yarn test-components:typechecks',
    'yarn test-components:lint',
    'yarn test-components:format',
  ],
}
