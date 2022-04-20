module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  ignorePatterns: ["exported-game-constants.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "import"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {}
    },
    "import/core-modules": [
      "game",
      "game/prototypes",
      "game/utils",
      "game/path-finder",
      "game/constants",
      "game/visual",
      "arena",
      "arena/prototypes",
      "arena/constants"
    ] // https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/README.md#importcore-modules
  },
  rules: {
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "explicit"
      }
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/unified-signatures": "error",
    camelcase: "error",
    "@typescript-eslint/dot-notation": "error",
    eqeqeq: ["error", "smart"],
    "id-denylist": ["error", "any", "Number", "number", "String", "string", "Boolean", "boolean", "Undefined"],
    "id-match": "error",
    "max-classes-per-file": ["error", 1],
    "no-bitwise": "error",
    "no-caller": "error",
    "no-eval": "error",
    "no-new-wrappers": "error",
    "@typescript-eslint/no-shadow": [
      "error",
      {
        hoist: "all"
      }
    ],
    "@typescript-eslint/no-throw-literal": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "warn",
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    radix: "error",
    "sort-imports": "warn",
    "spaced-comment": "error"
  }
};
