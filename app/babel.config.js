module.exports = function(api) {
  api.cache(true);
  return {
    "presets": ["module:metro-react-native-babel-preset"],
    "plugins": [
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-transform-flow-strip-types"],
      ["@babel/plugin-transform-runtime", { "helpers": true, "regenerator": false }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }]
    ]
  }
}
