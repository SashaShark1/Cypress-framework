const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/other/*.ts",
    baseUrl: "https://www.webdriveruniversity.com",
    chromeWebSecurity: false,
   defaultCommandTimeout: 10000,
   pageLoadTimeout: 120000,
   screenshotOnRunFailure: true,
   trashAssetsBeforeRuns: true,
  //  viewportWidth: 1440,
  //  viewportHeight: 2000,
   env: {
    first_name: "Sarah", 
    webdriverUniHp:   "https://www.webdriveruniversity.com",
   }
  },
 
});
