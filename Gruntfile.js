module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            files: 'sass/**/*.scss',
            tasks: ['sass:dist', 'postcss'],
        },

        sass: {
            options: {
                style: 'compressed'
            },
            dist: {
                files: {
                    'build/style.css': 'sass/style.scss'
                }
            }
        },

        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer') ({browser: 'last 2 versions'}),
                ]
            },
            dist: {
                src: 'build/style.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('default', 'watch');
};
