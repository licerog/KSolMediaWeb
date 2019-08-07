// This file isn't transpired, so must use CommonJS or ES6

// Register babel to transpile before the test run.
require('babel-register')()

// Disable webpack features that mocha doesn't understand
require.extensions['.css'] = function() {}
