module.exports = function(grunt) {

  var globalConfig = {
    themeDir: 'themes/homeOtw'
  };

  // Project configuration.
  grunt.initConfig({

    globalConfig: globalConfig,
    pkg: grunt.file.readJSON('package.json'),
    
    //compile the sass
    libsass: {
      dist: { 
        files: {
          '<%=globalConfig.themeDir %>/css/app.css' : '<%=globalConfig.themeDir %>/scss/app.scss'
        },                  // Target
        options: {              // Target options
          style: 'expanded',
          loadPath: ['<%=globalConfig.themeDir %>/bower_components/foundation/scss/']
        }
      }
    },

    //concat all the files into the build folder

    concat: {
      js:{
        src: [ '<%=globalConfig.themeDir %>/javascript/*.js', '<%=globalConfig.themeDir %>/javascript/**/*.js' ],
        dest: '<%=globalConfig.themeDir %>/build/build-src.js'
      }
    },

    //minify those concated files
    //toggle mangle to leave variable names intact

    uglify: {
      options: {
        mangle: true
      },
      my_target:{
        files:{
        '<%=globalConfig.themeDir %>/build/build.js': ['<%=globalConfig.themeDir %>/build/build-src.js'],
        }
      }
    },
    
    watch: {
      scripts: {
        files: ['<%=globalConfig.themeDir %>/javascript/*.js', '<%=globalConfig.themeDir %>/javascript/**/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: true,
        }
      },
      css: {
        files: ['<%=globalConfig.themeDir %>/scss/*.scss', '<%=globalConfig.themeDir %>/scss/**/*.scss' ],
        tasks: ['sass'],
        options: {
          spawn: true,
        }
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-libsass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-simple-watch');



  // Default task(s).
  // Note: order of tasks is very important
  grunt.registerTask('default', ['libsass', 'concat', 'uglify', 'watch']);

};