module.exports = function (grunt) {

    // Project configuration. Configuramos los plugins
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['scripts.js']
        },
        concat: {
            dist: {
                src: ['scripts.js', 'script1.js', 'script2.js'],
                dest: 'unidos.js'
            }
        },
        uglify: {
            dist: {
                src: 'unidos.js',
                dest: 'build/unidos.min.js'
            }
        },
        shell: {
            multiple: {
                command: [
                    'del unidos.js',
                    'mkdir deploy',
                    'move build\\unidos.min.js deploy\\unidos.min.js'
                ].join('&&')
            }
        }
    });

    // Cargamos los plugins que se van a correr
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-shell');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'shell']);

};