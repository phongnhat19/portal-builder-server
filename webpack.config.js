const path = require('path');
const config = {
  entry: path.resolve('src/index.ts'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      'react': path.resolve(__dirname, '../node_modules/react'),
      'react-dom': path.resolve(__dirname, '../node_modules/react-dom')
    }
  },
  output: {
    path: path.resolve('dist'),
    filename: 'portal.min.js'
  },
  module: {
    rules: [
      {
        test: /.ts?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript']
          }
        }
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
    //...
  }
  return [config];
};
