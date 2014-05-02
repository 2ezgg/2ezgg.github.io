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
    $("header").css({'height':'100px','display':'block'});
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
    $("header").css({'height':'28px','display':'block'});
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
    $("header").css({'height':'28px','display':'block'});
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



$("#redditthreads").on('click',function(e){
  if(e.which !== 2){
    web.enableRedditStyleSheet();

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
  reddit.displayAbout();
  $("#iframe-holder").html(' ');
  $("header").css({'height':'100px','display':'block'});
  $("#reddit-content").css("display","block");
  $("#youtube-content").css("display","none");
  $("#twitch-content").css("display","none");
  $("#settings-content").css("display","none");
  }
});
