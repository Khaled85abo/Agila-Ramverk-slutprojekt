module.exports = {
  outputDir: "docs",
  publicPath: "//",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`,
      },
    },
  },
};
