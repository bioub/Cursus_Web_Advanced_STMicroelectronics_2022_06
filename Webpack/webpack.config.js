const { BannerPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const json5 = require("json5");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

function generateConfig(env, args) {
  const plugins = [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new BannerPlugin({
      banner: "Copyright STMicroelectronics",
    }),
  ];

  if (args.mode === "production") {
    plugins.push(new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }));
  }

  // devtool: false, // pour prod sans afficher les sources
  // devtool: 'source-map', // pour prod avec les sources originales
  // devtool: 'eval-source-map', // pour dev avec les sources originales
  const devtool = args.mode === "development" ? "eval-source-map" : false;

  /** @type {import('webpack').Configuration} */
  const config = {
    entry: {
      main: "./src/js/index.js"
    },
    output: {
      clean: true,
      filename:
        args.mode === "development" ? "[name].js" : "[name].[contenthash].js",
    },
    devtool,
    plugins,
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            args.mode === "development"
              ? "style-loader"
              : MiniCssExtractPlugin.loader,
            "css-loader",
          ],
        },
        {
          test: /\.m?js$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.json5$/,
          type: "json",
          parser: {
            parse: json5.parse,
          },
        },
      ],
    },
    target: ["web", "es5"],
    optimization: {
      minimizer: [
        // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        `...`,
        new CssMinimizerPlugin(),
      ],
    },
  };

  return config;
}

module.exports = generateConfig;
