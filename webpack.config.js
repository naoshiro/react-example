module.exports = {
  entry: "./src/entry.js",

  output: {
    path: '/public',
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.css/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader?presets[]=react&presets[]=es2015&presets[]=es2016"]
      },
    ]
  }
}
