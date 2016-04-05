module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	  //------- CSS Minify -------//
	cssmin: {
	    combine: {
	      files: [
	        // TODO {expand: true, cwd: 'frontend', src: ['**/*.css'], dest: #TODO },
	      ]
	   }
	},
	//------- SASS -------//
	sass: {
		dist: {
			files: {
				'frontend/css/screen.css': 'src/sass/screen.scss'
			}
		}
	},
	//------- Watch SASS -> CSS -------//
	watch: {
		sass: {
		  files: 'frontend/sass/**/*.scss',
		  tasks: ['sass']
		}
	},

});

	grunt.registerTask('default', ['watch']);

};