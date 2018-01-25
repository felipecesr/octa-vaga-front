module.exports = {
  "extends": "airbnb-base",
  "globals": {
    "document": true
  },
  "rules": {
    "no-param-reassign": ["error", { "props": true, "ignorePropertyModificationsFor": ["el"] }]
  }
};
