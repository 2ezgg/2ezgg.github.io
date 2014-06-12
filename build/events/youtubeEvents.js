$(".youtube-setting").on('click', function(){
  var $this = $(this);

  $("#youtube-threads").html(' ');
  $("#youtube-progress").html('<img src="assets/img/loader.gif" />');

  $('.dropdown-youtube-options').val($this.data('type')+$this.data('duration'));

  if(typeof reddit.redditAjaxRequest !== 'undefined'){
    if(reddit.redditAjaxRequest && reddit.redditAjaxRequest.readyState != 4){
            reddit.redditAjaxRequest.abort();
            if(reddit.redditThreads.length === 0){
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
