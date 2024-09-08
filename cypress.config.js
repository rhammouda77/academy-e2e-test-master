const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '39cs7i',
  e2e: {
    baseUrl: "https://no-mfe.elham.sa/auth/login",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
