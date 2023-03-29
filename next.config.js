/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Look for .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["next/babel"], // Use Next.js' preset
          },
        },
      },
      {
        test: /\.jsx?$/, // Look for .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"], // Use Babel's preset for React
          },
        },
      },
    ],
  },
};
