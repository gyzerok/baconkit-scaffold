'use strict';

module.exports = function (grunt) {

    grunt.config.set('clean', {
        tmp: '.tmp'
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};