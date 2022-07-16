'use strict';

let config = {
    diff: true,
    extension: ['js'],
    package: './package.json',
    reporter: 'spec',
    spec: ['dist/specs/**/*.spec.js'],
    ui: 'bdd',
    exit: true,
    recursive: true,
    timeout:3000,
    retries:3
};

module.exports = config;