module.exports = function(grunt){
  // Initializing configuration objects
  grunt.initConfig({

    // specifying the settings for jsHint
   jshint: {
      // You get to make the names
      // The paths tell JSHint which files to validate      
      myFiles: [
                '*.js', 
                'dir2/**/*.js']
    },

    //specifying the settings for watch 
    watch: {
      scripts: {
        files: [
                '!Gruntfile.js',
                'index.js'
                ],
        tasks: ['jshint:myFiles'],
        options: {

          spawn:false,
          event:['all']
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  // Registering css minification as a default task
  grunt.registerTask( 'default', [  ] );
  grunt.registerTask( 'check', [ 'jsHint' ] );
 
}