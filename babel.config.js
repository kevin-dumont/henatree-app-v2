module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'lodash',
      'ramda',
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
            '@components': './src/components',
            '@navigations': './src/navigations',
            '@typings': './src/typings',
            '@constants': './src/constants',
            '@utils': './src/utils',
            '@blocks': './src/blocks',
            '@assets': './assets',
            '@hooks': './src/hooks',
            '@i18n': './src/i18n',
          },
        },
      ],
    ],
  };
};
