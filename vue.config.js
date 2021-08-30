module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  productionSourceMap: false,
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/api" },
      },
      "^/storage": {
        target: "http://localhost:8000",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/storage": "/storage" },
      },
    },
  },
};
