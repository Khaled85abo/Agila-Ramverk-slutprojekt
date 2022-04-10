module.exports = {
  outputDir: "docs",
  publicPath: "/Agila-Ramverk-slutprojekt/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`,
      },
    },
  },
};
