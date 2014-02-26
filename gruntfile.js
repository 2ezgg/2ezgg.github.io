module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

    	watch: {
		    html: {
		        files: ['index.html'],
		        tasks: ['htmlhint']
		    },
		    js: {
        		files: ['build/master.js'],
        		tasks: ['uglify']
    		},
    		css: {
		        files: ['build/master.scss'],
		        tasks: ['buildcss']
   			}
		},

		
        pkg: grunt.file.readJSON('package.json'),
	        htmlhint: {
	   			 build: {
	        		options: {
			            'tag-pair': true,
			            'tagname-lowercase': true,
			            'attr-lowercase': true,
			            'attr-value-double-quotes': false,
			            'doctype-first': true,
			            'spec-char-escape': true,
			            'id-unique': true,
			            'head-script-disabled': false,
			            'style-disabled': true
	        		},
	        	src: ['index.html']
	    		}
	    	},
	    	uglify: {
			    build:  {
			        files: {
			            'assets/js/master.js': ['build/master.js']
			        }
			    }
			},
			cssc: {
			    build: {
			        options: {
			            consolidateViaDeclarations: true,
			            consolidateViaSelectors:    true,
			            consolidateMediaQueries:    true
			        },
			        files: {
			            'assets/css/master.css': 'assets/css/master.css'
			        }
			    }
			},

			cssmin: {
			    build: {
			        src: 'assets/css/master.css',
			        dest: 'assets/css/master.css'
			    }
			},
			sass: {
				dist: {
					files:{
						'assets/css/master.css':'build/master.scss'
					}
				}
			}
    	});

    grunt.registerTask('default', []);
    grunt.registerTask('buildcss',  ['sass', 'cssc', 'cssmin']);

};