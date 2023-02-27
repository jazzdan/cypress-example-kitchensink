const { defineConfig } = require('cypress');
// 🙋‍♂️ Add this line to require the replay plugin
const replay = require("@replayio/cypress")

module.exports = defineConfig({
  'projectId': '4b7344',
  e2e: {
    setupNodeEvents(on, config) {
      // 🙋‍♂️ Add this line to install the replay plugin
      replay.default(on, config);
      return config;
    },
  },
});
