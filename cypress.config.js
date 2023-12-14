const { defineConfig } = require("cypress")
const cucumber = require("cypress-cucumber-preprocessor").default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      
    },
    specPattern: ['cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',"**/*.feature"],
    baseUrl: 'https://qauto.forstudy.space'
  },
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 1,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 0
  }
});
