module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'js/app.js',
      },
    },
    uglify: {
      my_target: {
        files: {
          'js/app.min.js': ['js/app.js']
        }
      }
    },
    ngconstant: {
      // Options for all targets
      options: {
        space: '  ',
        wrap: '\n\n {%= __ngModule %}',
        name: 'config',
      },
      // Environment targets
      development: {
        options: {
          dest: 'src/config.js'
        },
        constants: {
            api: 'http://localhost:3000'
        }
      },
      production: {
        options: {
          dest: 'src/config.js'
        },
        constants: {
            api: 'http://guarded-woodland-53389.herokuapp.com'
        }
      }
    },
    sass: {
      dist: {
        files: {
          'css/style.css' : 'sass/style.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['**/*.scss', 'src/**/*.js'],
        tasks: ['sass', 'concat', 'uglify']
      }
    },
    bower_concat: {
      all: {
        dest: 'build/_bower.js',
        cssDest: 'build/_bower.css'
      }
    },
    build: {
      all: {
        tasks: ['sass', 'ngconstant:development', 'concat', 'bower_concat']
      }
    },
    production: {
      all: {
        tasks: ['sass', 'ngconstant:production', 'concat', 'bower_concat']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-ng-constant');
  grunt.registerTask('default',['watch']);
  grunt.registerTask('build',['sass', 'ngconstant:development', 'concat', 'uglify', 'bower_concat']);
  grunt.registerTask('production',['sass', 'ngconstant:production', 'concat', 'uglify', 'bower_concat']);
  grunt.registerTask('heroku', ['production']);

}
