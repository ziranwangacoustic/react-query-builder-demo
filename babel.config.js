module.exports = api => {
  api.cache(true);
  return {
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-async-to-generator',
      'babel-plugin-dynamic-import-webpack',
      'react-hot-loader/babel',
    ],
    presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          modules: false,
          corejs: 3,
          targets: '> 0.25%, not dead',
          useBuiltIns: 'usage',
        },
      ],
    ],
  };
};
