module.exports = {
  entry: [
    './src/App.js'
  ],
  output: {
    path: __dirname,
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }]
  }
};

//  TYPE THIS IN COMMAND LINE TO RESTART SERVER
//  node_modules/.bin/webpack-dev-server
