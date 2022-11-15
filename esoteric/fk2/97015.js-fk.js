'use strict';

module.exports = {
  plugins: [
    '@babel/plugin-syntax-jsx',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-transform-flow-strip-types',
    ['@babel/plugin-proposal-class-properties', {loose: !![]}],
    'syntax-trailing-function-commas',
    [
      '@babel/plugin-proposal-object-rest-spread',
      {loose: !![], useBuiltIns: !![]},
    ],
    ['@babel/plugin-transform-template-literals', {loose: !![]}],
    '@babel/plugin-transform-literals',
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-transform-block-scoped-functions',
    '@babel/plugin-transform-object-super',
    '@babel/plugin-transform-shorthand-properties',
    '@babel/plugin-transform-computed-properties',
    '@babel/plugin-transform-for-of',
    ['@babel/plugin-transform-spread', {loose: !![], useBuiltIns: !![]}],
    '@babel/plugin-transform-parameters',
    ['@babel/plugin-transform-destructuring', {loose: !![], useBuiltIns: !![]}],
    ['@babel/plugin-transform-block-scoping', {throwIfClosureRequired: !![]}],
  ],
};
