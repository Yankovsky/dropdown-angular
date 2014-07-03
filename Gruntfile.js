module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt)
  grunt.initConfig({
    ngmin: {
      'dropdown.min.js': 'dropdown.js'
    },
    uglify: {
      'dropdown.min.js': 'dropdown.min.js'
    }
  })
  grunt.registerTask('default', [
    'ngmin',
    'uglify'
  ])
}