var $redditContent = $("#reddit-content");

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
            if(!reddit.youtubeVids.length){
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
              if(!reddit.youtubeVids.length){
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
              if(!reddit.youtubeVids.length){
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
  if(appSettings.redditNewTab === 'on'){
    $(this).attr('target','_blank');
  } else{
    $(this).attr('target','_self');

    if($('#sidebar').css('display') == 'none'){
      localStorage.setItem('sidebarOpen', 'none');
    } else {
      localStorage.setItem('sidebarOpen', 'block');
    }

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
              if(!reddit.youtubeVids.length){
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
