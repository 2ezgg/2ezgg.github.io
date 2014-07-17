function LeagueLinks(){

  this.name = this.getUrlParams('name') || localStorage.getItem('name') || '';
  this.summonerNames = [];
  this.server = this.getUrlParams('server') || localStorage.getItem('server') || 'na';
  this.champ = this.getUrlParams('champ') || localStorage.getItem('champ') || '';
  this.rssFeeds = JSON.parse(localStorage.getItem('rssFeeds')) || [];
  this.oldDate = localStorage.getItem('date') || 0;
  this.oldDate = parseInt(this.oldDate);
  localStorage.setItem('date', Date.now());

  this.linkFactory = new LinkFactory();

  this.lolNewsServer = '';
  this.lolWebsiteLocation(true);

  if (this.name) {
    $(".name").val(this.name);
    $(".server").val(this.server);
    this.nameLink();
    this.addNewSummoner(this.name, this.server);
  }

  if (this.champ) {
    $(".champ").val(this.champ);
    this.champLink();
  }
}

LeagueLinks.prototype.getUrlParams = function( type ){
  var regexS = "[?&]"+type+"=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.href);
  if(results === null){
      return null;
    } else {
      return decodeURIComponent(results[1]);
  }
};

LeagueLinks.prototype.account = function(nameUpdate, serverUpdate, stopReplacement){
  if(nameUpdate !== null){
    this.name = nameUpdate;
    if(!stopReplacement || (stopReplacement && localStorage.getItem('name') === null)){
      localStorage.setItem('name',this.name);
    }
  }
  if(serverUpdate){
    this.server = serverUpdate;
    if(!stopReplacement || (stopReplacement && localStorage.getItem('server') === null)){
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
};

LeagueLinks.prototype.champion = function(champUpdate){
  if(champUpdate !== null){
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
};

LeagueLinks.prototype.returnOriginalUrl = function(cssSelector){
  var items = $("."+cssSelector);

  for(var i = 0; i < items.length; i++){
    var item = items.eq(i);
    var urlData = item.data('url');
    item.attr("href", urlData);
  }
};

LeagueLinks.prototype.searchLink = function(){
  var items = $(".website-search");
  var searchQuery = encodeURIComponent($(".searchinput").val());

  for(var i = 0; i < items.length; i++){
    var item = items.eq(i);
    var anchor = item.data('name');
    item.attr("href", this.linkFactory.getQueryLinkForElementName(anchor, searchQuery));
  }
};

LeagueLinks.prototype.nameLink = function(){
  var items = $(".website-name");

  for(var i = 0; i < items.length; i++){
    var item = items.eq(i);
    var anchor = item.data('name');
    item.attr("href", this.linkFactory.getSummonerLinkForElementName(anchor, this.server, this.name));
  }
};

LeagueLinks.prototype.champLink = function(){
  var items = $(".website-champ");
  this.champ = this.champ.trim();

  for(var i = 0; i < items.length; i++){
    var item = items.eq(i);
    var anchor = item.data('name');
    item.attr("href", this.linkFactory.getChampionLinkForElementName(anchor, this.champ));
  }
};

LeagueLinks.prototype.championCompare = function(input){
  for (var i=0; i<ChampionList.length; i++) {
      if(ChampionList[i] == input){
        return true;
      }
    }
    return false;
};

LeagueLinks.prototype.dropDownTemplate = function(input){
  var self = this;
  var template = Handlebars.compile($('#champion-template').html());
  if(input.length === 0){
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
          ypos: ChampionList[i].ypos
        };
        count++;
      }
      $("#champ-drop").html( template(matchingChampInfo) );
    }
  }
};

LeagueLinks.prototype.addNewSummoner = function(summonerName, summonerServer){
  this.summonerNames = JSON.parse(localStorage.getItem('summonerNames')) || [];
  summonerName = summonerName.trim();
  if(summonerName){
    var exists = false; 
    for (var i = 0; i<this.summonerNames.length; i++){
      if(this.summonerNames[i].name == summonerName && this.summonerNames[i].server == summonerServer){
        exists = true; 
      }
    }

    if (!exists){
      this.summonerNames[i] = {
        name: summonerName,
        server: summonerServer,
        favouriteStatus: 'no'
      };
    }

  localStorage.setItem('summonerNames',JSON.stringify(this.summonerNames));
  }
};


LeagueLinks.prototype.removeSummoner = function(summonerName, summonerServer){
  this.summonerNames = JSON.parse(localStorage.getItem('summonerNames')) || [];

  for (var i = 0; i<this.summonerNames.length; i++){
    if(this.summonerNames[i].name == summonerName && this.summonerNames[i].server == summonerServer){
      this.summonerNames.splice(i, 1);
      break;
    }
  }

  localStorage.setItem('summonerNames',JSON.stringify(this.summonerNames));

  this.summonerList();
};


LeagueLinks.prototype.summonerList = function(){
  this.summonerNames = JSON.parse(localStorage.getItem('summonerNames')) || [];
  
  var self = this;
  var template = Handlebars.compile($('#summoner-accounts-template').html());
  $("#summoner-accounts-list").html(template(self.summonerNames));
};

LeagueLinks.prototype.lolWebsiteLocation = function(changeWebsite){
	this.lolNewsServer = this.server;
	if(this.lolNewsServer != 'euw' && this.lolNewsServer != 'eune' && this.lolNewsServer != 'oce' && this.lolNewsServer != 'br' && this.lolNewsServer != 'tr' && this.lolNewsServer != 'ru' && this.lolNewsServer != 'lan' && this.lolNewsServer != 'las'){
		this.lolNewsServer = 'na';
	}
	if(changeWebsite){
		$('#league').attr('href', this.linkFactory.OfficialLolStartRSS +this.lolNewsServer + this.linkFactory.OfficialLolNews);
	  $('#fantasy').attr('href', this.linkFactory.FantasyStart +this.lolNewsServer + this.linkFactory.FantasyEnd); 
  }
};

LeagueLinks.prototype.rssAlerts = function(pageRssId){

  var rssDeferred = $.Deferred();
  var self = this;
  var websiteUrl = this.linkFactory.getRssLink(pageRssId, this.lolNewsServer);
  var index = this.linkFactory.getIndexForRssLink(pageRssId);

  $.ajax({
    type: "GET",
    url: document.location.protocol + this.linkFactory.GoogleApiRssQuery + encodeURIComponent(websiteUrl),
    dataType: 'json',
    error: function(){
      console.log('Unable to load'+pageRssId+'feed');
    },
    success: function(data){
      console.log(this.url);
      self.rssFeeds = JSON.parse(localStorage.getItem('rssFeeds')) || [];
      if (self.rssFeeds[index] === undefined || self.rssFeeds[index] === null || ((pageRssId == appSettings.ezHomePage) && (window.location.href == window.location.origin + "/")) ){
        if (self.oldDate === 0 ){
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

      var $rssCounter =  $(".rss-capable[data-name='"+pageRssId+"'] .update-info");
      if(totalAdditions){
        if(totalAdditions > 5){
          $rssCounter.css( "display", "inline" ).html("5<span class='lighter'>+</span>");
        } else{
          $rssCounter.css( "display", "inline" ).text(totalAdditions);
        }
      } else {
        $rssCounter.css( "display", "none" );
      }
      rssDeferred.resolve();
    }
  });
  return rssDeferred.promise();
};