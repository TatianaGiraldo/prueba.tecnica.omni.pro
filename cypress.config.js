const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "g9dgcy",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "webpack",
    },
  },
});
