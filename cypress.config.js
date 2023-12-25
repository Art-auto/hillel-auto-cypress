const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'tn1sm9',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
