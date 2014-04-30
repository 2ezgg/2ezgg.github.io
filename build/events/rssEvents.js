function rssEvents(){
    var $rssCapableLinks = $(".rss-capable");

    for(var t = 0; t<$rssCapableLinks.length; t++){
      var dataName = $rssCapableLinks.eq(t).data('name');

      if($("#"+dataName).css('display')!='none'){
        league.rssAlerts(dataName);
      }
    }
}

rssEvents();
setInterval(rssEvents, 1000*60*25);
// use getItem so that if someone has clicked on a rss link in another window it doesn't resset all the other ones
// need to get it working for middle click
$(".rss-capable").on('click', function(e){
  var $this = $(this);
  $this.children("li").children(".update-info").fadeOut();
  var feedId = $this.data('index');
  league.rssFeeds = JSON.parse(localStorage.getItem('rssFeeds'));
  league.rssFeeds[feedId] = Date.now();
  localStorage.setItem('rssFeeds',JSON.stringify(league.rssFeeds));
});
