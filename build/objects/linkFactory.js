function LinkFactory(){

  /*
    LinkFactory is mostly utilized by leagueLinks.js
    Future improvements:
      - remove start & end's, use some kind of formatter
  */

  /*
    Web Searches
  */
  this.GoogleWebQuery = "http://google.com/search?q=";
  this.GoogleImageQueryStart = "http://www.google.com/search?site=&tbm=isch&source=hp&q=";
  this.GoogleImageQueryEnd = "&btnG=Search+by+image";
  this.YouTubeQuery = "http://www.youtube.com/results?search_query=";
  this.YahooWebQueryStart = "http://search.yahoo.com/search?p=";
  this.YahooWebQueryEnd = "&fr=sfp";
  this.BingWebQuery = "http://www.bing.com/search?q=";
  this.WikipediaQuery = "http://wikipedia.org/wiki/";
  this.WolframAlphaQuery = "http://www.wolframalpha.com/input/?i=";
  this.GoogleApiRssQuery = "//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=";
  this.OfficialLolNews = ".leagueoflegends.com/news";

  /*
    URL Parameters
  */
  this.ServerUrlKey = "&server=";
  this.RegionUrlKey = "&region=";
  this.NameUrlFirstKey = "name=";

  /*
    URLs to League Sites
  */
  this.LolKing = "http://www.lolking.net";
  this.LolKingChampSearch = this.LolKing+"/champions/";
  this.LolKingSearch = this.LolKing+"/search?";

  this.LolKingNow = "http://www.lolking.net/now";

  this.LolNexus = "http://www.lolnexus.com";
  this.LolNexusSearchEnd = "/search?";

  this.LolSkill = "http://www.lolskill.net";
  this.LolSkillSearch = this.LolSkill + "/game-";

  this.Summoning = "http://www.summoning.net";
  this.SummoningSearch = this.Summoning+"/v1/lyralei";

  this.Kassad = "http://quickfind.kassad.in";
  this.KassadSearch = this.Kassad+"/profile/";

  this.OPBase = "http://";
  this.OP = "op.gg";
  this.OPSearch = this.OP+"/summoner/userName=";

  this.LolDb = "http://loldb.gameguyz.com";
  this.LolDbSearch = this.LolDb+"/analyze/search?search_text=";
  this.LolDbServer = "&c_server=1_10_6_2_3_4_5_7_8_9";
  this.LolDbChampSearchStart = this.LolDb+"/champions/";
  this.LolDbChampSearchEnd = ".html";

  this.Elophant = "http://www.elophant.com";
  this.ElophantSearch = this.Elophant+"/league-of-legends/search?query=";
  this.ElophantChampSearchStart = this.Elophant+"/league-of-legends/champion/";
  this.ElophantChampSearchEnd = "/stats";

  this.ChampSelect = "http://www.championselect.net";
  this.ChampSelectChampSearch = this.ChampSelect+"/champ/";

  this.TSM = "http://www.solomid.net";
  this.TSMChampSearch = this.TSM+"/guide?champ=";

  this.ProBuilds = "http://www.probuilds.net";
  this.ProBuildsChampSearch = this.ProBuilds+"/champions/";

  this.MobaFire = "http://www.mobafire.com";
  this.MobaFireChampSearchStart = this.MobaFire+"/league-of-legends/";
  this.MobaFireChampSearchEnd = "-guide";

  this.LolBuilder = "http://www.lolbuilder.net";
  this.LolBuilderChampSearch = this.LolBuilder+"/";

  this.LolPro = "http://www.lolpro.com";
  this.LolProChampSearch = this.LolPro+"/guides/";

  this.LolWiki = "http://leagueoflegends.wikia.com";
  this.LolWikiChampSearch = this.LolWiki+"/wiki/";

  this.LolGamepedia = "http://lol.gamepedia.com";
  this.LolGamepediaChampSearch = this.LolGamepedia+"/";

  this.LolInven = "http://lol.inven.co.kr";
  this.LolInvenChampSearch = this.LolInven+"/dataninfo/champion/";

  /*
    Summoner Element Names
  */
  this.LolNexusSummonerElementName = "nexus";
  this.KassadSummonerElementName = "kassad";
  this.LolKingNowSummonerElementName = "now";
  this.SummoningSummonerElementName = "summoning";
  this.LolKingSummonerElementName = "king";
  this.OPSummonerElementName = "gg";
  this.LolSkillSummonerElementName = "skill";
  this.LolDbSummonerElementName = "summonergameguyz";
  this.ElophantSummonerElementName = "phant";

  /*
    Champion Element Names
  */
  this.ChampSelectChampElementName  = "champselect";
  this.LolKingChampElementName = "kingchamp";
  this.TSMChampElementName = "tsm";
  this.ProBuildsChampElementName = "probuilds";
  this.ElophantChampElementName = "elo";
  this.MobaFireChampElementName = "moba";
  this.LolBuilderChampElementName = "builder";
  this.LolProChampElementName = "lolpro";
  this.LolWikiChampElementName = "wikichamp";
  this.LolDbChampElementName = "champgameguyz";
  this.LolGamePediaChampElementName = "leaguepediachamp";
  this.LolInvenChampElementName = "inven";

  /*
    Rss feed Urls & Ids
  */
  this.OfficialLolId = "league";
  this.OfficialLolStartRSS = "http://";
  this.OfficialLolEndRSS = ".leagueoflegends.com/rss.xml";

  this.ReignOfGamingId = "reign";
  this.ReignOfGamingRSS = "http://www.reignofgaming.net/news.rss";

  this.OnGamersId = "ongamers";
  this.OnGamersRSS = "http://www.ongamers.com/league-of-legends/6000-2/rss/";

  this.FeedBurnerId = "surrender";
  this.FeedBurnerRSS = "http://feeds.feedburner.com/surrenderat20/CqWw?format=xml";

  this.Cloth5Id = "cloth";
  this.Cloth5RSS = "http://cloth5.com/feed/";

  this.EsportsExpressId = "esex";
  this.EsportsExpressRSS = "http://esportsexpress.com/category/league-of-legends/feed/";

  this.NewsOfLegendsId = "newslegend";
  this.NewsOfLegendsRSS = "http://www.newsoflegends.com/index.php/feed/";

}

