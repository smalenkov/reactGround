module.exports = {
  entry: './examples/firstSteps/modules/app',

  output: {
    filename: './examples/firstSteps/modules/bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: "babel" }
    ]
  }
};