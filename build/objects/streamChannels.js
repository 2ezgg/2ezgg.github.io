function StreamChannels(){
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
  this.recentlyAddedAzub = [];
  this.recentlyAddedTwitch = [];

  /// refers to ajax requests and total function calls
  this.currentStreamDisplayed = null;
  this.currentStreamViewers = null;
  this.streamFunctionCount = 0;

  this.noStreamersAdded = (this.streamers.length == 0)?true:false;
}

StreamChannels.prototype.submitStreamer = function(newStreamers, streamerType){
  var streamSource;
  var input = '';
  var newStreamers = newStreamers.trim();

  if (newStreamers){
    if(streamerType =='azubu'){
      input = newStreamers.replace(/((.*?:\/\/)|beta.azubu.tv\/)|(\s)/gi, "").toLowerCase();
      streamSource = 'azubu';
    } else {
      streamSource = 'twitch';
      input = newStreamers.replace(/((.*?:\/\/)|www.twitch.tv\/)|(\s)/gi, "").toLowerCase();
    }

    if(input){

      var noStreamerMatch = true;

      for(var i=0;i<this.streamers.length;i++){
        if(this.streamers[i].name == input){
          noStreamerMatch = false;
          break;
        }
      }

      if(noStreamerMatch){

        this.streamers[this.streamers.length] = {
          name: input,
          service: streamSource
        }

        if(streamSource=='twitch'){
          this.recentlyAddedTwitch.push(input);
        } else {
          this.recentlyAddedAzub.push(input);
        }
      }

      localStorage.setItem('streamers', JSON.stringify(this.streamers));
      this.noStreamersAdded = (this.streamers.length == 0)?true:false;
      return true;
    }
  }

  return false;
}



