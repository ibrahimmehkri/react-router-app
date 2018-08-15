module.exports = {
  entry: "./jsx/app.jsx",
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