/*
  Web Queries
*/
LinkFactory.prototype.getGoogleWebQuery = function(query){
  return this.GoogleWebQuery+query;
}
LinkFactory.prototype.getGoogleImageQuery = function(query){
  return this.GoogleImageQueryStart+query+this.GoogleImageQueryEnd;
}
LinkFactory.prototype.getYouTubeQuery = function(query){
  return this.YouTubeQuery+query;
}
LinkFactory.prototype.getYahooWebQuery = function(query){
  return this.YahooWebQueryStart+query+this.YahooWebQueryEnd;
}
LinkFactory.prototype.getBingWebQuery = function(query){
  return this.BingWebQuery+query;
}
LinkFactory.prototype.getWikipediaQuery = function(query){
  return this.WikipediaQuery+query;
}
LinkFactory.prototype.getWolframAlphaQuery = function(query){
  return this.WolframAlphaQuery+query;
}

/*
  Champion Renaming Functions
*/
LinkFactory.prototype.getSpaceAndDashName = function(champ){
  return champ.replace(/[^a-zA-Z ]/g, "").replace(/ /g,"-");
}
LinkFactory.prototype.getAllDashesName = function(champ){
  return champ.replace(/[^a-zA-Z \']/g, "").replace(/ |\'/g,"-");
}
LinkFactory.prototype.getOnlyLettersName = function(champ){
  return champ.replace(/[^a-zA-Z]/g, "");
}

/*
  LolKing
*/
LinkFactory.prototype.getLolKingSummonerLink = function(region, name){
  return this.LolKingSearch+this.NameUrlFirstKey+name+this.RegionUrlKey+region;
}
LinkFactory.prototype.getLolKingChampionLink = function(champ){
  return this.LolKingChampSearch+this.getLolKingFixedChamp(this.getOnlyLettersName(champ));
}
LinkFactory.prototype.getLolKingFixedChamp = function(champ){
  if(champ == 'wukong'){
    return 'monkeyking';
  }else{
    return champ;
  }
}

/*
  LolKingNow
*/
LinkFactory.prototype.getLolKingNowSummonerLink = function(region, name){
  return this.LolKingNow+"/"+region+"/"+name;
}
LinkFactory.prototype.getLolKingNowChampionLink = function(){
  return '';
}

/*
  LolNexus
*/
LinkFactory.prototype.getLolNexusSummonerLink = function(region, name){
  return this.LolNexus+"/"+region+this.LolNexusSearchEnd+this.NameUrlFirstKey+name+this.ServerUrlKey+region;
}
LinkFactory.prototype.getLolNexusChampionLink = function(){
  return '';
}

/*
  LolSkill
*/
LinkFactory.prototype.getLolSkillSummonerLink = function(region, name){
  return this.LolSkillSearch+region+'-'+name;
}
LinkFactory.prototype.getLolSkillChampionLink = function(){
  return '';
}

/*
  Summoning
*/
LinkFactory.prototype.getSummoningSummonerLink = function(region, name){
  return this.SummoningSearch+"/"+region+"/"+name;
}
LinkFactory.prototype.getSummoningChampionLink = function(){
  return '';
}

/*
  Kassad
*/
LinkFactory.prototype.getKassadSummonerLink = function(region, name){
  return this.KassadSearch+this.getKassadFixedRegion(region)+"/"+name+"/";
}
LinkFactory.prototype.getKassadFixedRegion = function(region){
  if(region == 'eune'){
    return 'eun';
  }else if(region == 'oce'){
    return 'oc';
  }else if(region == 'cn'){
    return 'china-ionia-1';
  }else{
    return region;
  }
}
LinkFactory.prototype.getKassadChampionLink = function(){
  return '';
}

/*
  OP
*/
LinkFactory.prototype.getOPSummonerLink = function(region, name){
  return this.OPBase+this.getOPFixedRegion(region)+this.OPSearch+name;
}
LinkFactory.prototype.getOPFixedRegion = function(region){
  if(region !== 'kr' && region !== 'cn' && region !== 'tw' && region !== 'sea'){
    return region+'.';
  }else{
    return '';
  }
}
LinkFactory.prototype.getOPChampionLink = function(){
  return '';
}

/*
  LolDb
*/
LinkFactory.prototype.getLolDbSummonerLink = function(name){
  return this.LolDbSearch+name+this.LolDbServer;
}
LinkFactory.prototype.getLolDbChampionLink = function(champ){
  return this.LolDbChampSearchStart+this.getLolDbFixedChamp(champ)+this.LolDbChampSearchEnd;
}
LinkFactory.prototype.getLolDbFixedChamp = function(champ){
  if(champ=='vel\'koz'){
    champ = 'velkoz';
  } else {
    champ = this.getAllDashesName(champ);
  }
  return champ;
}

/*
  Elophant
*/
LinkFactory.prototype.getElophantSummonerLink = function(region, name){
  return this.ElophantSearch+name+this.RegionUrlKey+region;
}
LinkFactory.prototype.getElophantChampionLink = function(champ){
  return this.ElophantChampSearchStart+this.getSpaceAndDashName(champ)+this.ElophantChampSearchEnd;
}

/*
  ChampSelect
*/
LinkFactory.prototype.getChampSelectChampionLink = function(champ){
  return this.ChampSelectChampSearch+this.getSpaceAndDashName(champ);
}

/*
  TSM
*/
LinkFactory.prototype.getTSMChampionLink = function(champ){
  return this.TSMChampSearch+this.getOnlyLettersName(champ);
}

/*
  ProBuilds
*/
LinkFactory.prototype.getProBuildsChampionLink = function(champ){
  return this.ProBuildsChampSearch+this.getProBuildsFixedChamp(this.getOnlyLettersName(champ));
}
LinkFactory.prototype.getProBuildsFixedChamp = function(champ){
  if(champ == 'wukong'){ //same as lolkings, made separate func incase of future changes
    return 'monkeyking';
  }else{
    return champ;
  }
}

/*
  MobaFire
*/
LinkFactory.prototype.getMobaFireChampionLink = function(champ){
  return this.MobaFireChampSearchStart+this.getSpaceAndDashName(champ)+this.MobaFireChampSearchEnd;
}

/*
  LolBuilder
*/
LinkFactory.prototype.getLolBuilderChampionLink = function(champ){
  return this.LolBuilderChampSearch+this.getOnlyLettersName(champ);
}

/*
  LolPro
*/
LinkFactory.prototype.getLolProChampionLink = function(champ){
  return this.LolProChampSearch+this.getSpaceAndDashName(champ);
}

/*
  LolWiki
*/
LinkFactory.prototype.getLolWikiChampionLink = function(champ){
  return this.LolWikiChampSearch+champ;
}

/*
  LolGamepedia
*/
LinkFactory.prototype.getLolGamepediaChampionLink = function(champ){
  return this.LolGamepediaChampSearch+this.getLolGamepediaFixedChamp(champ);
}
LinkFactory.prototype.getLolGamepediaFixedChamp = function(champ){
  switch(champ){
    case 'cho\'gath':
      champ = 'Cho\'Gath';
      break;
    case 'dr. mundo':
      champ = 'Dr. Mundo';
      break;
    case 'kha\'zix':
      champ = 'Kha\'Zix';
      break;
    case 'kog\'maw':
      champ = 'Kog\'Maw';
      break;
    case 'lee sin':
      champ = 'Lee Sin';
      break;
    case 'master yi':
      champ = 'Master Yi';
      break;
    case 'miss fortune':
      champ = 'Miss Fortune';
      break;
    case 'twisted fate':
      champ = 'Twisted Fate';
      break;
    case 'vel\'koz':
      champ = 'Vel\'Koz';
      break;
    case 'xin zhao':
      champ = 'Xin Zhao';
      break;
  }
  return encodeURIComponent(champ);
}

/*
  LolInven
*/
LinkFactory.prototype.getLolInvenChampionLink = function(champ){
  return this.LolInvenChampSearch+this.getLolInvenFixedChamp(champ);
}
LinkFactory.prototype.getLolInvenFixedChamp = function(champ){
  for (var i=0;i<ChampionList.length;i++){
    if(champ == ChampionList[i].name){
      return "detail.php?code="+ChampionList[i].id;
    }
  }
  return ''; //not found in champ list
}

/*
  Generates Champion URL for HTML element based on name
*/
LinkFactory.prototype.getChampionLinkForElementName = function(elementName, champ){
  switch(elementName){
    case this.ChampSelectChampElementName:
      return this.getChampSelectChampionLink(champ);
      break;
    case this.LolKingChampElementName:
      return this.getLolKingChampionLink(champ);
      break;
    case this.TSMChampElementName:
      return this.getTSMChampionLink(champ);
      break;
    case this.ProBuildsChampElementName:
      return this.getProBuildsChampionLink(champ);
      break;
    case this.ElophantChampElementName:
      return this.getElophantChampionLink(champ);
      break;
    case this.MobaFireChampElementName:
      return this.getMobaFireChampionLink(champ);
      break;
    case this.LolBuilderChampElementName:
      return this.getLolBuilderChampionLink(champ);
      break;
    case this.LolProChampElementName:
      return this.getLolProChampionLink(champ);
      break;
    case this.LolWikiChampElementName:
      return this.getLolWikiChampionLink(champ);
      break;
    case this.LolGamePediaChampElementName:
      return this.getLolGamepediaChampionLink(champ);
      break;
    case this.LolDbChampElementName:
      return this.getLolDbChampionLink(champ);
      break;
    case this.LolInvenChampElementName:
      return this.getLolInvenChampionLink(champ);
      break;
  }
}

LinkFactory.prototype.getSummonerLinkForElementName = function(elementName, region, name){
  switch(elementName){
    case this.LolNexusSummonerElementName:
      return this.getLolNexusSummonerLink(region, name);
      break;
    case this.KassadSummonerElementName:
      return this.getKassadSummonerLink(region, name);
      break;
    case this.LolKingNowSummonerElementName:
      return this.getLolKingNowSummonerLink(region, name);
      break;
    case this.SummoningSummonerElementName:
      return this.getSummoningSummonerLink(region, name);
      break;
    case this.LolKingSummonerElementName:
      return this.getLolKingSummonerLink(region, name);
      break;
    case this.OPSummonerElementName:
      return this.getOPSummonerLink(region, name);
      break;
    case this.LolSkillSummonerElementName:
      return this.getLolSkillSummonerLink(region, name);
      break;
    case this.LolDbSummonerElementName:
      return this.getLolDbSummonerLink(name);
      break;
    case this.ElophantSummonerElementName:
      return this.getElophantSummonerLink(region, name);
      break;
  }
}

LinkFactory.prototype.getRssLink = function(rssId, newsServer){
  switch(rssId){
    case this.OfficialLolId:
      return this.OfficialLolStartRSS+newsServer+this.OfficialLolEndRSS;
      break;
    case this.ReignOfGamingId:
      return this.ReignOfGamingRSS;
      break;
    case this.OnGamersId:
      return this.OnGamersRSS;
      break;
    case this.FeedBurnerId:
      return this.FeedBurnerRSS;
      break;
    case this.Cloth5Id:
      return this.Cloth5RSS;
      break;
    case this.EsportsExpressId:
      return this.EsportsExpressRSS;
      break;
    case this.NewsOfLegendsId:
      return this.NewsOfLegendsRSS;
      break;
  }
}

LinkFactory.prototype.getIndexForRssLink = function(rssId){
  switch(rssId){
    case this.OfficialLolId:
      return 0;
      break;
    case this.ReignOfGamingId:
      return 1;
      break;
    case this.OnGamersId:
      return 2;
      break;
    case this.FeedBurnerId:
      return 3;
      break;
    case this.Cloth5Id:
      return 4;
      break;
    case this.EsportsExpressId:
      return 5;
      break;
    case this.NewsOfLegendsId:
      return 6;
      break;
  }
}
