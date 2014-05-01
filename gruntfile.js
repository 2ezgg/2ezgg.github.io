module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
      watch: {
		    html: {
		      files: ['index.html'],
		      tasks: ['htmlhint']
		    },
		    js: {
          files: ['build/app.js'],
          tasks: ['uglify']
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
	    uglify: {
			  build:  {
			    files: {
			      'assets/js/app.js':                               ['build/app.js'],
            'assets/js/config/config.js':                     ['build/config/config.js'],
						'assets/js/objects/leagueLinks.js':               ['build/objects/leagueLinks.js'],
						'assets/js/objects/redditLol.js':                 ['build/objects/redditLol.js'],
						'assets/js/objects/streamChannels.js':            ['build/objects/streamChannels.js'],
						'assets/js/objects/webInterface.js':              ['build/objects/webInterface.js'],
						'assets/js/events/globalEvents.js':               ['build/events/globalEvents.js'],
						'assets/js/events/iframeEvents.js':               ['build/events/iframeEvents.js'],
						'assets/js/events/infiniteScrollingEvents.js':    ['build/events/infiniteScrollingEvents.js'],
						'assets/js/events/miscEvents.js':                 ['build/events/miscEvents.js'],
						'assets/js/events/navigationEvents.js':           ['build/events/navigationEvents.js'],
						'assets/js/events/redditEvents.js':               ['build/events/redditEvents.js'],
						'assets/js/events/rssEvents.js':                  ['build/events/rssEvents.js'],
						'assets/js/events/settingsPageEvents.js':         ['build/events/settingsPageEvents.js'],
						'assets/js/events/sidebarEvents.js':              ['build/events/sidebarEvents.js'],
						'assets/js/events/twitchEvents.js':               ['build/events/twitchEvents.js'],
						'assets/js/events/youtubeEvents.js':              ['build/events/youtubeEvents.js']
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
