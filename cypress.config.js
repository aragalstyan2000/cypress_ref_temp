const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    token: "uDyhfItO6Kqmv6moGJlaz6RvoYZWETQxgFpyXEvoV"
  },
  e2e: {
    baseUrl: "https://api.paste.ee/v1/pastes"
  },
});
