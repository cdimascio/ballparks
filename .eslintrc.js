module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": "plugin:react/recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    "sourceType": "module"
  },
  "plugins": [
  ],
  "rules": {
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "quotes": [
      2,
      "single"
    ],
    "semi": [
      2,
      "always"
    ]
  }
};
