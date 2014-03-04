	var appSettings = [
		{settingType:'redditNewTab', settingChoice: 'off'},
		{settingType:'twitchVisualNotifications', settingChoice: 'on'},
		{settingType:'twitchAudioNotifications', settingChoice: 'on'},
		{settingType:'eSportsNotifications', settingChoice: 'on'},
		{settingType:'defaultNameLink', settingChoice: 'king'},
		{settingType:'defaultChampLink', settingChoice: 'champselect'},
		{settingType:'smartEnter', settingChoice: 'on'},
		{settingType:'newWindow', settingChoice: 'on'},
		];	

	var settingsSaved;
	if(settingsSaved = localStorage.getItem('appSettings')){
		appSettings = JSON.parse(settingsSaved);
	} else {
		localStorage.setItem('appSettings', JSON.stringify(appSettings));
	}

	function detectmob() { 
		 if((navigator.userAgent.match(/Android/i)
		 || navigator.userAgent.match(/webOS/i)
		 || navigator.userAgent.match(/iPhone/i)
		 || navigator.userAgent.match(/iPad/i)
		 || navigator.userAgent.match(/iPod/i)
		 || navigator.userAgent.match(/BlackBerry/i)
		 || navigator.userAgent.match(/Windows Phone/i)) || ($(window).width() < 860)  && (appSettings[7].settingChoice == 'on')
		 ){
		    return true;
		  }
		 else {
		    return false;
		  }
	}

	var LeagueLinks = function(){
		if(typeof(Storage)!=="undefined"){
			this.name = localStorage.getItem('name');
			this.server = localStorage.getItem('server');
			this.champ = localStorage.getItem('champ');
			this.pageChange = JSON.parse(localStorage.getItem('pageChange')) || [];
			this.pageAdd = JSON.parse(localStorage.getItem('pageAdd')) || [];

			this.newReignArticles = parseInt(localStorage.getItem('newReignArticles')) || 0;
			this.newLeagueArticles = parseInt(localStorage.getItem('newLeagueArticles')) || 0;
			this.newOnGamers = parseInt(localStorage.getItem('newOnGamers')) || 0;

			this.oldDate = localStorage.getItem('date') || 0;
			this.oldDate = parseInt(this.oldDate);
			localStorage.setItem('date', Date.now());

		} else {
			this.pageChange = [];
			this.pageAdd = [];
			this.name;
			this.server;
			this.champ;
			this.newReignArticles = 0;
			this.newLeagueArticles = 0;
			this.newOnGamers = 0;
		}
		if(this.pageChange.length>0){
			for(var z = 0; z < this.pageChange.length; z++){
				$('#'+this.pageChange[z].id).css('display',this.pageChange[z].display);
				if(this.pageChange[z].display=='none'){
					$('.website-'+this.pageChange[z].id+' span').removeClass().addClass('add-website');
				} else {
					$('.website-'+this.pageChange[z].id+' span').removeClass().addClass('remove-website');
				}
			}
		}

		if(this.pageAdd.length>0){
			var self = this;
			var addWebsite = Handlebars.compile($('#new-website-template').html());
			var addWebsiteSettings = Handlebars.compile($('#remove-website-template').html());
		
			for(var y = 0; y < this.pageAdd.length; y++){
				$("#miscbuttons ul").append( addWebsite(self.pageAdd[y]));
				$(".general-websites").append( addWebsiteSettings(self.pageAdd[y]));
			}
		}
	

		if (this.name) {
			$(".name").val(this.name);
			$(".server").val(this.server);

			this.nameLink();
		}
		if (this.champ) {
			$(".champ").val(this.champ);
			this.spaceAndDashChamp = this.champ.replace(/[^a-zA-Z ]/g, "").replace(/ /g,"-");
			this.keepSpaces = this.champ.trim();
			this.champ = this.champ.replace(/[^a-zA-Z]/g, "");
			this.champLink();
		}
	};

	LeagueLinks.prototype.account = function(nameUpdate,serverUpdate){
		this.name = nameUpdate;
		this.server = serverUpdate;	

		if(typeof(Storage)!=="undefined"){
			localStorage.setItem('name',this.name);
			localStorage.setItem('server',this.server);
		}

		if (this.name) {
			
			this.nameLink();
			return true;
		} else {
			this.returnOriginalUrl('website-name');
		return false;
		}
	}

	LeagueLinks.prototype.champion = function(champUpdate){
		this.champ = champUpdate;

		if(typeof(Storage)!=="undefined"){
			localStorage.setItem('champ',this.champ);
		}

		if (this.champ) {
			this.spaceAndDashChamp = this.champ.replace(/[^a-zA-Z ]/g, "").replace(/ /g,"-");
			this.keepSpaces = this.champ.trim();
			this.champ = this.champ.replace(/[^a-zA-Z]/g, "");	
			this.champLink();
			return true;
		} else {
			this.returnOriginalUrl('website-champ');
		return false;
		}
	}

	LeagueLinks.prototype.returnOriginalUrl = function(cssSelector){
		var items = $("."+cssSelector);

		for(var i = 0; i < items.length; i++){

			var item = items.eq(i);
			var urlData = item.data('url');
			item.attr("href", urlData);

		}
	}


	LeagueLinks.prototype.nameLink = function(){
		var items = $(".website-name");

		for(var i = 0; i < items.length; i++){

			var item = items.eq(i);
			var webData = item.data('name');

			if (webData == 'nexus'){

				item.attr("href","http://www.lolnexus.com/" + 
						this.server + "/search?name=" + 
						this.name + "&server=" + this.server 
					);

			}  else if (webData == 'kassad'){

				item.attr("href","http://quickfind.kassad.in/profile/" + 
							this.kassadServerName() + "/" 
							+ this.name + "/"
						); 
			
			} else if (webData == 'now'){

				item.attr("href","http://www.lolking.net/now/"+this.server+"/"+this.name);

			} else if(webData == 'summoning'){
				item.attr("href", "http://summoning.net/v1/lyralei/"+this.server+"/"+this.name+"/")
			}

			else if (webData == 'king'){

				item.attr("href","http://www.lolking.net/search?name="+this.name+"&region="+this.server);


			} else if (webData == 'gg'){

				item.attr("href","http://" + this.server + ".op.gg/summoner/userName=" + this.name); 

			} else if (webData == 'skill'){

				item.attr("href","http://www.lolskill.net/game-" + this.server + "-" + this.name); 
			
			}
		}		
	}

	LeagueLinks.prototype.champLink = function(){
		var items = $(".website-champ");
		

		for(var i = 0; i < items.length; i++){

			var item = items.eq(i);
			var webData = item.data('name');


			if (webData == 'counter'){
				
				item.attr('href','http://www.lolcounter.com/champ/' + this.champ);

			} else if (webData == 'champselect'){

				item.attr('href','http://www.championselect.net/champ/' + this.spaceAndDashChamp);

			} else if (webData == 'kingchamp'){

				item.attr('href','http://www.lolking.net/champions/' + this.champ);

			} else if (webData == 'tsm'){

				item.attr('href','http://www.solomid.net/guide?champ=' + this.champ);

			} else if (webData == 'probuilds'){
				var probuildChamp;
				if(this.champ=='wukong'){
					probuildChamp = 'monkeyking';
				} else {
					probuildChamp = this.champ;
				}

				item.attr('href','http://www.probuilds.net/champions/' + probuildChamp);

			}else if (webData == 'elo'){

				item.attr('href','http://www.elophant.com/league-of-legends/champion/' + this.spaceAndDashChamp + '/stats' );
				
			} else if (webData == 'moba'){

				item.attr('href','http://www.mobafire.com/league-of-legends/' + this.spaceAndDashChamp + '-guide' );

			} else if(webData == 'builder'){
				item.attr('href','http://www.lolbuilder.net/' + this.champ);
			}	
				 else if(webData == 'lolpro'){
				item.attr('href','http://www.lolpro.com/guides/' + this.spaceAndDashChamp);
			}
			else if(webData == 'wikichamp'){
				item.attr('href','http://leagueoflegends.wikia.com/wiki/' + this.keepSpaces);
			}

			
		}
	}

	LeagueLinks.prototype.championList = [
		{name:"aatrox", xpos:-0,ypos:-0},
		{name:"ahri", xpos:-36,ypos:-0},
		{name:"akali", xpos:-72,ypos:-0},
		{name:"alistar", xpos:-108,ypos:-0},
		{name:"amumu", xpos:-144,ypos:-0},
		{name:"anivia", xpos:-180,ypos:-0},
		{name:"annie", xpos:-216,ypos:-0},
		{name:"ashe", xpos:-252,ypos:-0},
		{name:"blitzcrank", xpos:-288,ypos:-0},
		{name:"brand", xpos:-324,ypos:-0},
		{name:"caitlyn", xpos:-0,ypos:-36},
		{name:"cassiopeia", xpos:-36,ypos:-36},
		{name:"cho'gath", xpos:-72,ypos:-36},
		{name:"corki", xpos:-108,ypos:-36},
		{name:"darius", xpos:-144,ypos:-36},
		{name:"diana", xpos:-180,ypos:-36},
		{name:"dr. mundo", xpos:-216,ypos:-36},
		{name:"draven", xpos:-252,ypos:-36},
		{name:"elise", xpos:-288,ypos:-36},
		{name:"evelynn", xpos:-324,ypos:-36},
		{name:"ezreal", xpos:-0,ypos:-72},
		{name:"fiddlesticks", xpos:-36,ypos:-72},
		{name:"fiora", xpos:-72,ypos:-72},
		{name:"fizz", xpos:-108,ypos:-72},
		{name:"galio", xpos:-144,ypos:-72},
		{name:"gangplank", xpos:-180,ypos:-72},
		{name:"garen", xpos:-216,ypos:-72},
		{name:"gragas", xpos:-252,ypos:-72},
		{name:"graves", xpos:-288,ypos:-72},
		{name:"hecarim", xpos:-324,ypos:-72},
		{name:"heimerdinger", xpos:-0,ypos:-108},
		{name:"irelia", xpos:-36,ypos:-108},
		{name:"janna", xpos:-72,ypos:-108},
		{name:"jarvan IV", xpos:-108,ypos:-108},
		{name:"jax", xpos:-144,ypos:-108},
		{name:"jayce", xpos:-180,ypos:-108},
		{name:"jinx", xpos:-216,ypos:-108},
		{name:"karma", xpos:-252,ypos:-108},
		{name:"karthus", xpos:-288,ypos:-108},
		{name:"kassadin", xpos:-324,ypos:-108},
		{name:"katarina", xpos:-0,ypos:-144},
		{name:"kayle", xpos:-36,ypos:-144},
		{name:"kennen", xpos:-72,ypos:-144},
		{name:"kha'zix", xpos:-108,ypos:-144},
		{name:"kog'maw", xpos:-144,ypos:-144},
		{name:"leblanc", xpos:-180,ypos:-144},
		{name:"lee sin", xpos:-216,ypos:-144},
		{name:"leona", xpos:-252,ypos:-144},
		{name:"lissandra", xpos:-288,ypos:-144},
		{name:"lucian", xpos:-324,ypos:-144},
		{name:"lulu", xpos:-0,ypos:-180},
		{name:"lux", xpos:-36,ypos:-180},
		{name:"malphite", xpos:-72,ypos:-180},
		{name:"malzahar", xpos:-108,ypos:-180},
		{name:"maokai", xpos:-144,ypos:-180},
		{name:"master yi", xpos:-180,ypos:-180},
		{name:"miss fortune", xpos:-216,ypos:-180},
		{name:"mordekaiser", xpos:-288,ypos:-180},
		{name:"morgana", xpos:-324,ypos:-180},
		{name:"nami", xpos:-0,ypos:-216},
		{name:"nasus", xpos:-36,ypos:-216},
		{name:"nautilus", xpos:-72,ypos:-216},
		{name:"nidalee", xpos:-108,ypos:-216},
		{name:"nocturne", xpos:-144,ypos:-216},
		{name:"nunu", xpos:-180,ypos:-216},
		{name:"olaf", xpos:-216,ypos:-216},
		{name:"orianna", xpos:-252,ypos:-216},
		{name:"pantheon", xpos:-288,ypos:-216},
		{name:"poppy", xpos:-324,ypos:-216},
		{name:"quinn", xpos:-0,ypos:-252},
		{name:"rammus", xpos:-36,ypos:-252},
		{name:"renekton", xpos:-72,ypos:-252},
		{name:"rengar", xpos:-108,ypos:-252},
		{name:"riven", xpos:-144,ypos:-252},
		{name:"rumble", xpos:-180,ypos:-252},
		{name:"ryze", xpos:-216,ypos:-252},
		{name:"sejuani", xpos:-252,ypos:-252},
		{name:"shaco", xpos:-288,ypos:-252},
		{name:"shen", xpos:-324,ypos:-252},
		{name:"shyvana", xpos:-0,ypos:-288},
		{name:"singed", xpos:-36,ypos:-288},
		{name:"sion", xpos:-72,ypos:-288},
		{name:"sivir", xpos:-108,ypos:-288},
		{name:"skarner", xpos:-144,ypos:-288},
		{name:"sona", xpos:-180,ypos:-288},
		{name:"soraka", xpos:-216,ypos:-288},
		{name:"swain", xpos:-252,ypos:-288},
		{name:"syndra", xpos:-288,ypos:-288},
		{name:"talon", xpos:-324,ypos:-288},
		{name:"taric", xpos:-0,ypos:-324},
		{name:"teemo", xpos:-36,ypos:-324},
		{name:"thresh", xpos:-72,ypos:-324},
		{name:"tristana", xpos:-108,ypos:-324},
		{name:"trundle", xpos:-144,ypos:-324},
		{name:"tryndamere", xpos:-180,ypos:-324},
		{name:"twisted fate", xpos:-216,ypos:-324},
		{name:"twitch", xpos:-252,ypos:-324},
		{name:"udyr", xpos:-288,ypos:-324},
		{name:"urgot", xpos:-324,ypos:-324},
		{name:"varus", xpos:-0,ypos:-360},
		{name:"vayne", xpos:-36,ypos:-360},
		{name:"veigar", xpos:-72,ypos:-360},
		{name:"vel'koz", xpos:-252,ypos:-396},
		{name:"vi", xpos:-108,ypos:-360},
		{name:"viktor", xpos:-144,ypos:-360},
		{name:"vladimir", xpos:-180,ypos:-360},
		{name:"volibear", xpos:-216,ypos:-360},
		{name:"warwick", xpos:-252,ypos:-360},
		{name:"wukong", xpos:-252,ypos:-180},
		{name:"xerath", xpos:-288,ypos:-360},
		{name:"xin zhao", xpos:-324,ypos:-360},
		{name:"yasuo", xpos:-0,ypos:-396},
		{name:"yorick", xpos:-36,ypos:-396},
		{name:"zac", xpos:-72,ypos:-396},
		{name:"zed", xpos:-108,ypos:-396},
		{name:"ziggs", xpos:-144,ypos:-396},
		{name:"zilean", xpos:-180,ypos:-396},
		{name:"zyra", xpos:-216,ypos:-396}
	];


	LeagueLinks.prototype.championCompare = function(input){
		for (var i=0; i<this.championList.length; i++) {
				if(this.championList[i] == input){
					return true;
				}
			}
			return false;
	}

	LeagueLinks.prototype.dropDownTemplate = function(input){
		var self = this;
		var template = Handlebars.compile($('#champion-template').html());
		if(input.length == 0){
			$("#champ-drop").html( template(self.championList) );
		} else{
			var matchingChampInfo = [];
			var count = 0;
			var inputExpression = new RegExp("^"+input, "i");
			for(var i = 0;i<self.championList.length;i++ ){
				if(self.championList[i].name.match(inputExpression)){
					matchingChampInfo[count] = {
						name: self.championList[i].name,
                        xpos: self.championList[i].xpos,
                        ypos: self.championList[i].ypos,
					}
					count++;
				}
				$("#champ-drop").html( template(matchingChampInfo) );
			}
			
		}
	}


	LeagueLinks.prototype.serverList = ['na', 'euw', 'eune', 'br', 'tr', 'ru', 'lan',  'las', 'oce'];

	LeagueLinks.prototype.kassadServerName = function(){
		if (this.server == 'eune'){
			return 'eun';
		} else if(this.server == 'oce'){
			return 'oc';
		} else {
			return this.server;
		}
	}

	LeagueLinks.prototype.reignOfGaming = function(){
		var reignDeferred = $.Deferred();
		var self = this;

        $.ajax({
	        type: "GET",
	        url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent('http://www.reignofgaming.net/news.rss'),
	        dataType: 'json',
	        error: function(){
	            console.log('Unable to load reign of gaming feed');
	        },
	        success: function(data){
	            var values = data.responseData.feed.entries;
	            for (var i=0;i<values.length;i++){
	            	var dateOfArticle = new Date(values[i].publishedDate).getTime();

	            	if (dateOfArticle > self.oldDate){
		 				self.newReignArticles++;
		 			} 	
	        	}
	        	localStorage.setItem('newReignArticles',self.newReignArticles);
	        	reignDeferred.resolve();
	        }
    	});

    	return reignDeferred.promise();
	}


	LeagueLinks.prototype.onGamers = function(){
		var reignDeferred = $.Deferred();
		var self = this;

        $.ajax({
	        type: "GET",
	        url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent('http://www.ongamers.com/league-of-legends/6000-2/rss/'),
	        dataType: 'json',
	        error: function(){
	            console.log('Unable to to load onGamers feed.');
	        },
	        success: function(data){
	        	// do this area and create variable in initiation area
	            var values = data.responseData.feed.entries;
	            for (var i=0;i<values.length;i++){
	            	var dateOfArticle = new Date(values[i].publishedDate).getTime();

	            	if (dateOfArticle > self.oldDate){
		 				self.newOnGamers++;
		 			} 	
	        	}
	        	localStorage.setItem('newOnGamers',self.newOnGamers);
	        	reignDeferred.resolve();
	        }
    	});

    	return reignDeferred.promise();
	}

	LeagueLinks.prototype.LolInfo = function(){
		var lolDeferred = $.Deferred();
		var self = this;

        $.ajax({
	        type: "GET",
	        url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent('http://na.leagueoflegends.com/en/rss.xml'),
	        dataType: 'json',
	        error: function(){
	            console.log('Unable to load LeagueOfLegends feed.');
	        },
	        success: function(data){
	            var values = data.responseData.feed.entries;
	            for (var i=0;i<values.length;i++){
	            	var dateOfArticle = new Date(values[i].publishedDate).getTime();

	            	if (dateOfArticle > self.oldDate){
		 				self.newLeagueArticles++;
		 			} 	
	        	}
	        	
	        	localStorage.setItem('newLeagueArticles',self.newLeagueArticles);

	        	lolDeferred.resolve();
	        }
    	});

    	return lolDeferred.promise();
	}





	var streamChannels = function(){
		this.streamers = JSON.parse(localStorage.getItem('streamers'));

		var defaultStreams = [];

		if(!this.streamers){
			localStorage.setItem('streamers', JSON.stringify(defaultStreams));
			this.streamers = JSON.parse(localStorage.getItem('streamers'));
		}

		this.twitchStreamersOnline = [];
		this.topTwitchStreamersOnline = [];
		this.twitchStreamersOffline = [];
		
		this.azubuStreamersOffline = [];
		this.azubuStreamersOnline = [];
		this.topAzubuStreamersOnline = [];

		this.totalStreamersOnline = 0;
		this.streamerCount = 0;

		this.newAdditions = [];


		/// refers to ajax requests and total function calls
		this.currentStreamDisplayed = null;
		this.currentStreamViewers = null;
		this.streamFunctionCount = 0;

		this.noStreamersAdded = (this.streamers.length == 0)?true:false;
		//
	}

	streamChannels.prototype.submitStreamer = function(newStreamers, streamerType){
		var streamSource;
		var input = '';
		
		if (newStreamers){

			if(streamerType =='azubu'){
				input = newStreamers;
				streamSource = 'azubu';

			} else if(newStreamers.match(/azubu.tv/i)){

				streamSource = 'azubu';
				var thisRegex = /\d{13}/gi;
				input = thisRegex.exec(newStreamers).toString();

			} else {

				var newStreamers = newStreamers.trim();
				streamSource = 'twitch';

				input = newStreamers.replace(/((.*?:\/\/)|www.twitch.tv\/)|(\s)/gi, "").toLowerCase();
			}

			if(input){

				var noStreamerMatch = true;

				for(var i=0;i<this.streamers.length;i++){
					if(this.streamers[i].name == input){
						noStreamerMatch = false;
					} 
				}

				if(noStreamerMatch){
					this.streamers[this.streamers.length] = {
						name: input,
						service: streamSource
					}
				}

				localStorage.setItem('streamers', JSON.stringify(this.streamers));
				this.noStreamersAdded = (this.streamers.length == 0)?true:false;
				return true;
			}
		}

		return false;
	}



	streamChannels.prototype.onlineTwitchStreamers = function(){
		var twitchDeferred = $.Deferred();
		var self = this;
		var twitchParams = '';

		if(this.noStreamersAdded){
			localStorage.setItem('twitchStreamersOnline', '[]');
			localStorage.setItem('twitchStreamersOffline', '[]');
			twitchDeferred.resolve();
			return twitchDeferred.promise();
		} else{
			for (var i=0; i<this.streamers.length; i++){
				if(this.streamers[i].service == 'twitch'){
					twitchParams += this.streamers[i].name + ',';
				}
			}

				
			$.ajax({
				dataType:'jsonp',
				url:'https://api.twitch.tv/kraken/streams?channel='+twitchParams,
				error: function(){
	            	console.log('Unable to twitch favourites api');
	        	},
				success: function(data){
					self.twitchStreamersOnline = [];
					if(data.streams){
						for(var i=0;i<data.streams.length;i++){
                        	self.twitchStreamersOnline[i] = {
                        		name: data.streams[i].channel.name,
                        		displayName: data.streams[i].channel.display_name,
                        		viewTotal: data.streams[i].viewers,
                        		url: data.streams[i].channel.url,
                        		thumbnailUrl: data.streams[i].preview.medium,
                        		id: i
                        	}

                        	self.totalStreamersOnline ++;

                    	}
                    	
                    }
                    localStorage.setItem('totalStreamersOnline', JSON.stringify(self.totalStreamersOnline));
					localStorage.setItem('twitchStreamersOnline', JSON.stringify(self.twitchStreamersOnline));
                    twitchDeferred.resolve();
                },

			});

		return twitchDeferred.promise();
		}	
	}


	streamChannels.prototype.getAzubuStreamers = function(){
		var azubuDeferred = $.Deferred();
		var self = this;
				
			$.ajax({
				dataType:'jsonp',
				url:'http://liveleaguestream.com/json.php?method=getAll&jsoncallback=?',
				error: function(){
	            	console.log('Unable to load azubu api');
	        	},
				success: function(data){
					var onlineCount = 0;
					var offlineCount = 0;
					var totalOnlineCount = 0;
					self.topAzubuStreamersOnline = [];
					self.azubuStreamersOnline = [];
					self.azubuStreamersOffline = [];

						
						for(var i=0;i<data.length;i++){
							
							
							if(data[i].Online != '0'){

								var accountFollowed = false;
								
								for(var t=0;t<self.streamers.length;t++){	
									if (data[i].Azubu_ID == self.streamers[t].name){
										accountFollowed = true;
									}
								}

	                        	self.topAzubuStreamersOnline[totalOnlineCount] = {
	                        		name: data[i].Name,
	                        		id: data[i].Azubu_ID,
	                        		count: totalOnlineCount,
	                        		online: true,
	                        		isAlreadyAdded: accountFollowed
	                        	}
	                        	totalOnlineCount ++;

	                        	for(var y = 0;y<self.streamers.length;y++){
	                        		if (self.streamers[y].name == data[i].Azubu_ID){
	                        			self.azubuStreamersOnline[onlineCount] = {
	                        				name: data[i].Name,
	                        				id: data[i].Azubu_ID,
	                        				online: true,
	                
	                        			}
	                        			onlineCount ++;
	                        			self.totalStreamersOnline ++;
	                        		}
	                        	}
	              

                        	} else {
                        		for(var z = 0;z<self.streamers.length;z++){
	                        		if (self.streamers[z].name == data[i].Azubu_ID){
	                        			self.azubuStreamersOffline[offlineCount] = {
			                        		name: data[i].Name,
			                        		id: data[i].Azubu_ID,
			                        		online: false,
			                        		// check if json records thumbnail of player or viewer count
			                        	}
			                        	offlineCount ++;
	                        		}
	                        	}
                        		
                        	}

                    	}
                    localStorage.setItem('totalStreamersOnline', JSON.stringify(self.totalStreamersOnline));
					localStorage.setItem('topAzubuStreamersOnline', JSON.stringify(self.topAzubuStreamersOnline));
					localStorage.setItem('azubuStreamersOnline', JSON.stringify(self.azubuStreamersOnline));
					localStorage.setItem('azubuStreamersOffline', JSON.stringify(self.azubuStreamersOffline));
                    azubuDeferred.resolve();
                },

			});

		return azubuDeferred.promise();
	
	}


	streamChannels.prototype.topTwitchOnline = function(numberOfOnline){
		var onlineLimit = numberOfOnline || 12;
		var twitchDeferred = $.Deferred();
		var self = this;
				
			$.ajax({
				dataType:'jsonp',
				url:'https://api.twitch.tv/kraken/search/streams?q=%22league%20of%20legends%22&limit='+onlineLimit,
				error: function(){
	            	console.log('Unable to load top twitch streamers feed.');
	        	},
				success: function(data){
					self.topTwitchStreamersOnline = [];
					if(data.streams){
						for(var i=0;i<data.streams.length;i++){
							
							//work out if someone is already following this account
							var accountFollowed = false;
							for(var t=0;t<self.twitchStreamersOnline.length;t++){
								if (data.streams[i].channel.name == self.twitchStreamersOnline[t].name){
									accountFollowed = true;
								}
							}

                        	self.topTwitchStreamersOnline[i] = {
                        		name: data.streams[i].channel.name,
                        		displayName: data.streams[i].channel.display_name,
                        		viewTotal: data.streams[i].viewers,
                        		thumbnailUrl: data.streams[i].preview.medium,
                        		url: data.streams[i].channel.url,
                        		isAlreadyAdded: accountFollowed,
                        		id: i,

                        	}

                    	}
                    	
                    }
					
                    localStorage.setItem('topTwitchStreamersOnline', JSON.stringify(self.topTwitchStreamersOnline));		

                    twitchDeferred.resolve();
                },

			});

		return twitchDeferred.promise();
	}


	streamChannels.prototype.offlineTwitchStreamers = function(){
		this.twitchStreamersOffline = [];
		this.twitchStreamersOffline = this.streamers.slice(0);
		
		var azubuPos = [];
		for(var z = 0;z<this.streamers.length;z++){
			if(this.twitchStreamersOffline[z].service != 'twitch'){
				azubuPos.push(z);
			}
		}
		azubuPos.reverse();
		for (var y = 0; y<azubuPos.length; y++ ){
			this.twitchStreamersOffline.splice(azubuPos[y], 1)
		}


		for (var i=0; i<this.twitchStreamersOnline.length; i++) {

			var index;

			for (var t = 0; t<this.twitchStreamersOffline.length; t++ ){
			   if(this.twitchStreamersOffline[t].name == this.twitchStreamersOnline[i].name){
			   		index = t;
			   }
			}

    		if (index > -1) {
       			this.twitchStreamersOffline.splice(index, 1);
    		}
		}

		localStorage.setItem('twitchStreamersOffline', JSON.stringify(this.twitchStreamersOffline));

	}


	streamChannels.prototype.removeStreamer = function(deleteStreamer){
		var input = deleteStreamer.toString().toLowerCase();
		if(input){

			for (var i=0; i<this.streamers.length; i++) {
				if(this.streamers[i].name == input){
					this.streamers.splice(i, 1);
				}
			}

			localStorage.setItem('streamers', JSON.stringify(this.streamers));
			this.noStreamersAdded = (this.streamers.length == 0)?true:false;
			return true;
		}

		return false;
	
	}

	streamChannels.prototype.pushTwitchStreams = function(twitchNumber, twitchType, twitchObj){
		var self = this;
		var template = Handlebars.compile($('#twitch-template').html());
		var twitchNumber = twitchNumber || 0;
		if(twitchType == 'top'){
			$("#twitch-online-content").html( template(self.topTwitchStreamersOnline[twitchNumber]) );
			self.currentStreamDisplayed = self.topTwitchStreamersOnline[twitchNumber].name;
			self.currentStreamViewers = self.topTwitchStreamersOnline[twitchNumber].viewTotal;
		} else if(self.twitchStreamersOnline.length>0) {
			$("#twitch-online-content").html( template(self.twitchStreamersOnline[twitchNumber]) );
			self.currentStreamDisplayed = self.twitchStreamersOnline[twitchNumber].name;
			self.currentStreamViewers = self.twitchStreamersOnline[twitchNumber].viewTotal;
		} 
	}

	streamChannels.prototype.pushStreamsHeader = function(){
		var self = this;

			for(var i = 0; i<self.topTwitchStreamersOnline.length; i++){
				if (self.topTwitchStreamersOnline[i].name == 'riotgames' && appSettings[3].settingChoice == 'on'){
					var riotTemplate = Handlebars.compile($('#riot-online-message-template').html());
					$("#riot-online").html(riotTemplate());
					$('#top-header-message').css('padding','14px');
				}

			}

	}

	streamChannels.prototype.pushTwitchStreamers = function(favourite, azubu){
		var self = this;
		
		
		if(favourite == null){
			var onlineTemplate = Handlebars.compile($('#twitch-users-online-template').html());
			var offlineTemplate = Handlebars.compile($('#twitch-users-offline-template').html());
			$("#twitch-list-online").html( onlineTemplate(self.twitchStreamersOnline) );
			$("#twitch-list-offline").html( offlineTemplate(self.twitchStreamersOffline) );
		} else{
				var favouriteTemplateTwitch = Handlebars.compile($('#twitch-user-favourited-online-template').html());
				$("#twitch-list-online").append( favouriteTemplateTwitch(self.topTwitchStreamersOnline[favourite]) );
		}
		
	}

	streamChannels.prototype.pushAzubuStreamers = function(favourite){
		var self = this;

		if(favourite == null){
			var onlineTemplate = Handlebars.compile($('#azubu-users-online-template').html());
			var offlineTemplate = Handlebars.compile($('#azubu-users-offline-template').html());
			var topTemplate = Handlebars.compile($('#azubu-top-online-template').html());
			$("#azubu-top-streamers").html( topTemplate(self.topAzubuStreamersOnline) );
			$("#azubu-list-online").html( onlineTemplate(self.azubuStreamersOnline) );
			$("#azubu-list-offline").html( offlineTemplate(self.azubuStreamersOffline) );
		} else{
			var favouriteTemplateAzubu = Handlebars.compile($('#azubu-users-favourited-online-template').html());
			$("#azubu-list-online").append( favouriteTemplateAzubu(self.topAzubuStreamersOnline[favourite]) );
		}
		
	}


	streamChannels.prototype.pushTopStreamerOnline = function(topStreamerName, addAccount, addStream){
		var self = this;

		if(addStream){
			var addStream = Handlebars.compile($('#twitch-template').html());
			
			for(var i = 0; i<self.topTwitchStreamersOnline.length; i++){
				if (self.topTwitchStreamersOnline[i].name == topStreamerName){
					$("#twitch-online-content").prepend(addStream(self.topTwitchStreamersOnline[i]));
				}
			}
		}


		if(addAccount){
			var onlineTemplate = Handlebars.compile($('#twitch-add-user-online-template').html());
			
			for(var i = 0; i<self.topTwitchStreamersOnline.length; i++){
				if (self.topTwitchStreamersOnline[i].name == topStreamerName){
					$("#twitch-list-online").append(onlineTemplate(self.topTwitchStreamersOnline[i]));
				}
			}
		}
		
	}

	streamChannels.prototype.pushTopTwitchStreamers = function(){
		var self = this;
		var onlineTemplate = Handlebars.compile($('#twitch-top-online-template').html());
		
			$("#twitch-top-streamers").html( onlineTemplate(self.topTwitchStreamersOnline) );
	
	}

	streamChannels.prototype.currentStreamOnline = function(){
		for(var i = 0; i<this.topTwitchStreamersOnline.length; i++){
			if(this.topTwitchStreamersOnline[i].name == this.currentStreamDisplayed){
				return true;
			}
		}
		for(var t = 0; t<this.twitchStreamersOnline.length; t++){
			if(this.twitchStreamersOnline[t].name == this.currentStreamDisplayed){
				return true;
			}
		}
		return false;
	}

	streamChannels.prototype.pushTopTwitchStreamers = function(){
		var self = this;
		var onlineTemplate = Handlebars.compile($('#twitch-top-online-template').html());
		
			$("#twitch-top-streamers").html( onlineTemplate(self.topTwitchStreamersOnline) );
	}

	streamChannels.prototype.favouriteStreamerMessage = function(favAzubu, favTwitch){
		
			var totalAdditions = 0;			
			this.newAdditions = [];
			
			for(var i = 0; i<this.azubuStreamersOnline.length; i++){
				
				var alreadyAddedAzub = false;

				for(var y=0;y<favAzubu.length;y++){
					if(favAzubu[y].name == this.azubuStreamersOnline[i].name){
						alreadyAddedAzub = true;
					}
				}
				
				if(!alreadyAddedAzub){

					this.newAdditions[totalAdditions] = {
						name:this.azubuStreamersOnline[i].name,
						id:this.azubuStreamersOnline[i].id,
						azubu:true,
					}
					totalAdditions ++;
				}

			}

			for(var t = 0; t<this.twitchStreamersOnline.length; t++){
				var alreadyAddedTwitch = false;

				for(var v=0;v<favTwitch.length;v++){
					if(favTwitch[v].name == this.twitchStreamersOnline[t].name){
						alreadyAddedTwitch = true;
					}
				}

				if(!alreadyAddedTwitch){
					this.newAdditions[totalAdditions] = {
						name:this.twitchStreamersOnline[t].name,
						id:null,
						twitch:true,
					}
					totalAdditions ++;
				}

			}
			if(totalAdditions>0){
				if(appSettings[1].settingChoice == 'on'){
					$("#sound").html('<audio controls autoplay style="display:none"><source src="assets/sound/notify.mp3" hidden="true" autostart="true" loop="false" type="audio/mpeg"></audio>');
				}
				
				if(appSettings[2].settingChoice == 'on'){
					var favouriteTemplate = Handlebars.compile($('#streamer-online-message-template').html());
					$("#favourite-online").html( favouriteTemplate(this.newAdditions) );
					$('#top-header-message').css('padding','14px');

				}
			}
			
	}




	var RedditLol = function(){
		this.youtubeVids = [];
		this.redditThreads = [];

		this.currentRedditSettings = [null,'leagueoflegends','hot',null];
		this.currentYoutubeSettings = [null,'leagueoflegends','hot',null];

		this.youtubeCount = 0;
		this.redditCount = 0;

		this.nextPageReddit;
		this.nextPageYoutube;

		this.previousYoutubeLength = 0;
		this.previousRedditLength = 0;

		this.redditAjaxRequest;
	}
	RedditLol.prototype.getAbout = function(){
		var redditAboutDeferred = $.Deferred();
		var self = this;
				
		self.redditAjaxRequest = $.ajax({
				dataType:'json',
				url: "http://www.reddit.com/r/leagueoflegends/about.json?jsonp=",
				error: function(){
	            	console.log('Unable to load reddit about api');
	        	},
				success: function(data){
					var aboutHtml = data.data.description_html;

					$side = $('.side');
					$side.html(aboutHtml);
					$side.html($side.text());
					var aboutHtml = $side.html();

					localStorage.setItem('aboutHtml', aboutHtml);
					localStorage.setItem('lastRedditAboutRetrieval', Date.now());

				 redditAboutDeferred.resolve();
                },

			});

		return redditAboutDeferred.promise();
	}

	RedditLol.prototype.getThreads = function(choice, pageSubreddit, pageType, pageTime, pageNum){

		var choiceOfFunction = choice;
		var ajaxUrl = "";
		if(pageSubreddit && pageType && pageTime && pageNum){
			ajaxUrl = "http://www.reddit.com/r/"+pageSubreddit+"/"+pageType+".json?limit=50&t="+pageTime+"&after="+pageNum+"&jsonp=";
		}  else if(pageSubreddit && pageType && pageTime){
		 	ajaxUrl = "http://www.reddit.com/r/"+pageSubreddit+"/"+pageType+".json?limit=50&t="+pageTime+"&jsonp=";
		} else if(pageSubreddit && pageType && pageNum){
			ajaxUrl = "http://www.reddit.com/r/"+pageSubreddit+"/"+pageType+".json?limit=50&after="+pageNum+"&jsonp=";
		} else if (pageSubreddit && pageType) {
			ajaxUrl = "http://www.reddit.com/r/"+pageSubreddit+"/"+pageType+".json?limit=50&jsonp=";
		}

		var redditDeferred = $.Deferred();
		var self = this;
				
		self.redditAjaxRequest = $.ajax({
				dataType:'json',
				url: ajaxUrl,
				error: function(){
	            	console.log('Unable to load reddit api');
	        	},
				success: function(data){
					var nodes = data.data.children;
					var y = 0;

					if (choiceOfFunction == 'youtube'){
						self.previousYoutubeLength = self.youtubeVids.length;
					} 

					else if (choiceOfFunction == 'reddit'){
						self.previousRedditLength = self.redditThreads.length;
					}

					for(var i=0;i<nodes.length;i++){
						var redditDomainLink = nodes[i].data.domain;
						if(choiceOfFunction == null){
							localStorage.setItem('redditLastRetrieved',Date.now());
							localStorage.setItem('youtubeLastRetrieved',Date.now());
							// Change YouTube and Reddit Data
						
							
	                         self.redditThreads[i]={
	                         		domain: nodes[i].data.domain,
	                         		title: nodes[i].data.title,
	                         		url: nodes[i].data.url,
	                         		score: nodes[i].data.score,
	                         		commentsTotal: nodes[i].data.num_comments,
	                         		permalink: nodes[i].data.permalink,
	                         		created: nodes[i].data.created_utc,
	                         		content: nodes[i].data.selftext_html,
	                         		author: nodes[i].data.author,
	                         		thumbnail: nodes[i].data.thumbnail,
	                         		redditRank: i + 1 + self.previousRedditLength,
	                         		linkFlair: nodes[i].data.link_flair_css_class,
									authorFlair: nodes[i].data.author_flair_css_class,
	                         		videoEmbed: null,
	                         		after: data.data.after,
	                         	}

	                        
	                         
							if((redditDomainLink == 'youtube.com' || redditDomainLink == 'youtu.be') 
								&& !nodes[i].data.url.match(/user/i) && (nodes[i].data.media != null)  && (typeof nodes[i].data.media.oembed.url != 'undefined')){
								self.youtubeVids[y] = {
	                         		title: nodes[i].data.title,
	                         		url: nodes[i].data.media.oembed.url,
	                         		videoEmbed: nodes[i].data.media.oembed.url.replace(/watch\?v=/i, 'embed/'),
	                         		score: nodes[i].data.score,
	                         		created: nodes[i].data.created_utc,
	                         		author: nodes[i].data.author,
	                         		commentsTotal: nodes[i].data.num_comments,
	                         		permalink: nodes[i].data.permalink,
	                         		redditRank: i + 1,
	                         		videoRank: y + 1,
	                         		after: data.data.after,
	                         	}
	                         	y++;



	                         	self.redditThreads[i].videoEmbed = nodes[i].data.media.oembed.url.replace(/watch\?v=/i, 'embed/');
	                         	
	                         	
	                         }

	                         self.nextPageYoutube = data.data.after; 
	                         self.nextPageReddit = data.data.after;

	                         	
                        }


                        else if (choiceOfFunction == 'youtube'){
                        	localStorage.setItem('youtubeLastRetrieved',Date.now());
						// Make changes to youtube data 
							
						
							if((redditDomainLink == 'youtube.com' || redditDomainLink == 'youtu.be') 
								&& !nodes[i].data.url.match(/user/i) && (nodes[i].data.media != null) && (typeof nodes[i].data.media.oembed.url != 'undefined')){
								
								self.youtubeVids[y+self.previousYoutubeLength] = {
	                         		title: nodes[i].data.title,
	                         		url: nodes[i].data.media.oembed.url,
	                         		videoEmbed: nodes[i].data.media.oembed.url.replace(/watch\?v=/i, 'embed/'),
	                         		score: nodes[i].data.score,
	                         		created: nodes[i].data.created_utc,
	                         		author: nodes[i].data.author,
	                         		commentsTotal: nodes[i].data.num_comments,
	                         		permalink: nodes[i].data.permalink,
	                         		redditRank: i + 1,
	                         		videoRank: y+self.previousYoutubeLength+1,
	                         		after: data.data.after,
	                         	}
	                         	y++;

	                         }
	                         self.nextPageYoutube = data.data.after;

                        }


                        else if(choiceOfFunction == 'reddit'){
                        localStorage.setItem('redditLastRetrieved',Date.now());
						// Make changes to reddit data
						
							    self.redditThreads[i+self.previousRedditLength]={
	                         		domain: nodes[i].data.domain,
	                         		title: nodes[i].data.title,
	                         		url: nodes[i].data.url,
	                         		score: nodes[i].data.score,
	                         		commentsTotal: nodes[i].data.num_comments,
	                         		permalink: nodes[i].data.permalink,
	                         		created: nodes[i].data.created_utc,
	                         		content: nodes[i].data.selftext_html,
	                         		author: nodes[i].data.author,
	                         		thumbnail: nodes[i].data.thumbnail,
	                         		redditRank: i + 1 + self.previousRedditLength,
	                         		linkFlair: nodes[i].data.link_flair_css_class,
									authorFlair: nodes[i].data.author_flair_css_class,
	                         		videoEmbed: null,
	                         		after: data.data.after,

	                         		
	                         	}

	                         	if((redditDomainLink == 'youtube.com' || redditDomainLink == 'youtu.be') 
								&& !nodes[i].data.url.match(/user/i) && (nodes[i].data.media != null) && (typeof nodes[i].data.media.oembed.url != 'undefined')){

	                         		self.redditThreads[i+self.previousRedditLength].videoEmbed = nodes[i].data.media.oembed.url.replace(/watch\?v=/i, 'embed/');
								}

	                        self.nextPageReddit = data.data.after;
                        }

					}

					if(choiceOfFunction != 'youtube'){
						for(var t = 0; t < self.redditThreads.length; t++){
							if(self.redditThreads[t].thumbnail == 'self' || self.redditThreads[t].thumbnail == 'default'){
								self.redditThreads[t].thumbnail = 'assets/img/default.png';
							} 
						}
					}
			
					localStorage.setItem('redditThreads', JSON.stringify(self.redditThreads));
					localStorage.setItem('nextPage',self.nextPageReddit);
					localStorage.setItem('redditSettings', JSON.stringify(self.currentRedditSettings));
               
                    redditDeferred.resolve();
                },

			});

		return redditDeferred.promise();
	}

	
	RedditLol.prototype.youtubeArea = function(){

		var self = this;
		var template = Handlebars.compile($('#youtube-template').html());
		
		if(self.youtubeVids.length == 0){
						$("#reddit-progress").html('<p>Sorry all out of reddit threads for now</p>');
		}
		
		for(var i = 0; i<4; i++){
			if (self.youtubeVids.length > self.youtubeCount){

				$("#youtube-threads").append( template(self.youtubeVids[self.youtubeCount]) );
				self.youtubeCount ++;
			}
		}		
		
	}

	RedditLol.prototype.mainPage = function(useLocalStorage){

		var self = this;
		var template = Handlebars.compile($('#reddit-template').html());
		
		
			if(self.redditThreads.length < 25){
						$("#reddit-progress").html('<p>Sorry all out of reddit threads for now</p>');
			}

			var count = 25;
			if (useLocalStorage){
				count = self.redditThreads.length;
			}

			for(var i = 0; i<count; i++){
				if (self.redditThreads.length > self.redditCount){

					$("#reddit-threads").append(template(self.redditThreads[self.redditCount]));

					var $decoder = $(".reddit-expand").eq(self.redditCount).children(".decode");
				
					$decoder.html($decoder.text());
					
					self.redditCount ++;
				}
				
			}
		
	}


	var WebInterface = function(){
		this.youtubeInUse = '';
		this.redditInUse = '';
		this.twitchInUse = '';
		this.tabSystemProcessed = 0;
	}

	WebInterface.prototype.checkIfBelongs = function(optionalClass, highlightArea){
		var area = optionalClass || '';
		var iFrameCapableLinks = $(".iframe-capable" + area);
		

		for(var i = 0; i < iFrameCapableLinks.length; i++){

			var iFrameCapableLink = iFrameCapableLinks.eq(i);
			var hashData = iFrameCapableLink.data('name');
			if('#'+hashData == window.location.hash ){
				if(highlightArea){
					$("a#"+hashData+" li").addClass('selected-link');
				}
				return iFrameCapableLink.attr('href');

			}
		}
		return false;
	}

	WebInterface.prototype.makeIframe = function(iframeUrl){
		$("#main-content").css( "display", "none" );
		var $iFrameHolder = $("#iframe-holder");
		var heightToProcess = $(window).height()-4;
		var heightToProcess2 = heightToProcess - 16;
		$iFrameHolder.css('height', heightToProcess2 + 'px')
		$iFrameHolder.html('<iframe id="iframe-content" src="'+iframeUrl+'" style="width:100%;height:'+heightToProcess+'px;border:none;padding:none;margin:none"><p>Your browser does not support iframes.</p></iframe>').fadeIn();
	}

	WebInterface.prototype.changeIframeHeight = function(){
		if($("#main-content").css("display")=='none'){

			var heightToProcess = $(window).height()-4;
			var heightToProcess2 = heightToProcess - 16;
			$("#iframe-holder").css('height', heightToProcess2 + 'px');
			$("#iframe-content").css('height', heightToProcess + 'px');

		}
	}

	WebInterface.prototype.changeTwitchDimensions = function(){

		var spacing = 450;
		var twitchWidth = $(window).width()-spacing-($(".twitch-chat-area").width());

		if(detectmob()){
			spacing = 50;
			var twitchWidth = $(window).width()-spacing
		} else if ($('#sidebar').css('display') == 'none'){
			spacing = 90;
			var twitchWidth = $(window).width()-spacing-($(".twitch-chat-area").width());
		}

		var twitchHeight = (twitchWidth/16)*9;
		
		
		$(".twitch-video").css({
		   width : twitchWidth,
		   height : twitchHeight + 'px'
		});
			
		$(".twitch-chat").css('height', twitchHeight + 'px');
		$(".twitch-chat-area").css('height', twitchHeight + 'px');
	}

	WebInterface.prototype.setSettings = function(){
		$(".redditNewTab").val(appSettings[0].settingChoice);
		$(".twitchVisualNotifications").val(appSettings[1].settingChoice);
		$(".twitchAudioNotifications").val(appSettings[2].settingChoice);
		$(".eSportsNotifications").val(appSettings[3].settingChoice);
		$(".defaultNameLink").val(appSettings[4].settingChoice);
		$(".defaultChampLink").val(appSettings[5].settingChoice);
		$(".smartEnter").val(appSettings[6].settingChoice);
		$(".newWindow").val(appSettings[7].settingChoice);
	}

	WebInterface.prototype.saveSettings = function(){
		appSettings[0].settingChoice = $(".redditNewTab").val();
		appSettings[1].settingChoice = $(".twitchVisualNotifications").val();
		appSettings[2].settingChoice = $(".twitchAudioNotifications").val();
		appSettings[3].settingChoice = $(".eSportsNotifications").val();
		appSettings[4].settingChoice = $(".defaultNameLink").val();
		appSettings[5].settingChoice = $(".defaultChampLink").val();
		appSettings[6].settingChoice = $(".smartEnter").val();
		appSettings[7].settingChoice = $(".newWindow").val();
		localStorage.setItem('appSettings', JSON.stringify(appSettings));
	}

	WebInterface.prototype.registerScreen = function(){
		if(detectmob()){
			$('#sidebar').addClass('clear').css({'position':'relative', 'width':'100%', 'height':'auto'});
			$('#sidebar-content').css({'background-color':'#262729','position':'relative'});
			$('#main-content, #iframe-holder').css('margin-left','0px');
			$('.nav-expand').removeAttr('style').addClass('nav-expand-mobile');
			$('.champtionbuttons').css('padding-bottom','30px');

		} else {
			var $sidebar = $('#sidebar');
			$sidebar.perfectScrollbar();
			$('#champ-drop').perfectScrollbar({wheelSpeed:20,useKeyboard:true});

			$('.nav-expand').removeClass('nav-expand-mobile');
			$sidebar.css({'position':'', 'width':'', 'height':''});
			$('#sidebar-content, .nav-expand').removeAttr('style');
			$('#iframe-holder, #main-content').css('margin-left',' ');
			$('.championbuttons').css('padding-bottom','0px');

			if($sidebar.css('display') == 'none'){
				$('#main-content, #iframe-holder').css('margin-left','0px');
				$('.nav-expand').css('left','0px');
			}
		}
	}

