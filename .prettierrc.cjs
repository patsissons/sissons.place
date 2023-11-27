/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  // note that we also need to include --plugin prettier-plugin-svelte
  // ^3.1.0 should resolve this issue
  // see: https://github.com/prettier/prettier/pull/15433
  plugins: ['prettier-plugin-svelte'],
}
