function tabSystem(){
  var theUrl = currentUrl();
  if(theUrl.match(/youtubevideos/i) || ( appSettings.ezHomePage === 'youtube' && web.homePage())){

    ///////////////////// if page back button is pressed
    $("#iframe-holder").html(' ').css("display","none");
    $("#main-content").css("display","block");
    $("header").css({'height':'100px','display':'block'});
    $("#youtube-content").css("display","block");
    $("#reddit-content").css("display","none");
    $("#twitch-content").css("display","none");
    $("#settings-content").css("display","none");
    /////////////////////

    $("a[data-name='youtubevideos'] li").addClass('selected-link');
    reddit.getThreads(reddit.currentYoutubeSettings[0],reddit.currentYoutubeSettings[1],reddit.currentYoutubeSettings[2],reddit.currentYoutubeSettings[3],reddit.nextPageYoutube).done(function() {
      reddit.youtubeArea();
      reddit.mainPage();
      if($(window).height() > 1080){
        reddit.youtubeArea();
      }
    });
    web.twitchInUse = 'no';
  } else if (theUrl.match(/settings/i)){
    $("#iframe-holder").html(' ').css("display","none");
    $("#main-content").css("display","block");
    $("header").css({'height':'28px','display':'block'});
    $("#youtube-content").css("display","none");
    $("#reddit-content").css("display","none");
    $("#twitch-content").css("display","none");
    $("#settings-content").css("display","block");
    $("a#settings li").addClass('selected-link');

    reddit.getThreads(reddit.currentRedditSettings[0],reddit.currentRedditSettings[1],reddit.currentRedditSettings[2],reddit.currentRedditSettings[3],reddit.nextPageReddit).done(function() {
      reddit.mainPage();
      web.youtubeInUse = 'contentAvailable';
    });
    web.twitchInUse = 'no';
    web.youtubeInUse = 'no';


  } else if (theUrl.match(/twitchstreams/i) || ((appSettings.ezHomePage === 'twitch') && web.homePage()) ){
    ///////////////////// if page back button is pressed
    $("#iframe-holder").html(' ').css("display","none");
    $("#main-content").css("display","block");
    $("header").css({'height':'28px','display':'block'});
    $("#youtube-content").css("display","none");
    $("#reddit-content").css("display","none");
    $("#settings-content").css("display","none");
    $("#twitch-content").css("display","block");
    /////////////////////

    $("#twitch-content").css( "display", "block" );
    $("a[data-name='twitchstreams'] li").addClass('selected-link');
    web.youtubeInUse = 'no';
    web.redditInUse = 'no';

  } else if(web.checkIfBelongs() || (appSettings.ezHomePage !== 'redditthreads' && web.homePage()) ){
    if(!detectmob() || appSettings.newWindow === 'off'){
      var url;
      if(web.homePageAccessed){
        url = $("#"+appSettings.ezHomePage).attr('href');
        $("a#"+appSettings.ezHomePage+' li').addClass('selected-link');
      } else {
        
        league.name = league.getUrlParams('name') || localStorage.getItem('name');
        league.server = league.getUrlParams('server') || localStorage.getItem('server');
        league.champ = league.getUrlParams('champ') || localStorage.getItem('champ');

        league.account(league.name, league.server, true);
        league.champion(league.champ);

        url = web.checkIfBelongs(null, true);

      }
      $("#iframe-holder").css("display","block");
      web.makeIframe(url);
    } 

    web.youtubeInUse = 'no';
    web.redditInUse = 'no';
    web.twitchInUse = 'no';

  } else {
    $("a[data-name='redditthreads'] li").addClass('selected-link');
    web.enableRedditStyleSheet();
    if ( theUrl.match(/back/i) && ((parseInt(localStorage.getItem('redditLastRetrieved')) + 1000*60*60) >= Date.now()) ){

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
      },3755);

      $(".subreddit-setting").removeClass('setting-chosen');
      $(".subreddit-"+reddit.currentRedditSettings[1]+" ").addClass('setting-chosen');

      $('.dropdown-subreddit').val(reddit.currentRedditSettings[1]);

      if(reddit.currentRedditSettings[3] !== null){
        $('.dropdown-reddit-options').val(reddit.currentRedditSettings[2]+reddit.currentRedditSettings[3]);
      } else {
        $('.dropdown-reddit-options').val(reddit.currentRedditSettings[2]);
      }

      if((reddit.currentRedditSettings[0] !== null)&&(reddit.currentRedditSettings[2] != 'hot')){
        $(".reddit-setting").removeClass('setting-chosen');
        $("."+reddit.currentRedditSettings[3]+reddit.currentRedditSettings[2]+"-reddit").addClass('setting-chosen');
      }

      web.youtubeInUse = 'no';
      web.redditInUse = 'no';
      web.twitchInUse = 'no';

    } else{
      reddit.getThreads(reddit.currentRedditSettings[0],reddit.currentRedditSettings[1],reddit.currentRedditSettings[2],reddit.currentRedditSettings[3],reddit.nextPageReddit).done(function() {
        reddit.mainPage();
        web.youtubeInUse = 'contentAvailable';
      });
      web.twitchInUse = 'no';
      web.youtubeInUse = 'no';

    }
    reddit.displayAbout();
    ///////////////////// if page back button is pressed
    $("#iframe-holder").html(' ').css("display","none");
    $("#main-content").css("display","block");
    $("header").css({'height':'100px','display':'block'});
    $("#youtube-content").css("display","none");
    $("#reddit-content").css("display","block");
    $("#settings-content").css("display","none");
    $("#twitch-content").css("display","none");
    /////////////////////
  }
}

// Session Management - needs work
var sessionActive = 'no';
window.onpopstate = function(event){
  if(sessionActive == 'yes'){
    $(".nav-button li").removeClass('selected-link');
   
    if(web.youtubeInUse == 'yes'){
      $("#youtube-threads").html(' ');  
      reddit.youtubeVids = [];
      reddit.youtubeCount = 0;
      reddit.currentYoutubeSettings = [null,'leagueoflegends','hot',null];
      reddit.nextPageYoutube = '';
      web.youtubeInUse = 'no';
    }

    tabSystem();
    web.tabSystemProcessed = 1;
  }
};
if(web.tabSystemProcessed === 0){
  tabSystem();
  // pretty hacky thing that should be fixed properly
  setTimeout(function(){
    sessionActive = 'yes';
  }, 200);
}