$(function(){
////////////////// This is where stuff starts to get a little messy

///////////// Initilisation of Objects
	var currentUrl = window.location.href; 
	var league = new LeagueLinks();
	var streams = new streamChannels();
	var reddit = new RedditLol();
	var web = new WebInterface();

	web.registerScreen();
////////

// TAB SYSTEM ///////////////////
/////// Is /////////////////
///////////// Below //////////

	function tabSystem(){
		if(currentUrl.match(/youtubevideos/i)){
			///////////////////// if page back button is pressed
			$("#iframe-holder").html(' ').css("display","none");
			$("#main-content").css("display","block");
			$("header").css('height','100px');
			$("#youtube-content").css("display","block");
			$("#reddit-content").css("display","none");
			$("#twitch-content").css("display","none");
			$("#settings-content").css("display","none");
			/////////////////////

			$("a#youtube li").addClass('selected-link');
			reddit.getThreads(reddit.currentYoutubeSettings[0],reddit.currentYoutubeSettings[1],reddit.currentYoutubeSettings[2],reddit.currentYoutubeSettings[3],reddit.nextPageYoutube).done(function() {
					reddit.youtubeArea();
					reddit.mainPage();
					if($(window).height() > 1080){
						reddit.youtubeArea();
					}	
			});
			web.twitchInUse = 'no';
		} else if (currentUrl.match(/settings/i)){	
			$("#iframe-holder").html(' ').css("display","none");
			$("#main-content").css("display","block");
			$("header").css('height','28px');
			$("#youtube-content").css("display","none");
			$("#reddit-content").css("display","none");
			$("#twitch-content").css("display","none");
			$("#settings-content").css("display","block");
			$("a#settings li").addClass('selected-link');
			web.setSettings();
			reddit.getThreads(reddit.currentRedditSettings[0],reddit.currentRedditSettings[1],reddit.currentRedditSettings[2],reddit.currentRedditSettings[3],reddit.nextPageReddit).done(function() {
					reddit.mainPage();
					web.youtubeInUse = 'contentAvailable'	
				});
			web.twitchInUse = 'no';
			web.youtubeInUse = 'no';


		} else if (currentUrl.match(/twitchstreams/i)){
			///////////////////// if page back button is pressed
			$("#iframe-holder").html(' ').css("display","none");
			$("#main-content").css("display","block");
			$("header").css('height','28px');
			$("#youtube-content").css("display","none");
			$("#reddit-content").css("display","none");
			$("#settings-content").css("display","none");
			$("#twitch-content").css("display","block");
			/////////////////////

			$("#twitch-content").css( "display", "block" );
			$("a#twitch li").addClass('selected-link');
			web.youtubeInUse = 'no';
			web.redditInUse = 'no';	
			

		} else if(web.checkIfBelongs()){ 
			
			if(!detectmob()){
				var url = web.checkIfBelongs(null, true);
				$("#iframe-holder").css("display","block");
				web.makeIframe(url)
			};
				
				
			web.youtubeInUse = 'no';
			web.redditInUse = 'no';
			web.twitchInUse = 'no';	

		} else {
			$("a#reddit li").addClass('selected-link');
			if ( currentUrl.match(/back/i) && ((parseInt(localStorage.getItem('redditLastRetrieved')) + 1000*60*60) >= Date.now()) ){

					reddit.redditThreads = JSON.parse(localStorage.getItem('redditThreads'));
					reddit.nextPageReddit = localStorage.getItem('nextPage');

					var yScroll = parseInt(localStorage.getItem('yScroll'));
					reddit.currentRedditSettings = JSON.parse(localStorage.getItem('redditSettings'));
					reddit.mainPage(true);
					
					$("#sidebar").css('display',localStorage.getItem('sidebarOpen'));

					// time outs are fo weird bug fix that makes page lag
					setTimeout(function(){
				 		$(window).scrollTop(yScroll);
				 	},333);

				 	setTimeout(function(){
				 		history.pushState("", "", "#");
				 	 },1755);
					
					

					$(".subreddit-setting").removeClass('setting-chosen');
					$(".subreddit-"+reddit.currentRedditSettings[1]+" ").addClass('setting-chosen');
					
					$('.dropdown-subreddit').val(reddit.currentRedditSettings[1]);

					if(reddit.currentRedditSettings[3] != null){
						$('.dropdown-reddit-options').val(reddit.currentRedditSettings[2]+reddit.currentRedditSettings[3]);
					} else {
						$('.dropdown-reddit-options').val(reddit.currentRedditSettings[2]);
					}

					if((reddit.currentRedditSettings[0] != null)&&(reddit.currentRedditSettings[2] != 'hot')){
						$(".reddit-setting").removeClass('setting-chosen');
						$("."+reddit.currentRedditSettings[3]+reddit.currentRedditSettings[2]+"-reddit").addClass('setting-chosen');
					}
						
					web.youtubeInUse = 'no';
					web.redditInUse = 'no';
					web.twitchInUse = 'no';

			} else{
				reddit.getThreads(reddit.currentRedditSettings[0],reddit.currentRedditSettings[1],reddit.currentRedditSettings[2],reddit.currentRedditSettings[3],reddit.nextPageReddit).done(function() {
					reddit.mainPage();
					web.youtubeInUse = 'contentAvailable'	
				});
				web.twitchInUse = 'no';
				web.youtubeInUse = 'no';
				
			}

			///////////////////// if page back button is pressed
			$("#iframe-holder").html(' ').css("display","none");
			$("#main-content").css("display","block");
			$("header").css('height','100px');
			$("#youtube-content").css("display","none");
			$("#reddit-content").css("display","block");
			$("#settings-content").css("display","none");
			$("#twitch-content").css("display","none");
			/////////////////////
	}
}	

//////////////////////////// THIS PART COULD USE SOME TLC FOR SURE
	window.onpopstate = function(event){
		if(localStorage.getItem('sessionActive') == 'yes' && ((window.location.hash.length != 0)||(window.location.href == window.location.origin)) ){
				if (!web.checkIfBelongs()){ // also include # and blank for reddit
					location.reload();
				} else {
					$(".nav-button li").removeClass('selected-link');
					tabSystem();
					web.tabSystemProcessed = 1;
				}
		}
	}
	if(web.tabSystemProcessed == 0){
		tabSystem();
		// pretty hacky thing that should be fixed properly
		setTimeout(function(){
			localStorage.setItem('sessionActive','yes');
		}, 20000);
	}
////////////////////////////////////////
	
	
//////////////////////////////////
//////// Reddit Event Area ///////
/////////////////////////////////
	var lastRedditAboutRetrieval = localStorage.getItem('lastRedditAboutRetrieval');
	if( lastRedditAboutRetrieval == null || (parseInt(lastRedditAboutRetrieval) + 1000*60*60) <= Date.now() ){
		reddit.getAbout();
	} else {
		$('.side').html(localStorage.getItem('aboutHtml'));
	}

	var $redditContent = $("#reddit-content")

	$redditContent.on('click','.reddit-show-more', function(){
			var $expander = $(this).siblings(".reddit-expand");
			var $youtubeHolder = $expander.children(".reddit-youtube-prev");
			if ($youtubeHolder){
				//$expander.addClass('video-container');
				$youtubeHolder.html('<div class="video-container"><iframe width="560" height="315" src="'+$youtubeHolder.data("url")+'" frameborder="0" allowfullscreen></iframe></div>');	
			}
			$expander.slideToggle();
			
		});

	$redditContent.on('click','.original-state-content', function(){
		$(this).toggleClass('open-state-content');
	});

	$redditContent.on('click','.original-state-media', function(){
		$(this).toggleClass('open-state-media');
	});


	$('.dropdown-subreddit, .dropdown-reddit-options').on('change', function(event){

		if(typeof reddit.redditAjaxRequest !== 'undefined'){
			if(reddit.redditAjaxRequest && reddit.redditAjaxRequest.readyState != 4){
            	reddit.redditAjaxRequest.abort();
            	if(reddit.youtubeVids.length == 0){
            		web.youtubeInUse = 'no';
            	}
        	}
    	}

		reddit.redditThreads = [];
		reddit.redditCount = 0;
		reddit.nextPageReddit = null;

		var $selectedSubreddit = $(".dropdown-subreddit").find('option:selected');
		var $selectedRedditSettings = $('.dropdown-reddit-options').find('option:selected');
		reddit.currentRedditSettings=['reddit',$selectedSubreddit.data('subreddit'),$selectedRedditSettings.data('type'),$selectedRedditSettings.data('duration')];

		$(".reddit-setting").removeClass('setting-chosen');
		$("."+$selectedRedditSettings.data('duration')+$selectedRedditSettings.data('type')+"-reddit").addClass('setting-chosen');

		$(".subreddit-setting").removeClass('setting-chosen');
		$(".subreddit-"+$selectedSubreddit.data('subreddit')).addClass('setting-chosen');
		
		$("#reddit-threads").html(' ');
		$("#reddit-progress").html('<img src="assets/img/loader.gif" />');

		reddit.getThreads(reddit.currentRedditSettings[0],reddit.currentRedditSettings[1],reddit.currentRedditSettings[2],reddit.currentRedditSettings[3]).done(function() {
			reddit.mainPage();	
		});
	});


	$('.subreddit-setting').on('click', function(e){
		var $this = $(this);

		if(e.which == 2){
			window.open('http://www.reddit.com/r/'+$this.data('subreddit'));
			event.preventDefault();
		} else{
			if(typeof reddit.redditAjaxRequest !== 'undefined'){
				if(reddit.redditAjaxRequest && reddit.redditAjaxRequest.readyState != 4){
	            	reddit.redditAjaxRequest.abort();
	            	if(reddit.youtubeVids.length == 0){
	            		web.youtubeInUse = 'no';
	            	}
	        	}
        	}

			$("#reddit-threads").html(' ');
			$("#reddit-progress").html('<img src="assets/img/loader.gif" />');

			reddit.redditThreads = [];
			reddit.redditCount = 0;
			reddit.nextPageReddit = null;
			reddit.currentRedditSettings=['reddit',$this.data('subreddit'),$this.data('type'),null,null];

			$(".reddit-setting").removeClass('setting-chosen');
			$(".hot-reddit").addClass('setting-chosen');

			$this.siblings().removeClass('setting-chosen');
			$this.addClass('setting-chosen');

			$('.dropdown-subreddit').val($this.data('subreddit'));
			$('.dropdown-reddit-options').val('hot');

			reddit.getThreads(reddit.currentRedditSettings[0],reddit.currentRedditSettings[1],reddit.currentRedditSettings[2],reddit.currentRedditSettings[3]).done(function() {
				reddit.mainPage();	
			});
		}

	});

	$(".reddit-setting").on('click', function(e){
		var $this = $(this);

		if(e.which === 2){
			if($this.data('type')=='top'){
				window.open('http://www.reddit.com/r/'+reddit.currentRedditSettings[1]+'/top/?sort=top&t='+$this.data('duration'));
			} else{
				window.open('http://www.reddit.com/r/'+reddit.currentRedditSettings[1]+'/'+$this.data('type'));
			}
			
			e.preventDefault();
		} else{
			if(typeof reddit.redditAjaxRequest !== 'undefined'){
				if(reddit.redditAjaxRequest && reddit.redditAjaxRequest.readyState != 4){
	            	reddit.redditAjaxRequest.abort();
	            	if(reddit.youtubeVids.length == 0){
	            		web.youtubeInUse = 'no';
	            	}
	        	}
	        }

			$("#reddit-threads").html(' ');
			$("#reddit-progress").html('<img src="assets/img/loader.gif" />');

			reddit.redditThreads = [];
			reddit.redditCount = 0;
			reddit.nextPageReddit = null;
			reddit.currentRedditSettings=['reddit',reddit.currentRedditSettings[1],$this.data('type'),$this.data('duration')];

			$this.siblings().removeClass('setting-chosen');
			$this.addClass('setting-chosen');

			$('.dropdown-reddit-options').val($this.data('type')+$this.data('duration'));
			//make reset variable function

			reddit.getThreads(reddit.currentRedditSettings[0],reddit.currentRedditSettings[1],reddit.currentRedditSettings[2],reddit.currentRedditSettings[3]).done(function() {
				reddit.mainPage();	
			});
		}

	});

	$("#reddit-threads").on('click', 'a', function(e){
		if(appSettings[0].settingChoice == 'on'){
			$(this).attr('target','_blank');
		} else{
			$(this).attr('target','_self');

			if($('#sidebar').css('display') == 'none'){
				localStorage.setItem('sidebarOpen', 'none');
			} else {
				localStorage.setItem('sidebarOpen', 'block');
			};
			
			var $redditExpand = $(".reddit-expand");
			var $redditIndex = $(this).closest('.reddit-thread').data('id');
			var totalExpandHeight = 0;

			for(var i = 0; i<$redditIndex-1; i++){
				if($redditExpand.eq(i).css('display')!='none'){
					totalExpandHeight += $redditExpand.eq(i).outerHeight(true);
				}
			}

			var yScroll = $(window).scrollTop()-totalExpandHeight;
			localStorage.setItem('yScroll', yScroll);

			history.pushState("", "", "#back");
		}
	});

	$('.dropdown-youtube-options').on('change', function(event){

			$("#youtube-threads").html(' ');
			$("#youtube-progress").html('<img src="assets/img/loader.gif" />');

			if(typeof reddit.redditAjaxRequest !== 'undefined'){
				if(reddit.redditAjaxRequest && reddit.redditAjaxRequest.readyState != 4){
	            	reddit.redditAjaxRequest.abort();
	            	if(reddit.youtubeVids.length == 0){
	            		web.youtubeInUse = 'no';
	            	}
	        	}
        	}

			var $selectedYoutubeSettings = $(this).find('option:selected');

		reddit.youtubeVids = [];
		reddit.youtubeCount = 0;
		reddit.currentYoutubeSettings=['youtube',reddit.currentYoutubeSettings[1],$selectedYoutubeSettings.data('type'),$selectedYoutubeSettings.data('duration')];

			
			$(".youtube-setting").removeClass('setting-chosen');
			$("."+$selectedYoutubeSettings.data('duration')+$selectedYoutubeSettings.data('type')+"-youtube").addClass('setting-chosen');
			

			reddit.getThreads(reddit.currentYoutubeSettings[0],reddit.currentYoutubeSettings[1],reddit.currentYoutubeSettings[2],reddit.currentYoutubeSettings[3]).done(function() {
				reddit.youtubeArea();	
			});
		});

//////////////////////////////////
//////// Youtube Event Area ///////
/////////////////////////////////

	$(".youtube-setting").on('click', function(){
		var $this = $(this);

		$("#youtube-threads").html(' ');
		$("#youtube-progress").html('<img src="assets/img/loader.gif" />');

		$('.dropdown-youtube-options').val($this.data('type')+$this.data('duration'));

		if(typeof reddit.redditAjaxRequest !== 'undefined'){
			if(reddit.redditAjaxRequest && reddit.redditAjaxRequest.readyState != 4){
	            reddit.redditAjaxRequest.abort();
	            if(reddit.redditThreads.length == 0){
	            		web.redditInUse = 'no';
	            }
	        }
	    }

		reddit.youtubeVids = [];
		reddit.youtubeCount = 0;
		reddit.currentYoutubeSettings=['youtube',reddit.currentYoutubeSettings[1],$this.data('type'),$this.data('duration')];

		$this.siblings().removeClass('setting-chosen');
		$this.addClass('setting-chosen');

		reddit.getThreads(reddit.currentYoutubeSettings[0],reddit.currentYoutubeSettings[1],reddit.currentYoutubeSettings[2],reddit.currentYoutubeSettings[3]).done(function() {
			reddit.youtubeArea();	
		});

	});


//////////////////////////////////
//////// Twitch Event Area ///////
/////////////////////////////////

	function streamEvents(){

		if ( (currentUrl.match(/back/i)) && ((parseInt(localStorage.getItem('streamsLastRetrieved')) + 1000*60*15) >= Date.now()) ){
			streams.azubuStreamersOffline = JSON.parse(localStorage.getItem('azubuStreamersOffline'));
			streams.azubuStreamersOnline = JSON.parse(localStorage.getItem('azubuStreamersOnline'));
			streams.topAzubuStreamersOnline = JSON.parse(localStorage.getItem('topAzubuStreamersOnline'));
			streams.twitchStreamersOnline = JSON.parse(localStorage.getItem('twitchStreamersOnline'));
			streams.twitchStreamersOffline = JSON.parse(localStorage.getItem('twitchStreamersOffline'));
			streams.topTwitchStreamersOnline = JSON.parse(localStorage.getItem('topTwitchStreamersOnline'));
			streams.totalStreamersOnline = parseInt(localStorage.getItem('totalStreamersOnline'));

			if(streams.totalStreamersOnline>0){
				$(".twitch-online").css( "display", "inline" ).text(streams.totalStreamersOnline);
			}

			streams.offlineTwitchStreamers();
			streams.pushTwitchStreams();
			streams.pushTwitchStreamers();
			streams.pushAzubuStreamers();
			streams.pushTopTwitchStreamers();
			if(appSettings[3].settingChoice=='on'){
				streams.pushStreamsHeader();
			}
			web.changeTwitchDimensions();
			$('.tooltip-left').tipsy({gravity: 'e'});
			$('.tooltip-viewers').tipsy({gravity: 'w'});
			$('.tooltip-center').tipsy({gravity: 'n'});
			
		} else {
			streams.totalStreamersOnline = 0;
			var pastAzubFav = JSON.parse(localStorage.getItem('azubuStreamersOnline'));
			var pastTwitchFav = JSON.parse(localStorage.getItem('twitchStreamersOnline'));

			streams.onlineTwitchStreamers().done(function() {

				localStorage.setItem('streamsLastRetrieved', Date.now());

				if((streams.streamFunctionCount>0)&&(appSettings[1].settingChoice=='on' || appSettings[2].settingChoice=='on')){
					streams.favouriteStreamerMessage(pastAzubFav, pastTwitchFav);
				}
				
				streams.offlineTwitchStreamers();
				streams.pushTwitchStreamers();

				if((streams.streamFunctionCount > 0) && streams.currentStreamOnline()){
					// do nothing - prevents refreshing of streams that are currently online
				} else if((streams.streamFunctionCount > 0) && streams.currentStreamViewers<40){
					// do nothing - prevents smaller streams from being refreshed if they don't make the top 12 after refresh
				} else {
					streams.pushTwitchStreams();
				}
				$('.tooltip-left').tipsy({gravity: 'e'});
				$('.tooltip-viewers').tipsy({gravity: 'w'});
				$('.tooltip-center').tipsy({gravity: 'n'});

				streams.getAzubuStreamers().done(function() {
					streams.pushAzubuStreamers();
					if(streams.totalStreamersOnline>0){
						$(".twitch-online").css( "display", "inline" ).text(streams.totalStreamersOnline);
					}
					$('.tooltip-left').tipsy({gravity: 'e'});
					$('.tooltip-viewers').tipsy({gravity: 'w'});
					$('.tooltip-center').tipsy({gravity: 'n'});
				});

				streams.topTwitchOnline().done(function() {
					streams.pushTopTwitchStreamers();
					if(appSettings[3].settingChoice=='on'){
						streams.pushStreamsHeader();
					}
					$('.tooltip-left').tipsy({gravity: 'e'});
					$('.tooltip-viewers').tipsy({gravity: 'w'});
					$('.tooltip-center').tipsy({gravity: 'n'});	
				});

				if(streams.totalStreamersOnline>0){
					$(".twitch-online").css( "display", "inline" ).text(streams.totalStreamersOnline);
				}
				web.changeTwitchDimensions();
				streams.streamFunctionCount++;

			});
		}
	}

	streamEvents();
	setInterval(streamEvents, 1000*60*12);

	var $twitchHolder = $("#twitch-content");
	$twitchHolder.on('click', '.view-this-stream', function(){
		var $this = $(this);
		streams.pushTwitchStreams($this.data('id'), $this.data('type'));
		web.changeTwitchDimensions();
		$('body,html').animate({
			scrollTop: 0
		}, 400);
	});

	$twitchHolder.on('click', '.add-top-champ', function(){
		var $this = $(this);

		streams.totalStreamersOnline++;
		localStorage.setItem('totalStreamersOnline', JSON.stringify(streams.totalStreamersOnline));

		$(".twitch-online").css( "display", "inline" ).text(streams.totalStreamersOnline);

		if($this.data('id') != null){
			
			streams.pushTwitchStreams($this.data('id'), 'top');
			web.changeTwitchDimensions();

			$('body,html').animate({
				scrollTop: 0
			}, 600);

			streams.submitStreamer($this.data('name'));
			streams.pushTwitchStreamers($this.data('id'));

		} else {
			streams.pushAzubuStreamers($this.data('count'));
			streams.submitStreamer($this.data('name'),'azubu');		
		}

		$this.fadeOut();
	});

	$twitchHolder.on('click', '.remove-twitch', function(){
		var $this = $(this);
		$this.parent().fadeOut();
		streams.removeStreamer($this.data('name'));
	})

	$twitchHolder.on('click','.remove-twitch-online', function(){
		var $this = $(this);
		var streamName = $this.data('name')
		$this.parent().fadeOut();
		$(".twitch-user-"+streamName).fadeOut();
		streams.removeStreamer(streamName);
		
		if(streams.twitchStreamersOnline.length == 1){
			$(".twitch-online").css( "display", "none" )
		} else{
			$(".twitch-online").text(streams.twitchStreamersOnline.length-1);
		}
	})

	$twitchHolder.on('click', '.add-champ', function(){
		if($(".champ-addition").val().length>0){
			$(this).val('Streamer Added');
			$(this).addClass('streamer-added');
			streams.submitStreamer($(".champ-addition").val());
			streamEvents();
			$(".champ-addition").val('');
		}	
	});

	$(".champ-addition").on('keydown', function(){
		$('.add-champ').val('Add Streamer');
		$('.add-champ').removeClass('streamer-added')
	});
	
	$twitchHolder.on('click', '.view-twitch-chat', function(){
		var $this = $(this);

		if($this.hasClass("close-twitch-chat")){
			$this.prev().html(' ');
			$this.removeClass('close-twitch-chat');
		} else{
		var streamerName = $this.data('name');
		$this.prev().html('<iframe frameborder="0" scrolling="no" id="chat_embed" src="http://twitch.tv/chat/embed?channel='+streamerName+'&popout_chat=true" height="100%" width="300"></iframe>')
		$this.addClass('close-twitch-chat');
		}

		web.changeTwitchDimensions();
	});

	$('#top-header-message').on('click','.close-riot, .close-favourite', function(){
		$(this).parent().fadeOut(function() {
			var $topHeader = $('#top-header-message');

	    	if( $topHeader.height() == 0){
	    		$topHeader.css('padding','0px');
	    	}
		});	
	});

	
//////////////////////////////////
//////// RSS Feeds Event Area ///////
/////////////////////////////////
//// This area isn't very modular, and could use some work. (I repeat my code).

	function rssEvents(){
		if ( (currentUrl.match(/back/i)) && ((parseInt(localStorage.getItem('rssLastRetrieved')) + 1000*60*20) >= Date.now()) ){
				if(league.newReignArticles){
					if(league.newReignArticles >= 5){
						$(".reign-news").css( "display", "inline" ).html("5<span class='lighter'>+</span>");
					} else{
						$(".reign-news").css( "display", "inline" ).text(league.newReignArticles);
					}
				}
				if(league.newOnGamers){
					if(league.newOnGamers >= 5){
						$(".ongamers-news").css( "display", "inline" ).html("5<span class='lighter'>+</span>");
					} else{
						$(".ongamers-news").css( "display", "inline" ).text(league.newOnGamers);
					}
				}
				if(league.newLeagueArticles){
					if(league.newLeagueArticles >= 5){
						$(".league-news").css( "display", "inline" ).html("5<span class='lighter'>+</span>");
					} else{
						$(".league-news").css( "display", "inline" ).text(league.newLeagueArticles);
					}
				}
		} else{
			localStorage.setItem('rssLastRetrieved',Date.now());

			league.reignOfGaming().done(function() {

				if(league.newReignArticles){
					if(league.newReignArticles >= 5){
						$(".reign-news").css( "display", "inline" ).html("5<span class='lighter'>+</span>");
					} else{
						$(".reign-news").css( "display", "inline" ).text(league.newReignArticles);
					}
				}
			});
			

			league.onGamers().done(function() {
				if(league.newOnGamers){
					if(league.newOnGamers >= 5){
						$(".ongamers-news").css( "display", "inline" ).html("5<span class='lighter'>+</span>");
					} else{
						$(".ongamers-news").css( "display", "inline" ).text(league.newOnGamers);
					}
				}
			});
		

			league.LolInfo().done(function() {
				if(league.newLeagueArticles){
					if(league.newLeagueArticles >= 5){
						$(".league-news").css( "display", "inline" ).html("5<span class='lighter'>+</span>");
					} else{
						$(".league-news").css( "display", "inline" ).text(league.newLeagueArticles);
					}
				}
			});	
		}
	}

	rssEvents();
	setInterval(rssEvents, 1000*60*25);

	$("#ongamers").on('click', function(){
		$(".ongamers-news").fadeOut();
		localStorage.setItem('newOnGamers',0);
	});

	$("#reign").on('click', function(){
				$(".reign-news").fadeOut();
				localStorage.setItem('newReignArticles',0);
	});

	$("#league").on('click', function(){
		$(".league-news").fadeOut();
		localStorage.setItem('newLeagueArticles',0);
	});


/////////////////////////////////////////
//////// Settings Page Event Area ///////
///////////////////////////////////////

	$('#settings-content').on('click','.add-website', function(){
		var $this = $(this);
		$this.removeClass('add-website');
		$this.addClass('remove-website');
		$('#'+$this.data('id')).css('display','block');
		

		var notAdded = true;
		var totalSettingsLength = league.pageChange.length;
		for(var i =0; i<totalSettingsLength; i++){
			if(league.pageChange[i].id == $this.data('id')){
				league.pageChange[i].display = 'inline-block';
				notAdded = false;
			}
		}
		if (notAdded){
			league.pageChange[totalSettingsLength] = {
				id : $this.data('id'),
				display : 'inline-block',
			}
		}
		localStorage.setItem('pageChange', JSON.stringify(league.pageChange));
		setTimeout(function(){
			$('#'+$this.data('id')).css('display','inline-block');          
		}, 300);	
	});

	$('#settings-content').on('click','.remove-website', function(){
		var $this = $(this);
		$this.removeClass('remove-website');
		$this.addClass('add-website');
		$('#'+$this.data('id')).css('display','none');

		var notAdded = true;
		var totalSettingsLength = league.pageChange.length;
		for(var i =0; i<totalSettingsLength; i++){
			if(league.pageChange[i].id == $this.data('id')){
				league.pageChange[i].display = 'none';
				notAdded = false;
			}
		}
		if (notAdded){
			league.pageChange[totalSettingsLength] = {
				id : $this.data('id'),
				display : 'none',
			}
		}
		localStorage.setItem('pageChange', JSON.stringify(league.pageChange));
	});

	$('.add-user-website').on('click', function(){
		var totalPages = league.pageAdd.length
		var previousEntry = (totalPages>0)?((league.pageAdd[totalPages-1].id)+1):totalPages;
		var iframeResult = $('.user-website-iframe').is(':checked')?true:false;
		league.pageAdd[totalPages] = {
			name: $('.user-website-name').val(),
			id: previousEntry,
			href: $('.user-website-url').val(),
		}
		if(iframeResult){
			league.pageAdd[totalPages].iframe = true;
		}

		localStorage.setItem('pageAdd', JSON.stringify(league.pageAdd));
		
		$('.iframe-tester').html('');
		$('.user-website-name').val('');
		$('.user-website-url').val('');

		var addWebsite = Handlebars.compile($('#new-website-template').html());
		$("#miscbuttons ul").append( addWebsite(league.pageAdd[totalPages]));

		var addWebsiteSettings = Handlebars.compile($('#remove-website-template').html());
		$(".general-websites").append( addWebsiteSettings(league.pageAdd[totalPages]));
		
	});

	$('.test-user-website').on('click', function(){
		var $userUrl = $('.user-website-url').val();
		if($userUrl.length>0){
			$('.iframe-tester').html('<iframe src="'+$userUrl+'" style="width:300px;height:400px;border:none;padding:none;margin:none"><p>Your browser does not support iframes.</p></iframe>');
		}
	});

	$('#settings-content').on('click','.remove-user-website', function(){
		var $this = $(this);
		$this.parent().fadeOut();
		$('#'+$this.data('id')).css('display','none');

		var index;
		for (var i = 0; i<league.pageAdd.length; i++){
			if(league.pageAdd[i].id == $this.data('id')){
				index = i;
			}
		}
		if(index>-1){
			league.pageAdd.splice(index,1);
		}
		
		localStorage.setItem('pageAdd', JSON.stringify(league.pageAdd));
	});


	$('.settings-update').on('click', function(){
		web.saveSettings();
		$(this).addClass('setting-updated');
		$(this).attr('value','Settings Updated');
	});
	
	$(".redditNewTab, .twitchVisualNotifications, .twitchAudioNotifications, .eSportsNotifications, .defaultNameLink, .defaultChampLink, .smartEnter, .newWindow").on('change', function(){
		$('.settings-update').removeClass('setting-updated');
		$('.settings-update').attr('value','Update Settings');
	});

	


//////////////////////////////////
//////// Infinite Scrolling Event Area ///////
/////////////////////////////////

	var stopRepeating = 1; // this stops multiple retrievals for json if user scrolls

	$(window).on('scroll', function(){
		if ($(window).scrollTop() >= ($(document).height() - $(window).height())-200){
		
			if($("#reddit-content").css('display')!='none'){
				
				if(reddit.redditCount!=reddit.redditThreads.length){
					reddit.mainPage();
				} else{
					if(reddit.nextPageReddit == null){
						$("#reddit-progress").html('<p>Sorry all out of reddit threads for now</p>');
					}
					else if(stopRepeating == 1){
						stopRepeating = 0;

						reddit.getThreads('reddit',reddit.currentRedditSettings[1],reddit.currentRedditSettings[2],reddit.currentRedditSettings[3],reddit.nextPageReddit).done(function() {
							reddit.mainPage();	
							stopRepeating = 1;	
						});
					}
				}
			}


			if($("#youtube-content").css('display')!='none'){

				if(reddit.youtubeCount!=reddit.youtubeVids.length){
					reddit.youtubeArea();
				} else{	


					if(reddit.nextPageYoutube == null){
						$("#youtube-progress").html('<p>Sorry all out of reddit threads for now</p>');
					}
					else if(stopRepeating == 1){
						stopRepeating = 0;
						
						reddit.getThreads('youtube',reddit.currentYoutubeSettings[1],reddit.currentYoutubeSettings[2],reddit.currentYoutubeSettings[3],reddit.nextPageYoutube).done(function() {
							reddit.youtubeArea();
							stopRepeating = 1;	
						});
					}
				}		
			}
		}
	});

/////////////////////////////////////////////
//////// Navigation System Event Area ///////
////////////////////////////////////////////
	
	$("#youtube").on('click',function(e){
		if(e.which !== 2){
			var dataName = $(this).data('name');
			history.pushState("", "", "#" + dataName);
			e.preventDefault();

			if(web.youtubeInUse == 'no' || ((parseInt(localStorage.getItem('youtubeLastRetrieved')) + 1000*60*30) <= Date.now())){
				if(typeof reddit.redditAjaxRequest !== 'undefined'){
					if(reddit.redditAjaxRequest && reddit.redditAjaxRequest.readyState != 4){
			            reddit.redditAjaxRequest.abort();
			            if(reddit.redditThreads.length == 0){
			            		web.redditInUse = 'no';
			            }
			        }
			    }
				reddit.currentYoutubeSettings[0] = 'youtube';
				reddit.getThreads(reddit.currentYoutubeSettings[0],reddit.currentYoutubeSettings[1],reddit.currentYoutubeSettings[2],reddit.currentYoutubeSettings[3],reddit.nextPageYoutube).done(function() {
					reddit.youtubeArea();
					if($(window).height() > 1080){
						reddit.youtubeArea();
					}
				});
				web.youtubeInUse = 'yes';
			} else if(web.youtubeInUse == 'contentAvailable'){
				reddit.youtubeArea();
				if($(window).height() > 1080){
						reddit.youtubeArea();
				}	
			}
			$("#iframe-holder").html(' ');
			$("header").css('height','100px');
			$("#youtube-content").css("display","block");
			$("#reddit-content").css("display","none");
			$("#twitch-content").css("display","none");
			$("#settings-content").css("display","none");	
		}
	});


	$("#twitch").on('click',function(e){
		if(e.which !== 2){
			if((parseInt(localStorage.getItem('streamsLastRetrieved')) + 1000*60*8) <= Date.now()){
				streamEvents();
			}
			$(window).scrollTop(0);
			$("#iframe-holder").html(' ');
			$("header").css('height','28px');
			$("#twitch-content").css("display","block");
			$("#reddit-content").css("display","none");
			$("#youtube-content").css("display","none");
			$("#settings-content").css("display","none");
			var dataName = $(this).data('name');
			history.pushState("", "", "#" + dataName);
			e.preventDefault();
		}
	});


	$("#settings").on('click',function(e){
		if(e.which !== 2){
			$(window).scrollTop(0);
			$("#iframe-holder").html(' ');
			$("header").css('height','28px');
			$("#twitch-content").css("display","none");
			$("#reddit-content").css("display","none");
			$("#youtube-content").css("display","none");
			$("#settings-content").css("display","block");
			web.setSettings();
			$('.settings-update').removeClass('setting-updated');
			$('.settings-update').attr('value','Update Settings');

			var dataName = $(this).data('name');
			history.pushState("", "", "#" + dataName);
			e.preventDefault();
		}
	});
	
	

	$("#reddit").on('click',function(e){
		if(e.which !== 2){
			
			var dataName = $(this).data('name');
			history.pushState("", "", "#" + dataName);
			e.preventDefault();

			if(web.redditInUse == 'no' || ((parseInt(localStorage.getItem('redditLastRetrieved')) + 1000*60*30) <= Date.now())){
				$("#reddit-threads").html(' ');
				$("#reddit-progress").html('<img src="assets/img/loader.gif" />');

				
				reddit.currentRedditSettings['reddit','leagueoflegends','hot',null];
				reddit.redditThreads = [];
				reddit.redditCount = 0;
				reddit.nextPageReddit = null;

				reddit.getThreads(reddit.currentRedditSettings[0],reddit.currentRedditSettings[1],reddit.currentRedditSettings[2],reddit.currentRedditSettings[3],reddit.nextPageReddit).done(function() {
			 		reddit.mainPage();	
			 	});
				web.redditInUse = 'yes';

			}
		
		$("#iframe-holder").html(' ');
		$("header").css('height','100px');
		$("#reddit-content").css("display","block");
		$("#youtube-content").css("display","none");
		$("#twitch-content").css("display","none");
		$("#settings-content").css("display","none");
		}
	});


/////////////////////////////////////////////
//////// Sidebar Specific Events ///////
////////////////////////////////////////////
	
	$(".nav-expand").on('click', function(){
		var $sidebar = $('#sidebar');

		if($sidebar.css('display') == 'none'){
			if(detectmob()){
				$sidebar.slideDown();
				$(window).scrollTop(0);

			} else {
				
				$sidebar.css('display','block');
				$('#main-content, #iframe-holder').css('margin-left','335px');
				$(this).css('left','335px');
				web.changeTwitchDimensions();
			}

		} else {
			if(detectmob()){
				if( $(window).scrollTop() <= $sidebar.height() + 20){
					$sidebar.slideUp();
				}  
				$(this).css('left','50%');
				$('body,html').animate({
					scrollTop: 0
				}, 400);
			} else {
				
				$sidebar.css('display','none');
				$('#main-content, #iframe-holder').css('margin-left','0px');
				$(this).css('left','0px');
				web.changeTwitchDimensions();
			}
		}
		
	});	

	$('input').on('keydown', function(e){
   		e.stopPropagation();
	});

	var timerName;

	$(".name").on('keyup', function(e){
		league.account($(".name").val(), $(".server").val())
		var keycode = (e.keyCode ? e.keyCode : e.which);
    	
    	clearTimeout(timerName);

		timerName = setTimeout(function(){
			$(".website-name li:not(.selected-link)").animate({'backgroundColor': '#303033','color':'#939393'},150)
									.animate({'opacity':'1'},120)
									.animate({'backgroundColor': '#262729','color':'#5e5e5e'},{duration:400, complete: function(){
										$(this).attr('style', ' ');
									}
			});          
		}, 375);

    	if(keycode == '13') {
    		clearTimeout(timerName);
    		if(web.checkIfBelongs('.website-name') && appSettings[6].settingChoice == 'on'){
    			if(detectmob()){
    					window.location.replace(web.checkIfBelongs('.website-name'));
    				} else {
    					web.makeIframe(web.checkIfBelongs('.website-name'));
    				}
    		} else {
    			var $id = $("#"+appSettings[4].settingChoice);
    			if(detectmob()){
    					window.location.replace($id.attr('href'));
    			} else {
	    			web.makeIframe($id.attr('href'));
	    			$(".nav-button li").removeClass('selected-link');
					$id.children('li').addClass('selected-link');
					history.pushState("", "", "#" + $id.data('name'));
				}
    		}
    	}
	});


	$(".server").on('change', function(){
		league.account($(".name").val(), $(".server").val());
			$(".website-name li:not(.selected-link)").animate({'backgroundColor': '#303033','color':'#939393'},150)
										.animate({'opacity':'1'},120)
										.animate({'backgroundColor': '#262729','color':'#5e5e5e'},{duration:400, complete: function(){
											$(this).attr('style', ' ');
											clickedPreviously = false;
										}});		
	});


	$(".champ-list").on('click', function () {
		league.champion($(".champ").val())
		league.dropDownTemplate($(".champ").val());
       $('.champ-list-entry > #champ-drop').not($(this).children("#champ-drop")).hide();
        $(this).children("#champ-drop").toggle();
    });


	$(".champ").on('click', function(){
		$("#champ-drop").css("display","block");
		league.champion($(this).val());
		league.dropDownTemplate($(this).val());
	});


	$(".champ").on('keyup', function(e){
		var $champInputValue = $(this).val();
		var comparisonChamp = new RegExp($champInputValue,"i");
		var keycode = (e.keyCode ? e.keyCode : e.which);

    	if(keycode == '13') {
			var champText = $("#champ-drop .champ-list-entry .champ-text").first().text(); 
			if(champText.length>0){ $(this).val(champText) }; 
			$("#champ-drop").fadeOut();
			league.champion($(this).val());

			if(web.checkIfBelongs('.website-champ') && appSettings[6].settingChoice == 'on'){

				if(detectmob()){
					window.location.replace(web.checkIfBelongs('.website-champ'));
				} else {
					web.makeIframe(web.checkIfBelongs('.website-champ'));
				}

			} else {
				var $id = $("#"+appSettings[5].settingChoice)

				if(detectmob()){
					window.location.replace($id.attr('href'));
				} else {
    				web.makeIframe($id.attr('href'));
    				$(".nav-button li").removeClass('selected-link');
					$id.children('li').addClass('selected-link');
					history.pushState("", "", "#" + $id.data('name'));
				}
			}
    	} else{
	    	league.dropDownTemplate($champInputValue);
			$("#champ-drop").css("display","block");

			$("#champ-drop .champ-list-entry .champ-text").each(function () {
	      	var $this = $(this),
	            text = $this.html(),
	            first = text.slice(0, $champInputValue.length),
	            rest = text.slice($champInputValue.length);
	      		$this.html("<span style='color:#f0e863'>" + first + "</span>" + rest);

			});

			league.champion($champInputValue);
		
			for(var i = 0; i<league.championList.length; i++){
				if(league.championList[i].name.match(comparisonChamp) && (league.championList[i].name.length == $champInputValue.length)){
					$("#champ-drop .champ-list-entry").css({"background-color" : "#666",
						"border" : "2px solid black"});
					setTimeout(function(){
						$("#champ-drop").fadeOut();

						$(".website-champ li:not(.selected-link)").animate({'backgroundColor': '#303033','color':'#939393'},150)
							.animate({'opacity':'1'},120)
							.animate({'backgroundColor': '#262729','color':'#5e5e5e'},{duration:400, complete: function(){
								$(this).attr('style', ' ');
							}});          
					}, 100);
				} 
			}

    	}
	});


	$("#champ-drop").on('click', '.champ-list-entry', function(){
		var $inputName = $(this).data("name");
		$(".champ").val($inputName);

		$(".website-champ li:not(.selected-link)").animate({'backgroundColor': '#303033','color':'#939393'},150)
									.animate({'opacity':'1'},120)
									.animate({'backgroundColor': '#262729','color':'#5e5e5e'},{duration:400, complete: function(){
										$(this).attr('style', ' ');
									}
			});
	});

////////////////////////////////////////
//////// Sidebar iframe events  ///////
///////////////////////////////////////

	$("#sidebar-content").on('click','.iframe-capable', function(e){

		if(e.which !== 2){
			if(!detectmob()){
				$("#main-content").fadeOut();

				var url = $(this).attr('href');
				var dataName = $(this).data('name');

				web.makeIframe(url);

				history.pushState("", "", "#" + dataName);
				e.preventDefault();
			}
		}
	});

	$(".no-iframe").on('click', function(e){
		if(e.which !== 2){
			$("#main-content").css("display","block");
			$("#iframe-holder").css("display","none");
		}
	});



////////////////////////////////////////
//////// General Global Events  ///////
///////////////////////////////////////

	
	$( window ).resize(function() {
		web.changeIframeHeight();
		web.changeTwitchDimensions();
		web.registerScreen();
	});

	/////// controls up to top button
	$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

	$('#back-top a').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 700);
		return false;
	});


////////////////////////////////////////
//////// Misc Events            ///////
///////////////////////////////////////

	$("#reddit, #youtube, #twitch, #settings").on('click', function(){
		if(detectmob()){
			$('#sidebar').slideUp();
		}
	});

	$(".nav-button").on('click', function(e){
		if(e.which !== 2){
			$(".nav-button li").removeClass('selected-link');
			$(this).children('li').addClass('selected-link');
		}
	});

	$('.tooltip').tipsy({gravity: 'w'});
	$('.settings-tooltip').tipsy({gravity: 'e'});

	$(window).unload(function() {
    	localStorage.setItem('sessionActive','no');
	});

});