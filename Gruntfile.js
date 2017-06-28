'use strict';



module.exports = function (grunt) {



  // Automatically load required Grunt tasks

  require('jit-grunt')(grunt);



  // Configurable paths for the application

  var appConfig = {

    app: require('./app/bower.json').appPath || 'app'

  };



  // Define the configuration for all the tasks

  grunt.initConfig({



    // Project settings

    yeoman: appConfig,



    // Watches files for changes and runs tasks based on the changed files

    watch: {

      bower: {

        files: ['bower.json']

      },

      gruntfile: {

        files: ['Gruntfile.js']

      },

      livereload: {

        options: {

          livereload: '<%= connect.options.livereload %>'

        },

        files: [

          '<%= yeoman.app %>/{,*/}*.html',

          '.tmp/styles/{,*/}*.css',

          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'

        ]

      }

    },



    // The actual grunt server settings

    connect: {

      options: {

        port: 9000,

        // Change this to '0.0.0.0' to access the server from outside.

        hostname: 'localhost',

        livereload: 35729

      },

      livereload: {

        options: {

          open: true,

          middleware: function (connect) {

            return [

              connect.static('.tmp'),

              connect().use(

                '/app/lib',

                connect.static('./app/lib')

              ),

              connect().use(

                '/app/styles',

                connect.static('./app/styles')

              ),

              connect.static(appConfig.app)

            ];

          }

        }

      }

    }

  });

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {

    grunt.task.run([

      'connect:livereload',

      'watch'

    ]);

  });

  grunt.registerTask('default', ['connect']);



};
