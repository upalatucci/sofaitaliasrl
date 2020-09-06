module.exports = {
  assetsDir: 'home',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/_variables.scss";
        `
      }
    }
  }
};