const path = require('path');
const thisDir = path.resolve(__dirname);

module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    tsconfigRootDir: thisDir,
    parser: '@typescript-eslint/parser',
    project: path.join(thisDir, 'tsconfig.eslint.json'),
    sourceType: 'module',
    extraFileExtensions: ['.vue', '.d.ts'],
  },
  plugins: ['@typescript-eslint', 'import', 'jsdoc'],
  reportUnusedDisableDirectives: true,
  extends: [
    'standard-with-typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  rules: {
    // 0 = off, 1 = warn, 2 = error
    'no-undef': 'off',
    'no-tabs': 2,
    'no-unused-vars': 1,
    'comma-dangle': ['error', 'always-multiline'],
    'no-var': 'error',
    'no-trailing-spaces': 'error',
    'no-useless-catch': 'error',
    'no-useless-escape': 'error',
    'no-return-await': 'error',
    'no-sequences': 'error',
    'no-setter-return': 'error',
    'no-throw-literal': 'error',
    'no-new-wrappers': 'error',
    'no-new-func': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-extra-semi': 'error',
    'no-extra-bind': 'error',
    'no-dupe-else-if': 'error',
    'no-constant-condition': 'error',
    'new-parens': ['error', 'always'],
    'max-lines-per-function': ['error', 300],
    'eol-last': ['error', 'always'],
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-unused-vars': 1,
    'vue/require-default-prop': 1,
    'vue/no-unused-vars': ['warn', {
      'ignorePattern': '^_',
    }],
    'vue/html-indent': [
      2,
      2,
      {
        baseIndent: 1,
      },
    ],
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 0,
      },
    ],
    'space-before-function-paren': ['error', 'never'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: false,
      },
    ],
    '@typescript-eslint/no-inferrable-types': 2,
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
          Function:
            'Avoid using the `Function` type. Prefer a specific function type, like `() => void`, or use `Constructable` / `Class<TProto, TStatic>` when referring to a constructor function.',
          Boolean: { message: 'Use boolean instead', fixWith: 'boolean' },
          Number: { message: 'Use number instead', fixWith: 'number' },
          String: { message: 'Use string instead', fixWith: 'string' },
          Object: {
            message: 'Use Record<string, unknown> instead',
            fixWith: 'Record<string, unknown>',
          },
          Symbol: { message: 'Use symbol instead', fixWith: 'symbol' },
        },
      },
    ],
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-indentation': 'error',
    'jsdoc/check-tag-names': [
      'error',
      {
        definedTags: ['chainable', 'internal'],
      },
    ],
    'jsdoc/check-syntax': 'error',
    'jsdoc/newline-after-description': 'error',
    'jsdoc/require-hyphen-before-param-description': ['error', 'always'],
    'jsdoc/tag-lines': 'off',
    'jsdoc/check-examples': 'off',
    'jsdoc/check-param-names': 'off',
    'jsdoc/match-description': 'off',
    'jsdoc/no-types': 'off',
    'jsdoc/require-description': 'off',
    'jsdoc/require-example': 'off',
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-param': 'off',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-returns-type': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
        '@typescript-eslint/indent': 1,
        '@typescript-eslint/explicit-function-return-type': ['error'],
      },
    },
    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/typedef': 'off',
        'import/no-nodejs-modules': 'off',
      },
    },
  ],
  ignorePatterns: ['.eslintrc.cjs'],
};