StreamChannels.prototype.onlineTwitchStreamers = function(){
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


StreamChannels.prototype.getAzubuStreamers = function(){
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
                if (data[i].Name.toLowerCase() == self.streamers[t].name.toLowerCase()){
                  accountFollowed = true;
                  break;
                }
              }

              self.topAzubuStreamersOnline[totalOnlineCount] = {
                name: data[i].Name,
                count: totalOnlineCount,
                viewTotal: data[i].Viewer,
                online: true,
                isAlreadyAdded: accountFollowed
              }
              totalOnlineCount ++;

              for(var y = 0;y<self.streamers.length;y++){
                if (self.streamers[y].name.toLowerCase() == data[i].Name.toLowerCase()){
                  self.azubuStreamersOnline[onlineCount] = {
                    name: data[i].Name,
                    viewTotal: data[i].Viewer,
                    online: true,
                  }
                  onlineCount ++;
                  self.totalStreamersOnline ++;
                }
              }


            } else {
              for(var z = 0;z<self.streamers.length;z++){
                if (self.streamers[z].name.toLowerCase() == data[i].Name.toLowerCase()){
                  self.azubuStreamersOffline[offlineCount] = {
                    name: data[i].Name,
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


StreamChannels.prototype.topTwitchOnline = function(numberOfOnline){
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
                break;
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


StreamChannels.prototype.offlineTwitchStreamers = function(){
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


StreamChannels.prototype.removeStreamer = function(deleteStreamer){
  var input = deleteStreamer.toString().toLowerCase();
  //check if I can get rid of toLowerCase!!

  if(input){

    for (var i=0; i<this.streamers.length; i++) {
      if(this.streamers[i].name.toLowerCase() == input.toLowerCase()){
        this.streamers.splice(i, 1);
      }
    }

    localStorage.setItem('streamers', JSON.stringify(this.streamers));
    this.noStreamersAdded = (this.streamers.length == 0)?true:false;
    return true;
  }

  return false;

}

StreamChannels.prototype.pushTwitchStreams = function(twitchNumber, twitchType, twitchObj){
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

StreamChannels.prototype.pushStreamsHeader = function(){
  var self = this;

    for(var i = 0; i<self.topTwitchStreamersOnline.length; i++){
      if (self.topTwitchStreamersOnline[i].name == 'riotgames' && appSettings['eSportsNotifications'] == 'on'){
        var riotTemplate = Handlebars.compile($('#riot-online-message-template').html());
        $("#riot-online").html(riotTemplate());
        $('#top-header-message').css('padding','14px');
      }

    }

}

StreamChannels.prototype.pushTwitchStreamers = function(favourite, azubu){
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

StreamChannels.prototype.pushAzubuStreamers = function(favourite){
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


StreamChannels.prototype.pushTopStreamerOnline = function(topStreamerName, addAccount, addStream){
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

StreamChannels.prototype.pushTopTwitchStreamers = function(){
  var self = this;
  var onlineTemplate = Handlebars.compile($('#twitch-top-online-template').html());

    $("#twitch-top-streamers").html( onlineTemplate(self.topTwitchStreamersOnline) );

}

StreamChannels.prototype.currentStreamOnline = function(){
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

StreamChannels.prototype.pushTopTwitchStreamers = function(){
  var self = this;
  var onlineTemplate = Handlebars.compile($('#twitch-top-online-template').html());

    $("#twitch-top-streamers").html( onlineTemplate(self.topTwitchStreamersOnline) );
}

StreamChannels.prototype.favouriteStreamerMessage = function(favAzubu, favTwitch){

    var totalAdditions = 0;
    this.newAdditions = [];

    for(var i = 0; i<this.azubuStreamersOnline.length; i++){

      var alreadyAddedAzub = false;

      for(var y=0;y<favAzubu.length;y++){
        if(favAzubu[y].name == this.azubuStreamersOnline[i].name){
          alreadyAddedAzub = true;
          break;
        }
      }

      if(!alreadyAddedAzub){
        var summonerRecentlyAddedAzub = false;
        for(var z=0;z<this.recentlyAddedAzub.length;z++){
          if(this.recentlyAddedAzub[z]==this.azubuStreamersOnline[i].name){
            summonerRecentlyAddedAzub = true;
            break;
          }
        }
        if(!summonerRecentlyAddedAzub){
          this.newAdditions[totalAdditions] = {
            name:this.azubuStreamersOnline[i].name,
            id:this.azubuStreamersOnline[i].id,
            azubu:true,
          }
          totalAdditions ++;
        }
      }

    }


    for(var t = 0; t<this.twitchStreamersOnline.length; t++){
      var alreadyAddedTwitch = false;

      for(var v=0;v<favTwitch.length;v++){
        if(favTwitch[v].name == this.twitchStreamersOnline[t].name){
          alreadyAddedTwitch = true;
          break;
        }
      }

      if(!alreadyAddedTwitch){
        var summonerRecentlyAddedTwitch = false;
        for(var z=0;z<this.recentlyAddedTwitch.length;z++){
          if(this.recentlyAddedTwitch[z]==this.twitchStreamersOnline[t].name){
            summonerRecentlyAddedTwitch = true;
            break;
          }
        }
        if(!summonerRecentlyAddedTwitch){
          this.newAdditions[totalAdditions] = {
            name:this.twitchStreamersOnline[t].name,
            id:null,
            twitch:true,
          }
          totalAdditions ++;
        }
      }
    }

    if(totalAdditions>0){
      if(appSettings['twitchAudioNotifications'] == 'on'){
        $("#sound").html('<audio controls autoplay style="display:none"><source src="assets/sound/notify.mp3" hidden="true" autostart="true" loop="false" type="audio/mpeg"></audio>');
      }

      if(appSettings['twitchVisualNotifications'] == 'on'){
        var favouriteTemplate = Handlebars.compile($('#streamer-online-message-template').html());
        $("#favourite-online").html( favouriteTemplate(this.newAdditions) );
        $('#top-header-message').css('padding','14px');

      }
    }

}
