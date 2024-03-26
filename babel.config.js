module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        '@babel/plugin-transform-react-jsx',
        {
          runtime: 'automatic',
        },
      ],
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.tsx'],
          alias: {
            '@': './src/',
            '@assets': './assets',
          },
        },
      ],
    ],
  };
};
