const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    experimentalSessionAndOrigin: true,
    baseUrl: 'http://localhost',
  },
  fixturesFolder: false,
  video: false,
})
