var currentUrl = function(){
  return window.location.href;
}; 
var league = new LeagueLinks();
var streams = new StreamChannels();
var reddit = new RedditLol();
var web = new WebInterface();

web.registerScreen();
web.rearangeSidebar();
web.saveSidebar('all');
web.testIfSearchShouldBeShown();
web.setSettings();