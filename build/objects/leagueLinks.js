function LeagueLinks(){

  this.linkFactory = new LinkFactory();
  this.name = this.getUrlParams('name') || localStorage.getItem('name') || '';
  this.server = this.getUrlParams('server') || localStorage.getItem('server') || 'na';
  this.champ = this.getUrlParams('champ') || localStorage.getItem('champ') || '';
  this.rssFeeds = JSON.parse(localStorage.getItem('rssFeeds')) || [];
  this.oldDate = localStorage.getItem('date') || 0;
  this.oldDate = parseInt(this.oldDate);
  localStorage.setItem('date', Date.now());

  this.lolNewsServer = '';
  this.lolWebsiteLocation(true);
  this.linkFactory = new LinkFactory();

  if (this.name) {
    $(".name").val(this.name);
    $(".server").val(this.server);
    this.nameLink();
  }

  if (this.champ) {
    $(".champ").val(this.champ);
    this.champLink();
  }
};

LeagueLinks.prototype.getUrlParams = function( name ){
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.href);
  if(results == null){
      return null;
    } else {
      return decodeURIComponent(results[1]);
  }
}

LeagueLinks.prototype.account = function(nameUpdate, serverUpdate, stopReplacement){
  if(nameUpdate != null){
    this.name = nameUpdate;
    if(!stopReplacement || (stopReplacement && localStorage.getItem('name') == null)){
      localStorage.setItem('name',this.name);
    }
  }
  if(serverUpdate){
    this.server = serverUpdate;
    if(!stopReplacement || (stopReplacement && localStorage.getItem('name') == null)){
      localStorage.setItem('server',this.server);
    }
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
  if(champUpdate != null){
    this.champ = champUpdate;
    localStorage.setItem('champ',this.champ);
  }
  if (this.champ) {
    $(".champ").val(this.champ);
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

LeagueLinks.prototype.searchLink = function(){
  var items = $(".website-search");
  var searchQuery = encodeURIComponent($(".searchinput").val());

  for(var i = 0; i < items.length; i++){

    var item = items.eq(i);
    var anchor = item.data('name');

    switch(anchor){
      case 'google':
        item.attr("href", this.linkFactory.getGoogleWebQuery(searchQuery));
        break;
      case 'gimages':
        item.attr("href", this.linkFactory.getGoogleImageQuery(searchQuery));
        break;
      case 'youtubesearch':
        item.attr("href", this.linkFactory.getYouTubeQuery(searchQuery));
        break;
      case 'yahoo':
        item.attr("href", this.linkFactory.getYahooWebQuery(searchQuery));
        break;
      case 'bing':
        item.attr("href", this.linkFactory.getBingWebQuery(searchQuery));
        break;
      case 'wikipedia':
        item.attr("href", this.linkFactory.getWikipediaQuery(searchQuery));
        break;
      case 'wolfram':
        item.attr("href", this.linkFactory.getWolframAlphaQuery(searchQuery));
        break;
    }
  }
}

LeagueLinks.prototype.nameLink = function(){
  var items = $(".website-name");

  for(var i = 0; i < items.length; i++){

    var item = items.eq(i);
    var anchor = item.data('name');

    switch(anchor){
      case 'nexus':
        item.attr("href", this.linkFactory.getLolNexusSummonerLink(this.server, this.name));
        break;
      case 'kassad':
        item.attr("href", this.linkFactory.getKassadSummonerLink(this.server, this.name));
        break;
      case 'now':
        item.attr("href", this.linkFactory.getLolKingNowSummonerLink(this.server, this.name));
        break;
      case 'summoning':
        item.attr("href", this.linkFactory.getSummoningSummonerLink(this.server, this.name));
        break;
      case 'king':
        item.attr("href", this.linkFactory.getLolKingSummonerLink(this.server, this.name));
        break;
      case 'gg':
        item.attr("href", this.linkFactory.getOPSummonerLink(this.server, this.name));
        break;
      case 'skill':
        item.attr("href", this.linkFactory.getLolSkillSummonerLink(this.server, this.name));
        break;
      case 'summonergameguyz':
        item.attr("href", this.linkFactory.getLolDbSummonerLink(this.name));
        break;
      case 'phant':
        item.attr("href", this.linkFactory.getElophantSummonerLink(this.server, this.name));
        break;
    }
  }
}

LeagueLinks.prototype.champLink = function(){
  var items = $(".website-champ");
  this.champ = this.champ.trim();

  for(var i = 0; i < items.length; i++){

    var item = items.eq(i);
    var anchor = item.data('name');

    switch(anchor){
      case 'champselect':
        item.attr("href", this.linkFactory.getChampSelectChampionLink(this.champ));
        break;
      case 'kingchamp':
        item.attr("href", this.linkFactory.getLolKingChampionLink(this.champ));
        break;
      case 'tsm':
        item.attr("href", this.linkFactory.getTSMChampionLink(this.champ));
        break;
      case 'probuilds':
        item.attr("href", this.linkFactory.getProBuildsChampionLink(this.champ));
        break;
      case 'elo':
        item.attr("href", this.linkFactory.getElophantChampionLink(this.champ));
        break;
      case 'moba':
        item.attr("href", this.linkFactory.getMobaFireChampionLink(this.champ));
        break;
      case 'builder':
        item.attr("href", this.linkFactory.getLolBuilderChampionLink(this.champ));
        break;
      case 'lolpro':
        item.attr("href", this.linkFactory.getLolProChampionLink(this.champ));
        break;
      case 'wikichamp':
        item.attr("href", this.linkFactory.getLolWikiChampionLink(this.champ));
        break;
      case 'leaguepediachamp':
        item.attr("href", this.linkFactory.getLolGamepediaChampionLink(this.champ));
        break;
      case 'champgameguyz':
        item.attr("href", this.linkFactory.getLolDbChampionLink(this.champ));
        break;
      case 'inven':
        item.attr("href", this.linkFactory.getLolInvenChampionLink(this.champ));
        break;
    }
  }
}

LeagueLinks.prototype.championCompare = function(input){
  for (var i=0; i<ChampionList.length; i++) {
      if(ChampionList[i] == input){
        return true;
      }
    }
    return false;
}

LeagueLinks.prototype.dropDownTemplate = function(input){
  var self = this;
  var template = Handlebars.compile($('#champion-template').html());
  if(input.length == 0){
    $("#champ-drop").html( template(ChampionList) );
  } else{
    var matchingChampInfo = [];
    var count = 0;
    var inputExpression = new RegExp("^"+input, "i");
    for(var i = 0;i<ChampionList.length;i++ ){
      if(ChampionList[i].name.match(inputExpression)){
        matchingChampInfo[count] = {
          name: ChampionList[i].name,
                      xpos: ChampionList[i].xpos,
                      ypos: ChampionList[i].ypos,
        }
        count++;
      }
      $("#champ-drop").html( template(matchingChampInfo) );
    }
  }
}

LeagueLinks.prototype.lolWebsiteLocation = function(changeWebsite){
	this.lolNewsServer = this.server;
	if(this.lolNewsServer != 'euw' && this.lolNewsServer != 'eune' && this.lolNewsServer != 'oce' && this.lolNewsServer != 'br' && this.lolNewsServer != 'tr' && this.lolNewsServer != 'ru' && this.lolNewsServer != 'lan' && this.lolNewsServer != 'las'){
		this.lolNewsServer = 'na';
	}
	if(changeWebsite){
		$('#league').attr('href','http://'+this.lolNewsServer+".leagueoflegends.com/news");
	}
}

LeagueLinks.prototype.rssAlerts = function(pageRssId){

  var rssDeferred = $.Deferred();
  var self = this;
  var websiteUrl = '';
  var index;

  if(pageRssId == 'league'){
    websiteUrl = "http://"+this.lolNewsServer+".leagueoflegends.com/rss.xml";
    index = 0;
  } else if (pageRssId == 'reign'){
    websiteUrl = "http://www.reignofgaming.net/news.rss";
    index = 1;
  } else if (pageRssId == 'ongamers'){
    websiteUrl = "http://www.ongamers.com/league-of-legends/6000-2/rss/";
    index = 2;
  } else if (pageRssId == 'surrender'){
    websiteUrl = "http://feeds.feedburner.com/surrenderat20/CqWw?format=xml";
    index = 3;
  } else if (pageRssId == 'cloth'){
    websiteUrl = "http://cloth5.com/feed/";
    index = 4;
  } else if (pageRssId == 'esex'){
    websiteUrl = "http://esportsexpress.com/category/league-of-legends/feed/";
    index = 5;
  } else if (pageRssId == 'newslegend'){
    websiteUrl = "http://www.newsoflegends.com/index.php/feed/";
    index = 6;
  }

  $.ajax({
    type: "GET",
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(websiteUrl),
    dataType: 'json',
    error: function(){
      console.log('Unable to load'+pageRssId+'feed');
    },
    success: function(data){
      self.rssFeeds = JSON.parse(localStorage.getItem('rssFeeds')) || [];
      if (self.rssFeeds[index] == undefined || self.rssFeeds[index] == null || ((pageRssId == appSettings['ezHomePage']) && (window.location.href == window.location.origin + "/")) ){
        if (self.oldDate == 0 ){
          self.rssFeeds[index] = 2000;
        } else {
          self.rssFeeds[index] = Date.now();
        }
        localStorage.setItem('rssFeeds',JSON.stringify(self.rssFeeds));
      }
      var values = data.responseData.feed.entries;
      var totalAdditions = 0;
      for (var i=0;i<values.length;i++){
        var dateOfArticle = new Date(values[i].publishedDate).getTime();
        if (dateOfArticle > self.rssFeeds[index]){
          totalAdditions++;
        }
      }
      if(totalAdditions){
        if(totalAdditions > 5){
          $("."+pageRssId+"-news").css( "display", "inline" ).html("5<span class='lighter'>+</span>");
        } else{
          $("."+pageRssId+"-news").css( "display", "inline" ).text(totalAdditions);
        }
      } else {
        $("."+pageRssId+"-news").css( "display", "none" );
      }
      rssDeferred.resolve();
    }
  });
  return rssDeferred.promise();
}
