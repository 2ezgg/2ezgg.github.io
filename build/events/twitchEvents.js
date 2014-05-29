function streamEvents(){

  if ( (currentUrl.match(/back/i)) && ((parseInt(localStorage.getItem('streamsLastRetrieved')) + 1000*60*20) >= Date.now()) ){
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
    if(appSettings['eSportsNotifications']=='on'){
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

      if((streams.streamFunctionCount>0)&&(appSettings['twitchVisualNotifications']=='on' || appSettings['twitchAudioNotifications']=='on')){
        streams.favouriteStreamerMessage(pastAzubFav, pastTwitchFav);
        streams.recentlyAddedTwitch = [];
        streams.recentlyAddedAzub = [];
      }

      streams.offlineTwitchStreamers();
      streams.pushTwitchStreamers();

      if((streams.streamFunctionCount > 0) && streams.currentStreamOnline()){
        // do nothing - prevents refreshing of streams that are currently online
      } else if((streams.streamFunctionCount > 0) && streams.currentStreamViewers<40){
        // do nothing - prevents smaller streams from being refreshed if they don't make the top 12 after refresh
      } else if(!window.location.href.match('/twitchstreams/i')) {
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
      streams.topTwitchUrl = 'https://api.twitch.tv/kraken/streams?game=League%20of%20Legends&limit=12&offset=0';
      streams.topTwitchOnline(true).done(function() {
        streams.pushTopTwitchStreamers();
        if(appSettings['eSportsNotifications']=='on'){
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
setInterval(streamEvents, 1000*60*20);

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
  $this.after('<span class="favourited-streamer tooltip-left" original-title="You have this streamer favourited">&lt;3</span>');
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
    streams.submitStreamer($(".champ-addition").val(), $(".stream-website").val());
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
  $this.prev().html('<iframe frameborder="0" id="chat_embed" src="http://twitch.tv/chat/embed?channel='+streamerName+'&popout_chat=true" height="100%" width="300"></iframe>')
  $this.addClass('close-twitch-chat');
  }

  web.changeTwitchDimensions();
});

$("#view-more-streams").on('click', function(){
   streams.topTwitchOnline().done(function() {
      streams.pushTopTwitchStreamers(true);
      if(appSettings['eSportsNotifications']=='on'){
        streams.pushStreamsHeader();
      }
      $('.tooltip-left').tipsy({gravity: 'e'});
      $('.tooltip-viewers').tipsy({gravity: 'w'});
      $('.tooltip-center').tipsy({gravity: 'n'});
    });
});

$('#top-header-message').on('click','.close-riot, .close-favourite', function(){
  $(this).parent().fadeOut(function() {
    var $topHeader = $('#top-header-message');

      if( $topHeader.height() == 0){
        $topHeader.css('padding','0px');
      }
  });
});
