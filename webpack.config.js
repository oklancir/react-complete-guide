module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: require.resolve('babel-loader'),
        include: ['src'],
        options: {
          presets: [
            'dynamic-import-node',
            'remove-webpack', 
          ],
        }
      ],
    },
  },
}