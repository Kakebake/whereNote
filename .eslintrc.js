module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['babel', 'prettier'],
  env: {
    jest: true,
    node: true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        parser: 'babylon',
        useTabs: false,
        tabWidth: 2
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, packageDir: './' }
    ],
    'import/no-unresolved': [2, { ignore: ['^[~]'] }],
    'import/extensions': 0,

    'import/prefer-default-export': 0,

    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/forbid-prop-types': 0,
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: false,
        allowFunctions: false,
        allowBind: false
      }
    ],
    'react/prefer-stateless-function': [
      0,
      {
        ignorePureComponents: true
      }
    ],
    'generator-star-spacing': 0,
    'no-mixed-operators': 0,
    'no-void': 0,
    'class-methods-use-this': 0,
    'no-plusplus': 0,
    'new-cap': [2, { capIsNewExceptions: ['Map', 'Reducer', 'List'] }],
    'no-constant-condition': 0,
    'no-unused-vars': [2, { varsIgnorePattern: '[iI]gnored' }],
    'arrow-body-style': 0,
    'global-require': 0,
    'arrow-parens': ['error', 'as-needed'],
    'max-len': [
      'error',
      85,
      {
        ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTemplateLiterals: true
      }
    ],
    'no-underscore-dangle': [
      'error',
      { allow: ['__dataID__', '__typename', '_id'] }
    ],
    'function-paren-newline': ['error', 'consistent'],
    'object-curly-newline': ['error', { consistent: true }],
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated'
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.'
      }
    ]
  },
  globals: {
    __DEV__: true,
    fetch: true,
    navigator: true
  }
};
