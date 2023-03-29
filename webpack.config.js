const path = require("path");
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.jsx?$/,
    use: [
      {
        loader: require.resolve("js-loader"),
        options: {
          reportFiles: ["/*.{js|jsx}"],
        },
      },
    ],
  });
  config.resolve.extensions.push(".js", ".jsx");
  config.resolve.alias = Object.assign(config.resolve.alias, {
    "@": path.resolve(__dirname, ".."),
  });
  return config;
};
