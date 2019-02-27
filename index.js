
module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'standard',
    'standard-jsx'
  ],
  plugins: [
    'import',
    'node',
    'promise',
    'react',
    'standard'
  ],
  rules: {}
}
