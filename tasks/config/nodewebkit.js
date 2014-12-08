'use strict';

module.exports = function (grunt) {

    grunt.config.set('nodewebkit', {
        dev: {
            options: {
                buildDir: './builds/release',
                cacheDir: './builds/cache',
                platforms: ['osx'],
                forceDownload: false,
                version: '0.11.2'
            },
            src: ['.tmp/**/*']
        }
    });

    grunt.loadNpmTasks('grunt-node-webkit-builder');
};