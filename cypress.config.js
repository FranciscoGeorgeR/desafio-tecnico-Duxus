const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      baseUrl: 'http://localhost:8080',
      allure: true,
    },
    setupNodeEvents(on, config) {
      require('@shelex/cypress-allure-plugin/writer')(on, config); // Adiciona o Allure Plugin
      return config;
    },
  },
});
