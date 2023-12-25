const { defineConfig } = require("cypress")
const {addMatchImageSnapshotPlugin} = require('@simonsmith/cypress-image-snapshot/plugin')

module.exports = defineConfig({
  projectId: 'tn1sm9',
  viewportWidth: 1200,
  viewportHeight: 800,
  e2e: {
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on)
    },
  },
});
