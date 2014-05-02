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
