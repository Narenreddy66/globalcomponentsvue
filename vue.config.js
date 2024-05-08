module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://192.168.1.240:8001/",
        changeOrigin: true,
      },
    },
  },
};
