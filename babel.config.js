module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: './src/components',
          navigation: './src/navigation',
          views: './src/views',
          types: './src/types',
          constants: './src/constants',
          hooks: './src/hooks',
          src: './src',
        },
      },
    ],
  ],
};
