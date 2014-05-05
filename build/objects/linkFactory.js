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

  this.LolKingNow = "http://www.lolking.net/now/";

  this.LolNexus = "http://www.lolnexus.com";
  this.LolNexusSearch = "/search?";

  this.LolSkill = "http://www.lolskill.net";
  this.LolSkillSearch = this.LolSkill + "/game-";

  this.Summoning = "http://www.summoning.net";
  this.SummoningSearch = this.Summoning+"/v1/lyralei/";

  this.Kassad = "http://quickfind.kassad.in";
  this.KassadSearch = this.KassadBase+"/profile/";

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
  this.LolInvenChampSearch = this.LolInven+"/dataninfo/champion/detail.php?code=";

};

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
  return this.getWikipediaQuery+query;
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
  return this.LolNexusSearch+this.NameUrlFirstKey+name+this.ServerUrlKey+region;
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
  return this.KassadSearch+"/"+this.getKassadFixedRegion(region)+"/"+name+"/";
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
      return ChampionList[i].id;
    }
  }
  return ''; //not found in champ list
}
