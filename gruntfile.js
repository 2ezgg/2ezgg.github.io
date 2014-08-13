module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
      	watch: {
		    html: {
		      files: ['index.html'],
		      tasks: ['htmlhint']
		    },
		    js: {
	          	files: [
	          		'build/anonFuncStart.js',
		            'build/data/championList.js',
		            'build/config/config.js',
		            'build/objects/linkFactory.js',
		            'build/objects/leagueLinks.js',
		            'build/objects/redditLol.js',
		            'build/objects/streamChannels.js',
		            'build/objects/webInterface.js',
		            'build/core/objectInit.js',
		            'build/core/router.js',
		            'build/events/globalEvents.js',
		            'build/events/iframeEvents.js',
		            'build/events/infiniteScrollingEvents.js',
		            'build/events/miscEvents.js',
		            'build/events/navigationEvents.js',
		            'build/events/redditEvents.js',
		            'build/events/rssEvents.js',
		            'build/events/settingsPageEvents.js',
		            'build/events/sidebarEvents.js',
		            'build/events/twitchEvents.js',
		            'build/events/youtubeEvents.js',
		           	'build/anonFuncEnd.js'
	            ],
	          	tasks: ['concat','jshint','uglify']
    		},
    		css: {
		      files: ['build/app.scss'],
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
      	concat: {
		    dist: {
		      	src: [
	          		'build/anonFuncStart.js',
		            'build/data/championList.js',
		            'build/config/config.js',
		            'build/objects/linkFactory.js',
		            'build/objects/leagueLinks.js',
		            'build/objects/redditLol.js',
		            'build/objects/streamChannels.js',
		            'build/objects/webInterface.js',
		            'build/core/objectInit.js',
		            'build/core/router.js',
		            'build/events/globalEvents.js',
		            'build/events/iframeEvents.js',
		            'build/events/infiniteScrollingEvents.js',
		            'build/events/miscEvents.js',
		            'build/events/navigationEvents.js',
		            'build/events/redditEvents.js',
		            'build/events/rssEvents.js',
		            'build/events/settingsPageEvents.js',
		            'build/events/sidebarEvents.js',
		            'build/events/twitchEvents.js',
		            'build/events/youtubeEvents.js',
		           	'build/anonFuncEnd.js'
		        ],
		      	dest: 'assets/js/2ezggdev.js'
		    }
		},
		jshint: {
      		files: ['build/**/*.js', '!build/anonFuncStart.js', '!build/anonFuncEnd.js'],
	    	options: {
	        // options here to override JSHint defaults
		        globals: {
		        	jQuery: true,
		        	console: true,
		        	module: true,
		        	document: true
		        }
		    }
      	},
	    uglify: {
			build:  {
			    files: {
			      	'assets/js/2ezgg.js': 'assets/js/2ezggdev.js'
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
			        	'assets/css/app.css': 'assets/css/app.css'
			        }
			    }
			},
			cssmin: {
			    build: {
			        src: 'assets/css/app.css',
			        dest: 'assets/css/app.css'
			    }
  			},
			sass: {
				dist: {
					files:{
						'assets/css/app.css':'build/app.scss'
					}
				}
			}
    	});

    grunt.registerTask('default', []);
    grunt.registerTask('buildcss',  ['sass', 'cssc', 'cssmin']);
};