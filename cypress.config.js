const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'odvi1m',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
