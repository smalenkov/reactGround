module.exports = {
  entry: {
    "app": './examples/firstSteps/modules/app.jsx',
    "script": './examples/firstSteps/modules/testmod'
  },
  output: {
    filename: '[name].js',
    path: './examples/firstSteps/build'
  },

  watch: true,

  module: {
  loaders: [
    {
      test: /\.jsx$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    },
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }
  ]
}
};