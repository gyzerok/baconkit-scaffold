'use strict';

module.exports = function (grunt) {

    grunt.config.set('copy', {
        dev: {
            files: [
                { expand: true, cwd: './src', src: ['**/*.!(less)', '!*.json'], dest: '.tmp' },
                { flatten: true, src: './src/package.json', dest: '.tmp/package.json', options: {
                    process: function (content) {
                        console.log('here');
                        content = content.replace("#toolbar", true);
                        content = content.replace("#frame", true);
                        return content.replace('#env', 'dev');
                    }
                }}
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};