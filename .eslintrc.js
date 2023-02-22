module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "react-native", "react-hooks"],
  rules: {
    "import/no-extraneous-dependencies": [
      2,
      {
        devDependencies: [
          "**/__mocks__/**",
          "**/cypress/**",
          "**/*.config.js",
          "**/*.spec.js",
          "**/*.test.js",
          "**/*.setup.js"
        ]
      }
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function"
      }
    ],
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": "off",
    "linebreak-style": 0,
    "import/extensions": ["error", "never"],
    "import/prefer-default-export": "off",
    "react/react-in-jsx-scope": 0,
    "no-trailing-spaces": "warn",
    "import/no-unresolved": [2, { ignore: ["^@/"] }],
    "react/prop-types": 0,
    "react/destructuring-assignment": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react/no-unstable-nested-components": "off",
    "react/display-name": "off"
  },
  ignorePatterns: [".eslintrc.js"]
};
