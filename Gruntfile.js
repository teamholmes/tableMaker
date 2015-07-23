module.exports = function(grunt){
  // Initializing configuration objects
  grunt.initConfig({

    // specifying the settings for jsHint
   jsHint: {
            all: {
                src: '**.js',
                options: {
                    bitwise: true,
                    camelcase: true,
                    curly: true,
                    eqeqeq: true,
                    forin: true,
                    immed: true,
                    indent: 4,
                    latedef: true,
                    newcap: true,
                    noarg: true,
                    noempty: true,
                    nonew: true,
                    quotmark: 'single',
                    regexp: true,
                    undef: true,
                    unused: true,
                    trailing: true,
                    maxlen: 120
                }
            }
    },

    //specifying the settings for watch
    watch: {
      scripts: {
        files: ['*.js'],
        tasks: ['jsHint'],
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
 
}