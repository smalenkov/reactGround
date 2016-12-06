module.exports = {
  entry: './examples/firstSteps/modules/app',

  output: {
    filename: './examples/firstSteps/modules/bundle.js'
  },

  module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }
  ]
}
};