module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		
		targethtml: {
  			test: {
    			files: {
      				'transformed/web.config': 'web.config'
    			}
  			},
  			staging: {
    			files: {
      				'transformed/web.config': 'web.config'
    			}
  			},
  			live: {
    			files: {
      				'transformed/web.config': 'web.config'
    			}
  			}
		}
    });
	
	// Register tasks - if not specified a task will not be run.
	grunt.loadNpmTasks('grunt-targethtml');
	
	// Register the tasks configured above as an array.
	// Tasks are run in order
    grunt.registerTask('test', ['targethtml:test']);
    grunt.registerTask('staging', ['targethtml:staging']);
    grunt.registerTask('live', ['targethtml:live']);
};