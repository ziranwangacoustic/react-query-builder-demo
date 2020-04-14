const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const paths = {
  entry: path.join(__dirname, './src/index.js'),
  html: path.join(__dirname, './src/index.html'),
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
};

module.exports = (env, argv) => {
  const config = {
    entry: {
      app: [paths.entry],
    },
    output: {
      filename: 'js/[name].[hash:8].js',
      path: paths.dist,
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: paths.src,
          use: ['babel-loader', 'eslint-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.less$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            {
              loader: 'less-loader',
              options: {
                javascriptEnabled: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new FriendlyErrorsWebpackPlugin(),
      new HtmlWebpackPlugin({ template: paths.html }),
    ],
    devServer: {
      compress: true,
      contentBase: paths.dist,
      historyApiFallback: true,
      hot: true,
      port: 3000,
    },
    resolve: {},
  };

  switch (argv.mode) {
    case 'development': {
      config.plugins.push(new webpack.HotModuleReplacementPlugin());
      config.resolve.alias = {
        'react-dom': '@hot-loader/react-dom',
      };
      break;
    }
    case 'production':
    default: {
      if (argv.analyze) {
        config.plugins.push(new BundleAnalyzerPlugin());
      }
    }
  }

  return config;
};
