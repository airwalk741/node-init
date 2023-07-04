const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  // entry : 번들링할 기본 js파일들 지정
  entry: ["./src/index.js"],
  target: "node",
  // output : 번들 결과 출력위치 지정
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src/js")],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json", "..."],
    modules: [path.resolve(__dirname, "src"), "node_modules", "./"],
  },
  mode: "none",
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "config", to: "config" }, //to the dist root directory
        { from: "src/views", to: "views" },
        { from: "src/assets", to: "assets" },
      ],
    }),
  ],
};
