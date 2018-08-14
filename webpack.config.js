module.exports = {
  entry: "./jsx/app.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/js/",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader" 
      }
    ]
  }
}
