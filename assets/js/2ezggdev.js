var isBuggedChrome = false;
if(navigator.userAgent.match(/35.0.1916/i)){
  isBuggedChrome = true;
}

//wrap into an anonomous function to prevent name space issues.
(function($){
var ChampionList = [
  {name:"aatrox", xpos:-0,ypos:-0, id:114},
  {name:"ahri", xpos:-36,ypos:-0, id:89},
  {name:"akali", xpos:-72,ypos:-0, id:1},
  {name:"alistar", xpos:-108,ypos:-0, id:2},
  {name:"amumu", xpos:-144,ypos:-0, id:3},
  {name:"anivia", xpos:-180,ypos:-0, id:4},
  {name:"annie", xpos:-216,ypos:-0, id:5},
  {name:"ashe", xpos:-252,ypos:-0, id:6},
  {name:"blitzcrank", xpos:-288,ypos:-0, id:7},
  {name:"brand", xpos:-324,ypos:-0, id:8},
  {name:"braum", xpos:-288,ypos:-396, id:119},
  {name:"caitlyn", xpos:-0,ypos:-36, id:9},
  {name:"cassiopeia", xpos:-36,ypos:-36, id:10},
  {name:"cho'gath", xpos:-72,ypos:-36, id:11},
  {name:"corki", xpos:-108,ypos:-36, id:12},
  {name:"darius", xpos:-144,ypos:-36, id:98},
  {name:"diana", xpos:-180,ypos:-36, id:102},
  {name:"dr. mundo", xpos:-216,ypos:-36, id:13},
  {name:"draven", xpos:-252,ypos:-36, id:99},
  {name:"elise", xpos:-288,ypos:-36, id:106},
  {name:"evelynn", xpos:-324,ypos:-36, id:14},
  {name:"ezreal", xpos:-0,ypos:-72, id:15},
  {name:"fiddlesticks", xpos:-36,ypos:-72, id:16},
  {name:"fiora", xpos:-72,ypos:-72, id:94},
  {name:"fizz", xpos:-108,ypos:-72, id:87},
  {name:"galio", xpos:-144,ypos:-72, id:17},
  {name:"gangplank", xpos:-180,ypos:-72, id:18},
  {name:"garen", xpos:-216,ypos:-72, id:19},
  {name:"gragas", xpos:-252,ypos:-72, id:20},
  {name:"graves", xpos:-288,ypos:-72, id:85},
  {name:"hecarim", xpos:-324,ypos:-72, id:96},
  {name:"heimerdinger", xpos:-0,ypos:-108, id:21},
  {name:"irelia", xpos:-36,ypos:-108, id:22},
  {name:"janna", xpos:-72,ypos:-108, id:23},
  {name:"jarvan IV", xpos:-108,ypos:-108, id:24},
  {name:"jax", xpos:-144,ypos:-108, id:25},
  {name:"jayce", xpos:-180,ypos:-108, id:100},
  {name:"jinx", xpos:-216,ypos:-108, id:116},
  {name:"karma", xpos:-252,ypos:-108, id:26},
  {name:"karthus", xpos:-288,ypos:-108, id:27},
  {name:"kassadin", xpos:-324,ypos:-108, id:28},
  {name:"katarina", xpos:-0,ypos:-144, id:29},
  {name:"kayle", xpos:-36,ypos:-144, id:30},
  {name:"kennen", xpos:-72,ypos:-144, id:31},
  {name:"kha'zix", xpos:-108,ypos:-144, id:105},
  {name:"kog'maw", xpos:-144,ypos:-144, id:32},
  {name:"leblanc", xpos:-180,ypos:-144, id:33},
  {name:"lee sin", xpos:-216,ypos:-144, id:34},
  {name:"leona", xpos:-252,ypos:-144, id:77},
  {name:"lissandra", xpos:-288,ypos:-144, id:113},
  {name:"lucian", xpos:-324,ypos:-144, id:115},
  {name:"lulu", xpos:-0,ypos:-180, id:95},
  {name:"lux", xpos:-36,ypos:-180, id:35},
  {name:"malphite", xpos:-72,ypos:-180, id:36},
  {name:"malzahar", xpos:-108,ypos:-180, id:37},
  {name:"maokai", xpos:-144,ypos:-180, id:38},
  {name:"master yi", xpos:-180,ypos:-180, id:39},
  {name:"miss fortune", xpos:-216,ypos:-180, id:40},
  {name:"mordekaiser", xpos:-288,ypos:-180, id:41},
  {name:"morgana", xpos:-324,ypos:-180, id:42},
  {name:"nami", xpos:-0,ypos:-216, id:108},
  {name:"nasus", xpos:-36,ypos:-216, id:43},
  {name:"nautilus", xpos:-72,ypos:-216, id:93},
  {name:"nidalee", xpos:-108,ypos:-216, id:44},
  {name:"nocturne", xpos:-144,ypos:-216, id:45},
  {name:"nunu", xpos:-180,ypos:-216, id:46},
  {name:"olaf", xpos:-216,ypos:-216, id:47},
  {name:"orianna", xpos:-252,ypos:-216, id:78},
  {name:"pantheon", xpos:-288,ypos:-216, id:48},
  {name:"poppy", xpos:-324,ypos:-216, id:49},
  {name:"quinn", xpos:-0,ypos:-252, id:111},
  {name:"rammus", xpos:-36,ypos:-252, id:50},
  {name:"renekton", xpos:-72,ypos:-252, id:51},
  {name:"rengar", xpos:-108,ypos:-252, id:103},
  {name:"riven", xpos:-144,ypos:-252, id:83},
  {name:"rumble", xpos:-180,ypos:-252, id:52},
  {name:"ryze", xpos:-216,ypos:-252, id:53},
  {name:"sejuani", xpos:-252,ypos:-252, id:92},
  {name:"shaco", xpos:-288,ypos:-252, id:54},
  {name:"shen", xpos:-324,ypos:-252, id:55},
  {name:"shyvana", xpos:-0,ypos:-288, id:86},
  {name:"singed", xpos:-36,ypos:-288, id:56},
  {name:"sion", xpos:-72,ypos:-288, id:57},
  {name:"sivir", xpos:-108,ypos:-288, id:58},
  {name:"skarner", xpos:-144,ypos:-288, id:82},
  {name:"sona", xpos:-180,ypos:-288, id:59},
  {name:"soraka", xpos:-216,ypos:-288, id:60},
  {name:"swain", xpos:-252,ypos:-288, id:61},
  {name:"syndra", xpos:-288,ypos:-288, id:104},
  {name:"talon", xpos:-324,ypos:-288, id:79},
  {name:"taric", xpos:-0,ypos:-324, id:62},
  {name:"teemo", xpos:-36,ypos:-324, id:63},
  {name:"thresh", xpos:-72,ypos:-324, id:110},
  {name:"tristana", xpos:-108,ypos:-324, id:64},
  {name:"trundle", xpos:-144,ypos:-324, id:65},
  {name:"tryndamere", xpos:-180,ypos:-324, id:66},
  {name:"twisted fate", xpos:-216,ypos:-324, id:67},
  {name:"twitch", xpos:-252,ypos:-324, id:68},
  {name:"udyr", xpos:-288,ypos:-324, id:69},
  {name:"urgot", xpos:-324,ypos:-324, id:70},
  {name:"varus", xpos:-0,ypos:-360, id:97},
  {name:"vayne", xpos:-36,ypos:-360, id:71},
  {name:"veigar", xpos:-72,ypos:-360, id:72},
  {name:"vel'koz", xpos:-252,ypos:-396, id:118},
  {name:"vi", xpos:-108,ypos:-360, id:109},
  {name:"viktor", xpos:-144,ypos:-360, id:90},
  {name:"vladimir", xpos:-180,ypos:-360, id:73},
  {name:"volibear", xpos:-216,ypos:-360, id:88},
  {name:"warwick", xpos:-252,ypos:-360, id:74},
  {name:"wukong", xpos:-252,ypos:-180, id:80},
  {name:"xerath", xpos:-288,ypos:-360, id:84},
  {name:"xin zhao", xpos:-324,ypos:-360, id:75},
  {name:"yasuo", xpos:-0,ypos:-396, id:117},
  {name:"yorick", xpos:-36,ypos:-396, id:81},
  {name:"zac", xpos:-72,ypos:-396, id:112},
  {name:"zed", xpos:-108,ypos:-396, id:107},
  {name:"ziggs", xpos:-144,ypos:-396, id:92},
  {name:"zilean", xpos:-180,ypos:-396, id:76},
  {name:"zyra", xpos:-216,ypos:-396, id:101}
];

var redditJsOffline = false;
var appSettings = {};
var settingsSaved = {};
    settingsSaved = localStorage.getItem('appSettings');

if(settingsSaved){
  settingsSaved = JSON.parse(settingsSaved);

  // code that has to run because I stupidly used an array with objects rather than an associative object at first - will remove in a few months
  if(settingsSaved instanceof Array){
    appSettings = {
      redditNewTab: settingsSaved[0].settingChoice,
      twitchVisualNotifications: settingsSaved[1].settingChoice,
      twitchAudioNotifications: settingsSaved[2].settingChoice,
      eSportsNotifications: settingsSaved[3].settingChoice,
      defaultNameLink: settingsSaved[4].settingChoice,
      defaultChampLink: settingsSaved[5].settingChoice,
      smartEnter: settingsSaved[6].settingChoice,
      newWindow: settingsSaved[7].settingChoice
    };
  }

}

appSettings = {
  ezHomePage:((settingsSaved !== null) && settingsSaved.hasOwnProperty('ezHomePage')) ? settingsSaved.ezHomePage : 'reddit',
  redditNewTab:((settingsSaved !== null) && settingsSaved.hasOwnProperty('redditNewTab')) ? settingsSaved.redditNewTab : 'off',
  youtubeDisplay:((settingsSaved !== null) && settingsSaved.hasOwnProperty('youtubeDisplay')) ? settingsSaved.youtubeDisplay : 'single',
  twitchVisualNotifications:((settingsSaved !== null) && settingsSaved.hasOwnProperty('twitchVisualNotifications')) ? settingsSaved.twitchVisualNotifications : 'on',
  twitchAudioNotifications:((settingsSaved !== null) && settingsSaved.hasOwnProperty('twitchAudioNotifications')) ? settingsSaved.twitchAudioNotifications : 'on',
  eSportsNotifications:((settingsSaved !== null) && settingsSaved.hasOwnProperty('eSportsNotifications')) ? settingsSaved.eSportsNotifications : 'on',
  defaultNameLink:((settingsSaved !== null) && settingsSaved.hasOwnProperty('defaultNameLink')) ? settingsSaved.defaultNameLink : 'king',
  shiftNameLink:((settingsSaved !== null) && settingsSaved.hasOwnProperty('shiftNameLink')) ? settingsSaved.shiftNameLink : 'nexus',
  ctrlNameLink:((settingsSaved !== null) && settingsSaved.hasOwnProperty('ctrlNameLink')) ? settingsSaved.ctrlNameLink : 'gg',
  defaultChampLink:((settingsSaved !== null) && settingsSaved.hasOwnProperty('defaultChampLink'))  ? settingsSaved.defaultChampLink : 'champselect',
  shiftChampLink:((settingsSaved !== null) && settingsSaved.hasOwnProperty('shiftChampLink'))  ? settingsSaved.shiftChampLink : 'probuilds',
  ctrlChampLink:((settingsSaved !== null) && settingsSaved.hasOwnProperty('ctrlChampLink'))  ? settingsSaved.ctrlChampLink : 'kingchamp',
  defaultSearchLink:((settingsSaved !== null) && settingsSaved.hasOwnProperty('defaultSearchLink'))  ? settingsSaved.defaultSearchLink : 'google',
  shiftSearchLink:((settingsSaved !== null) && settingsSaved.hasOwnProperty('shiftSearchLink'))  ? settingsSaved.shiftSearchLink : 'youtubesearch',
  ctrlSearchLink:((settingsSaved !== null) && settingsSaved.hasOwnProperty('ctrlSearchLink'))  ? settingsSaved.ctrlSearchLink : 'wikipedia',
  smartEnter:((settingsSaved !== null) && settingsSaved.hasOwnProperty('smartEnter')) ? settingsSaved.smartEnter : 'on',
  newWindow:((settingsSaved !== null) && settingsSaved.hasOwnProperty('newWindow')) ? settingsSaved.newWindow : 'on'
};

// function to test whether homepage is available (for example if someone removed a custom made page, the homepage wouldn't work) - if it doesn't exist change it back to reddit homepage
var idList = {};

function homePageDetector(){

  //schema 
  idList = {
    search : [{name:'google', id:'google'},{name:'youtubesearch', id:'youtubesearch'},{name:'yahoo', id:'yahoo'},{name:'wikipedia', id:'wikipedia'}],
    general : [{name:'RedditJS', id:'reddit'},{name:'Reddit Front', id:'redditfront'},{name:'Old Reddit', id:'redditthreads'},{name:'LoL Videos', id:'youtube'},{ name:'Streams', id:'twitch'},{name:'LoL News', id:'league'},{ name:'RoG', id:'reign'},{ name:'onGamers', id:'ongamers'},{ name:'S@20', id:'surrender'},{ name:'Cloth 5', id:'cloth'},{ name:'Paravine', id:'paravine'},{ name:'NewsOfLegends', id:'newslegend'},{ name:'ESEx', id:'esex'},{ name:'In2LoL', id:'in2'},{ name:'LoL Wiki', id:'wikia'},{ name:'Esportspedia', id:'esportpedia'},{ name:'Leaguepedia', id:'gamepedia'},{ name:'LeagueCraft', id:'craft'},{name:'NerfPlz Tier List', id:'nerfplz'},{ name:'Jungle Timer', id:'jungle'},{ name:'LoL Esports', id:'esports'},{ name:'Fantasy LCS', id:'fantasy'},{ name:'Esport Calendar', id:'calendar'},{ name:'Elo Hell', id:'hell'},{name:'SummonersCode', id:'code'},{ name:'LoL IRC', id:'irc'},{ name:'LResearch', id:'research'}],
    summoner : [{name:'LoLKing', id:'king'},{name:'Nexus', id:'nexus'},{name:'OP GG', id:'gg'},{name:'LoLKing Now', id:'now'},{name:'Summoning', id:'summoning'},{name:'LegendsAsia', id:'asiawatch'},{name:'LegendsAsia Profile', id:'asiaprofile'},{name:'LoLSkill', id:'skill'},{name:'LoLSkill Profile', id:'summonerski'},{name:'Kassad.In', id:'kassad'},{name:'WardScore', id:'wardscore'},{name:'Elophant', id:'phant'},{name:'Summoner GameGuyz', id:'summonergameguyz'}],
    champ : [{name:'Counters', id:'champselect'},{name:'SoloMid', id:'tsm'},{name:'ProBuilds', id:'probuilds'},{name:'MobaFire', id:'moba'},{name:'LoLBuilder', id:'builder'},{name:'LoLPro', id:'lolpro'},{name:'GameGuyz Champ', id:'champgameguyz'},{name:'LoLKing Stats', id:'kingchamp'},{name:'Elophant', id:'elo'},{name:'LoL Wiki', id:'wikichamp'}, {name:'Esportspedia', id:'esportchamp'}, {name:'Leaguepedia', id:'leaguepediachamp'}, {name:'Inven', id:'inven'}, {name:'ProPick', id:'pick'}]
  };

  var miscWebsites = JSON.parse(localStorage.getItem('pageAdd'));
  if(miscWebsites){
    for (var j = 0; j < miscWebsites.length; j++){
      idList.general[idList.general.length] = {
        name: miscWebsites[j].name,
        id: miscWebsites[j].id
      };
    }
  }

  idList = JSON.parse(localStorage.getItem('idList')) || idList;

  function detectIfHomePageExists(){
    for(var i = 0; i < idList.general.length; i++){
      if (idList.general[i].id == appSettings.ezHomePage){
        return true;
      }
    }
    for(var j = 0; j < idList.summoner.length; j++){
      if (idList.summoner[j].id == appSettings.ezHomePage){
        return true;
      }
    }
    for(var k = 0; k < idList.champ.length; k++){
      if (idList.champ[k].id == appSettings.ezHomePage){
        return true;
      }
    }
  }

  if(!detectIfHomePageExists()){
    appSettings.ezHomePage = 'reddit';
  }
}

homePageDetector();
localStorage.setItem('appSettings', JSON.stringify(appSettings));

if(redditJsOffline && (appSettings.ezHomePage == 'reddit')){
  appSettings.ezHomePage = 'redditthreads';
  $('#top-reddit-offline-message').css('display','inline');
}

function detectmob() {
   if((navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) || ($(window).width() < 860)  && (appSettings.newWindow == 'on')){
      return true;
    }
   else {
      return false;
    }
}

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
  this.LolSkillSearch = this.LolSkill + "/game/";
  this.LoLSkillProfileSearch = this.LolSkill + "/summoner/";

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

  this.WardScore = "http://wardscore.loltools.net";
  this.WardScoreSearch = this.WardScore+"/?";

  this.Elophant = "http://www.elophant.com";
  this.ElophantSearch = this.Elophant+"/league-of-legends/search?query=";
  this.ElophantChampSearchStart = this.Elophant+"/league-of-legends/champion/";
  this.ElophantChampSearchEnd = "/stats";

  this.LegendsAsia = "http://www.legendsasia.com/";
  this.LegendsAsiaWatch = this.LegendsAsia+"watch/";
  this.LegendsAsiaProfile = this.LegendsAsia+"summoner/";

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

  this.LolEsportspedia = "http://lol.esportspedia.com";
  this.LolEsportspediaChampSearch = this.LolEsportspedia+"/wiki/";

  this.LolInven = "http://lol.inven.co.kr";
  this.LolInvenChampSearch = this.LolInven+"/dataninfo/champion/";
  this.LolInvenChampDetail = "detail.php?code=";

  this.ProPick = "http://propick.net/";
  this.ProPickChampSearch = this.ProPick + "index.php/all/champion/";

  this.FantasyStart = "http://fantasy.";
  this.FantasyEnd = ".lolesports.com";
  /*
    Query Element Names
  */
  this.GoogleQueryElementName = 'google';
  this.GoogleImagesQueryElementName = 'gimages';
  this.YouTubeQueryElementName = 'youtubesearch';
  this.YahooQueryElementName = 'yahoo';
  this.BingQueryElementName = 'bing';
  this.WikipediaQueryElementName = 'wikipedia';
  this.WolframQueryElementName = 'wolfram';

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
  this.LolSkillProfileSummonerElementName = "summonerski";
  this.LolDbSummonerElementName = "summonergameguyz";
  this.ElophantSummonerElementName = "phant";
  this.WardScoreSummonerElementName = "wardscore";
  this.LegendsAsiaWatchSummonerElementName = "asiawatch";
  this.LegendsAsiaProfileSummonerElementName = "asiaprofile";


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
  this.LolEsportsPediaChampElementName = "esportschamp";
  this.LolInvenChampElementName = "inven";
  this.ProPickChampElementName = "pick";

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

  this.ParavineId = "paravine";
  this.ParavineRSS = "http://www.paravine.com/category/leagueoflegends/feed/";
}

/*
  Web Queries
*/
LinkFactory.prototype.getGoogleWebQuery = function(query){
  return this.GoogleWebQuery+query;
};
LinkFactory.prototype.getGoogleImageQuery = function(query){
  return this.GoogleImageQueryStart+query+this.GoogleImageQueryEnd;
};
LinkFactory.prototype.getYouTubeQuery = function(query){
  return this.YouTubeQuery+query;
};
LinkFactory.prototype.getYahooWebQuery = function(query){
  return this.YahooWebQueryStart+query+this.YahooWebQueryEnd;
};
LinkFactory.prototype.getBingWebQuery = function(query){
  return this.BingWebQuery+query;
};
LinkFactory.prototype.getWikipediaQuery = function(query){
  return this.WikipediaQuery+query;
};
LinkFactory.prototype.getWolframAlphaQuery = function(query){
  return this.WolframAlphaQuery+query;
};

/*
  Champion Renaming Functions
*/
LinkFactory.prototype.getSpaceAndDashName = function(champ){
  return champ.replace(/[^a-zA-Z ]/g, "").replace(/ /g,"-");
};
LinkFactory.prototype.getAllDashesName = function(champ){
  return champ.replace(/[^a-zA-Z \']/g, "").replace(/ |\'/g,"-");
};
LinkFactory.prototype.getOnlyLettersName = function(champ){
  return champ.replace(/[^a-zA-Z]/g, "");
};

/*
  LolKing
*/
LinkFactory.prototype.getLolKingSummonerLink = function(region, name){
  return this.LolKingSearch+this.NameUrlFirstKey+name+this.RegionUrlKey+region;
};
LinkFactory.prototype.getLolKingChampionLink = function(champ){
  return this.LolKingChampSearch+this.getLolKingFixedChamp(this.getOnlyLettersName(champ));
};
LinkFactory.prototype.getLolKingFixedChamp = function(champ){
  if(champ == 'wukong'){
    return 'monkeyking';
  }else{
    return champ;
  }
};

/*
  LolKingNow
*/
LinkFactory.prototype.getLolKingNowSummonerLink = function(region, name){
  return this.LolKingNow+"/"+region+"/"+name;
};
LinkFactory.prototype.getLolKingNowChampionLink = function(){
  return '';
};

/*
  LolNexus
*/
LinkFactory.prototype.getLolNexusSummonerLink = function(region, name){
  return this.LolNexus+"/"+region+this.LolNexusSearchEnd+this.NameUrlFirstKey+name+this.ServerUrlKey+region;
};
LinkFactory.prototype.getLolNexusChampionLink = function(){
  return '';
};

/*
  LolSkill
*/
LinkFactory.prototype.getLolSkillSummonerLink = function(region, name){
  return this.LolSkillSearch+region+'/'+name;
};
LinkFactory.prototype.getLolSkillProfileSummonerLink = function(region, name){
  return this.LoLSkillProfileSearch+region+'/'+name;
};
LinkFactory.prototype.getLolSkillChampionLink = function(){
  return '';
};

/*
  Summoning
*/
LinkFactory.prototype.getSummoningSummonerLink = function(region, name){
  return this.SummoningSearch+"/"+region+"/"+name;
};
LinkFactory.prototype.getSummoningChampionLink = function(){
  return '';
};

/*
  Kassad
*/
LinkFactory.prototype.getKassadSummonerLink = function(region, name){
  return this.KassadSearch+this.getKassadFixedRegion(region)+"/"+name+"/";
};
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
};
LinkFactory.prototype.getKassadChampionLink = function(){
  return '';
};

/*
  OP
*/
LinkFactory.prototype.getOPSummonerLink = function(region, name){
  return this.OPBase+this.getOPFixedRegion(region)+this.OPSearch+name;
};
LinkFactory.prototype.getOPFixedRegion = function(region){
  if(region !== 'kr' && region !== 'cn' && region !== 'tw' && region !== 'sea'){
    return region+'.';
  }else{
    return '';
  }
};
LinkFactory.prototype.getOPChampionLink = function(){
  return '';
};

/*
  LolDb
*/
LinkFactory.prototype.getLolDbSummonerLink = function(name){
  return this.LolDbSearch+name+this.LolDbServer;
};
LinkFactory.prototype.getLolDbChampionLink = function(champ){
  return this.LolDbChampSearchStart+this.getLolDbFixedChamp(champ)+this.LolDbChampSearchEnd;
};
LinkFactory.prototype.getLolDbFixedChamp = function(champ){
  if(champ=='vel\'koz'){
    champ = 'velkoz';
  } else {
    champ = this.getAllDashesName(champ);
  }
  return champ;
};

/*
  Elophant
*/
LinkFactory.prototype.getElophantSummonerLink = function(region, name){
  return this.ElophantSearch+name+this.RegionUrlKey+region;
};
LinkFactory.prototype.getElophantChampionLink = function(champ){
  return this.ElophantChampSearchStart+this.getSpaceAndDashName(champ)+this.ElophantChampSearchEnd;
};

/*
  WardScore
*/
LinkFactory.prototype.getWardScoreSummonerLink = function(region, name){
  return this.WardScoreSearch+this.NameUrlFirstKey+name+this.RegionUrlKey+region;
};

/*
  legendsasia
*/
LinkFactory.prototype.getAsiaWatchSummonerLink = function(region, name){
  return this.LegendsAsiaWatch+this.getAsiaFixedRegion(region)+'/'+name;
};

LinkFactory.prototype.getAsiaProfileSummonerLink = function(region, name){
  return this.LegendsAsiaProfile+this.getAsiaFixedRegion(region)+'/'+name;
};

LinkFactory.prototype.getAsiaFixedRegion = function(region){
  if(region == 'sea'){
    return 'sg';
  }else if(region == 'cn'){
    return 'cn1';
  }else{
    return region;
  }
};

/*
  ChampSelect
*/
LinkFactory.prototype.getChampSelectChampionLink = function(champ){
  return this.ChampSelectChampSearch+this.getSpaceAndDashName(champ);
};

/*
  TSM
*/
LinkFactory.prototype.getTSMChampionLink = function(champ){
  return this.TSMChampSearch+this.getOnlyLettersName(champ);
};

/*
  ProBuilds
*/
LinkFactory.prototype.getProBuildsChampionLink = function(champ){
  return this.ProBuildsChampSearch+this.getProBuildsFixedChamp(this.getOnlyLettersName(champ));
};
LinkFactory.prototype.getProBuildsFixedChamp = function(champ){
  if(champ == 'wukong'){ //same as lolkings, made separate func incase of future changes
    return 'monkeyking';
  }else{
    return champ;
  }
};

/*
  MobaFire
*/
LinkFactory.prototype.getMobaFireChampionLink = function(champ){
  return this.MobaFireChampSearchStart+this.getSpaceAndDashName(champ)+this.MobaFireChampSearchEnd;
};

/*
  LolBuilder
*/
LinkFactory.prototype.getLolBuilderChampionLink = function(champ){
  return this.LolBuilderChampSearch+this.getOnlyLettersName(champ);
};

/*
  LolPro
*/
LinkFactory.prototype.getLolProChampionLink = function(champ){
  return this.LolProChampSearch+this.getSpaceAndDashName(champ);
};

/*
  LolWiki
*/
LinkFactory.prototype.getLolWikiChampionLink = function(champ){
  return this.LolWikiChampSearch+champ;
};

/*
  LolGamepedia + Lol EsportsPedia
*/

LinkFactory.prototype.getLolEsportspediaChampionLink = function(champ){
  return this.LolEsportspediaChampSearch+this.getLolGamepediaEsportspediaFixedChamp(champ);
};
LinkFactory.prototype.getLolGamepediaChampionLink = function(champ){
  return this.LolGamepediaChampSearch+this.getLolGamepediaEsportspediaFixedChamp(champ);
};
LinkFactory.prototype.getLolGamepediaEsportspediaFixedChamp = function(champ){
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
};

/*
  LolInven
*/
LinkFactory.prototype.getLolInvenChampionLink = function(champ){
  return this.LolInvenChampSearch+this.getLolInvenFixedChamp(champ);
};
LinkFactory.prototype.getLolInvenFixedChamp = function(champ){
  for (var i=0;i<ChampionList.length;i++){
    if(champ == ChampionList[i].name){
      return this.LolInvenChampDetail+ChampionList[i].id;
    }
  }
  return ''; //not found in champ list
};

/*
  ProPick
*/
LinkFactory.prototype.getProPickChampionLink = function(champ){
  return this.ProPickChampSearch + encodeURIComponent(champ);
};

/*
  Generates Champion URL for HTML element based on name
*/
LinkFactory.prototype.getChampionLinkForElementName = function(elementName, champ){
  switch(elementName){
    case this.ChampSelectChampElementName:
      return this.getChampSelectChampionLink(champ);
    case this.LolKingChampElementName:
      return this.getLolKingChampionLink(champ);
    case this.TSMChampElementName:
      return this.getTSMChampionLink(champ);
    case this.ProBuildsChampElementName:
      return this.getProBuildsChampionLink(champ);
    case this.ElophantChampElementName:
      return this.getElophantChampionLink(champ);
    case this.MobaFireChampElementName:
      return this.getMobaFireChampionLink(champ);
    case this.LolBuilderChampElementName:
      return this.getLolBuilderChampionLink(champ);
    case this.LolProChampElementName:
      return this.getLolProChampionLink(champ);
    case this.LolWikiChampElementName:
      return this.getLolWikiChampionLink(champ);
    case this.LolEsportsPediaChampElementName:
      return this.getLolEsportspediaChampionLink(champ);
    case this.LolGamePediaChampElementName:
      return this.getLolGamepediaChampionLink(champ);
    case this.LolDbChampElementName:
      return this.getLolDbChampionLink(champ);
    case this.LolInvenChampElementName:
      return this.getLolInvenChampionLink(champ);
    case this.ProPickChampElementName:
      return this.getProPickChampionLink(champ);
  }
};

LinkFactory.prototype.getSummonerLinkForElementName = function(elementName, region, name){
  switch(elementName){
    case this.LolNexusSummonerElementName:
      return this.getLolNexusSummonerLink(region, name);
    case this.KassadSummonerElementName:
      return this.getKassadSummonerLink(region, name);
    case this.LolKingNowSummonerElementName:
      return this.getLolKingNowSummonerLink(region, name);
    case this.SummoningSummonerElementName:
      return this.getSummoningSummonerLink(region, name);
    case this.LolKingSummonerElementName:
      return this.getLolKingSummonerLink(region, name);
    case this.OPSummonerElementName:
      return this.getOPSummonerLink(region, name);
    case this.LolSkillSummonerElementName:
      return this.getLolSkillSummonerLink(region, name);
    case this.LolSkillProfileSummonerElementName:
      return this.getLolSkillProfileSummonerLink(region, name);
    case this.LolDbSummonerElementName:
      return this.getLolDbSummonerLink(name);
    case this.WardScoreSummonerElementName:
      return this.getWardScoreSummonerLink(region, name);
    case this.ElophantSummonerElementName:
      return this.getElophantSummonerLink(region, name);
    case this.LegendsAsiaWatchSummonerElementName:
      return this.getAsiaWatchSummonerLink(region, name);
    case this.LegendsAsiaProfileSummonerElementName:
      return this.getAsiaProfileSummonerLink(region, name);
  }
};

LinkFactory.prototype.getQueryLinkForElementName = function(elementName, searchQuery){
  switch(elementName){
  case this.GoogleQueryElementName:
      return this.getGoogleWebQuery(searchQuery);
    case this.GoogleImagesQueryElementName:
      return this.getGoogleImageQuery(searchQuery);
    case this.YouTubeQueryElementName:
      return this.getYouTubeQuery(searchQuery);
    case this.YahooQueryElementName:
      return this.getYahooWebQuery(searchQuery);
    case this.BingQueryElementName:
      return this.getBingWebQuery(searchQuery);
    case this.WikipediaQueryElementName:
      return this.getWikipediaQuery(searchQuery);
    case this.WolframQueryElementName:
      return this.getWolframAlphaQuery(searchQuery);
  }
};

LinkFactory.prototype.getRssLink = function(rssId, newsServer){
  switch(rssId){
    case this.OfficialLolId:
      return this.OfficialLolStartRSS+newsServer+this.OfficialLolEndRSS;
    case this.ReignOfGamingId:
      return this.ReignOfGamingRSS;
    case this.OnGamersId:
      return this.OnGamersRSS;
    case this.FeedBurnerId:
      return this.FeedBurnerRSS;
    case this.Cloth5Id:
      return this.Cloth5RSS;
    case this.EsportsExpressId:
      return this.EsportsExpressRSS;
    case this.NewsOfLegendsId:
      return this.NewsOfLegendsRSS;
    case this.ParavineId:
      return this.ParavineRSS;
  }
};

LinkFactory.prototype.getIndexForRssLink = function(rssId){
  switch(rssId){
    case this.OfficialLolId:
      return 0;
    case this.ReignOfGamingId:
      return 1;
    case this.OnGamersId:
      return 2;
    case this.FeedBurnerId:
      return 3;
    case this.Cloth5Id:
      return 4;
    case this.EsportsExpressId:
      return 5;
    case this.NewsOfLegendsId:
      return 6;
  }
};

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
function RedditLol(){
  this.youtubeVids = [];
  this.redditThreads = [];

  this.currentRedditSettings = [null,'leagueoflegends','hot',null];
  this.currentYoutubeSettings = [null,'leagueoflegends','hot',null];

  this.youtubeCount = 0;
  this.redditCount = 0;

  this.nextPageReddit = '';
  this.nextPageYoutube = '';

  this.previousYoutubeLength = 0;
  this.previousRedditLength = 0;

  this.redditAjaxRequest = '';
}

RedditLol.prototype.getAbout = function(){
  var redditAboutDeferred = $.Deferred();
  var self = this;

  self.redditAjaxRequest = $.ajax({
      dataType:'json',
      url: "http://www.reddit.com/r/leagueoflegends/about.json?jsonp=",
      error: function(){
              console.log('Unable to load reddit about api');
          },
      success: function(data){
        var aboutHtml = data.data.description_html;

        $side = $('.side');
        $side.html(aboutHtml);
        $side.html($side.text());
        aboutHtml = $side.html();

        localStorage.setItem('aboutHtml', aboutHtml);
        localStorage.setItem('lastRedditAboutRetrieval', Date.now());

       redditAboutDeferred.resolve();
              },

    });

  return redditAboutDeferred.promise();
};

RedditLol.prototype.displayAbout = function(homePage){

  var lastRedditAboutRetrieval = localStorage.getItem('lastRedditAboutRetrieval');
  if( lastRedditAboutRetrieval === null || (parseInt(lastRedditAboutRetrieval) + 1000*60*60) <= Date.now() ){
    this.getAbout();
  } else {
    $('.side').html(localStorage.getItem('aboutHtml'));
  }
};

RedditLol.prototype.getThreads = function(choice, pageSubreddit, pageType, pageTime, pageNum){

  var choiceOfFunction = choice;
  var ajaxUrl = "";
  if(pageSubreddit && pageType && pageTime && pageNum){
    ajaxUrl = "http://www.reddit.com/r/"+pageSubreddit+"/"+pageType+".json?limit=50&t="+pageTime+"&after="+pageNum+"&jsonp=";
  }  else if(pageSubreddit && pageType && pageTime){
     ajaxUrl = "http://www.reddit.com/r/"+pageSubreddit+"/"+pageType+".json?limit=50&t="+pageTime+"&jsonp=";
  } else if(pageSubreddit && pageType && pageNum){
    ajaxUrl = "http://www.reddit.com/r/"+pageSubreddit+"/"+pageType+".json?limit=50&after="+pageNum+"&jsonp=";
  } else if (pageSubreddit && pageType) {
    ajaxUrl = "http://www.reddit.com/r/"+pageSubreddit+"/"+pageType+".json?limit=50&jsonp=";
  }

  var redditDeferred = $.Deferred();
  var self = this;

  self.redditAjaxRequest = $.ajax({
      dataType:'json',
      url: ajaxUrl,
      error: function(){
        console.log('Unable to load reddit api');
      },
      success: function(data){
        var nodes = data.data.children;
        var y = 0;

        if (choiceOfFunction == 'youtube'){
          self.previousYoutubeLength = self.youtubeVids.length;
        }

        else if (choiceOfFunction == 'reddit'){
          self.previousRedditLength = self.redditThreads.length;
        }

        for(var i=0;i<nodes.length;i++){
          var textHrefChange = '';
          var redditDomainLink = nodes[i].data.domain;
          if(nodes[i].data.selftext_html){
            textHrefChange = nodes[i].data.selftext_html;
            textHrefChange = textHrefChange.replace(/href=\"\/u\//gi,"href=\"http:\/\/reddit.com\/u\/");
            textHrefChange = textHrefChange.replace(/href=\"\/r\//gi,"href=\"http:\/\/reddit.com\/r\/");
          }
          if(choiceOfFunction === null){
            localStorage.setItem('redditLastRetrieved',Date.now());
            localStorage.setItem('youtubeLastRetrieved',Date.now());
            // Change YouTube and Reddit Data

            self.redditThreads[i]={
              domain: nodes[i].data.domain,
              title: nodes[i].data.title,
              url: nodes[i].data.url,
              score: nodes[i].data.score,
              commentsTotal: nodes[i].data.num_comments,
              permalink: nodes[i].data.permalink,
              created: nodes[i].data.created_utc,
              content: textHrefChange,
              author: nodes[i].data.author,
              thumbnail: nodes[i].data.thumbnail,
              redditRank: i + 1 + self.previousRedditLength,
              linkFlair: nodes[i].data.link_flair_css_class,
              authorFlair: nodes[i].data.author_flair_css_class,
              videoEmbed: null,
              after: data.data.after,
            };

            if((redditDomainLink == 'youtube.com' || redditDomainLink == 'youtu.be') && !nodes[i].data.url.match(/user/i) && (nodes[i].data.media !== null)  && (typeof nodes[i].data.media.oembed.url != 'undefined')){
              self.youtubeVids[y] = {
                title: nodes[i].data.title,
                url: nodes[i].data.media.oembed.url,
                videoEmbed: nodes[i].data.media.oembed.url.replace(/watch\?v=/i, 'embed/'),
                score: nodes[i].data.score,
                created: nodes[i].data.created_utc,
                author: nodes[i].data.author,
                commentsTotal: nodes[i].data.num_comments,
                permalink: nodes[i].data.permalink,
                redditRank: i + 1,
                videoRank: y + 1,
                after: data.data.after,
             };
            y++;
            self.redditThreads[i].videoEmbed = nodes[i].data.media.oembed.url.replace(/watch\?v=/i, 'embed/');
            }
            self.nextPageYoutube = data.data.after;
            self.nextPageReddit = data.data.after;
          }
          else if (choiceOfFunction == 'youtube'){
          localStorage.setItem('youtubeLastRetrieved',Date.now());
          // Make changes to youtube data
            if((redditDomainLink == 'youtube.com' || redditDomainLink == 'youtu.be') && !nodes[i].data.url.match(/user/i) && (nodes[i].data.media !== null) && (typeof nodes[i].data.media.oembed.url != 'undefined')){
              self.youtubeVids[y+self.previousYoutubeLength] = {
                title: nodes[i].data.title,
                url: nodes[i].data.media.oembed.url,
                videoEmbed: nodes[i].data.media.oembed.url.replace(/watch\?v=/i, 'embed/'),
                score: nodes[i].data.score,
                created: nodes[i].data.created_utc,
                author: nodes[i].data.author,
                commentsTotal: nodes[i].data.num_comments,
                permalink: nodes[i].data.permalink,
                redditRank: i + 1,
                videoRank: y+self.previousYoutubeLength+1,
                after: data.data.after,
              };
              y++;
             }
             self.nextPageYoutube = data.data.after;
          }else if(choiceOfFunction == 'reddit'){
                      localStorage.setItem('redditLastRetrieved',Date.now());
          // Make changes to reddit data

                self.redditThreads[i+self.previousRedditLength]={
                  domain: nodes[i].data.domain,
                  title: nodes[i].data.title,
                  url: nodes[i].data.url,
                  score: nodes[i].data.score,
                  commentsTotal: nodes[i].data.num_comments,
                  permalink: nodes[i].data.permalink,
                  created: nodes[i].data.created_utc,
                  content: textHrefChange,
                  author: nodes[i].data.author,
                  thumbnail: nodes[i].data.thumbnail,
                  redditRank: i + 1 + self.previousRedditLength,
                  linkFlair: nodes[i].data.link_flair_css_class,
                  authorFlair: nodes[i].data.author_flair_css_class,
                  videoEmbed: null,
                  after: data.data.after,
                };
                if((redditDomainLink == 'youtube.com' || redditDomainLink == 'youtu.be') && !nodes[i].data.url.match(/user/i) && (nodes[i].data.media !== null) && (typeof nodes[i].data.media.oembed.url != 'undefined')){
                  self.redditThreads[i+self.previousRedditLength].videoEmbed = nodes[i].data.media.oembed.url.replace(/watch\?v=/i, 'embed/');
                }
            self.nextPageReddit = data.data.after;
          }
        }
        if(choiceOfFunction != 'youtube'){
          for(var t = 0; t < self.redditThreads.length; t++){
            if(self.redditThreads[t].thumbnail == 'self' || self.redditThreads[t].thumbnail == 'default'){
              self.redditThreads[t].thumbnail = 'assets/img/default.png';
            }
          }
        }
        localStorage.setItem('redditThreads', JSON.stringify(self.redditThreads));
        localStorage.setItem('nextPage',self.nextPageReddit);
        localStorage.setItem('redditSettings', JSON.stringify(self.currentRedditSettings));
        redditDeferred.resolve();
        },

    });

  return redditDeferred.promise();
};


RedditLol.prototype.youtubeArea = function(){

  var self = this;
  var template = Handlebars.compile($('#youtube-template').html());

  if(!self.youtubeVids.length){
          $("#reddit-progress").html('<p>Sorry all out of reddit threads for now</p>');
  }

  for(var i = 0; i<4; i++){
    if (self.youtubeVids.length > self.youtubeCount){

      $("#youtube-threads").append( template(self.youtubeVids[self.youtubeCount]) );
      self.youtubeCount ++;
    }
  }
};

RedditLol.prototype.mainPage = function(useLocalStorage){
  var self = this;
  var template = Handlebars.compile($('#reddit-template').html());

  if(self.redditThreads.length < 25){
    $("#reddit-progress").html('<p>Sorry all out of reddit threads for now</p>');
  }

  var count = 25;
  if (useLocalStorage){
    count = self.redditThreads.length;
  }

  for(var i = 0; i<count; i++){
    if (self.redditThreads.length > self.redditCount){
      $("#reddit-threads").append(template(self.redditThreads[self.redditCount]));
      var $decoder = $(".reddit-expand").eq(self.redditCount).children(".decode");
      $decoder.html($decoder.text());
      self.redditCount ++;
    }
  }
};
function StreamChannels(){
  this.streamers = JSON.parse(localStorage.getItem('streamers'));
  var defaultStreams = [];
  if(!this.streamers){
    localStorage.setItem('streamers', JSON.stringify(defaultStreams));
    this.streamers = JSON.parse(localStorage.getItem('streamers'));
  }

  this.twitchStreamersOnline = [];
  this.topTwitchStreamersOnline = [];
  this.twitchStreamersOffline = [];
  this.azubuStreamersOffline = [];
  this.azubuStreamersOnline = [];
  this.topAzubuStreamersOnline = [];
  this.totalStreamersOnline = 0;
  this.streamerCount = 0;
  this.newAdditions = [];
  this.recentlyAddedAzub = [];
  this.recentlyAddedTwitch = [];

  /// refers to ajax requests and total function calls
  this.currentStreamDisplayed = null;
  this.currentStreamViewers = null;
  this.streamFunctionCount = 0;
  this.topTwitchUrl = "https://api.twitch.tv/kraken/streams?game=League%20of%20Legends&limit=12&offset=0";

  this.noStreamersAdded = (!this.streamers.length) ? true:false;
}

StreamChannels.prototype.submitStreamer = function(newStreamers, streamerType){
  var streamSource;
  var input = '';
  newStreamers = newStreamers.trim();

  if (newStreamers){
    if(streamerType =='azubu'){
      input = newStreamers.replace(/((.*?:\/\/)|beta.azubu.tv\/)|(\s)/gi, "").toLowerCase();
      streamSource = 'azubu';
    } else {
      streamSource = 'twitch';
      input = newStreamers.replace(/((.*?:\/\/)|www.twitch.tv\/)|(\s)/gi, "").toLowerCase();
    }

    if(input){

      var noStreamerMatch = true;

      for(var i=0;i<this.streamers.length;i++){
        if(this.streamers[i].name == input){
          noStreamerMatch = false;
          break;
        }
      }

      if(noStreamerMatch){

        this.streamers[this.streamers.length] = {
          name: input,
          service: streamSource
        };

        if(streamSource=='twitch'){
          this.recentlyAddedTwitch.push(input);
        } else {
          this.recentlyAddedAzub.push(input);
        }
      }

      localStorage.setItem('streamers', JSON.stringify(this.streamers));
      this.noStreamersAdded = (!this.streamers.length) ? true:false;
      return true;
    }
  }

  return false;
};



StreamChannels.prototype.onlineTwitchStreamers = function(){
  var twitchDeferred = $.Deferred();
  var self = this;
  var twitchParams = '';

  if(this.noStreamersAdded){
    localStorage.setItem('twitchStreamersOnline', '[]');
    localStorage.setItem('twitchStreamersOffline', '[]');
    twitchDeferred.resolve();
    return twitchDeferred.promise();
  } else{
    for (var i=0; i<this.streamers.length; i++){
      if(this.streamers[i].service == 'twitch'){
        twitchParams += this.streamers[i].name + ',';
      }
    }


    $.ajax({
      dataType:'jsonp',
      url:'https://api.twitch.tv/kraken/streams?channel='+twitchParams,
      error: function(){
              console.log('Unable to twitch favourites api');
          },
      success: function(data){
        self.twitchStreamersOnline = [];
        if(data.streams){
          for(var i=0;i<data.streams.length;i++){
                        self.twitchStreamersOnline[i] = {
                          name: data.streams[i].channel.name,
                          displayName: data.streams[i].channel.display_name,
                          viewTotal: data.streams[i].viewers,
                          url: data.streams[i].channel.url,
                          thumbnailUrl: data.streams[i].preview.medium,
                          id: i
                        };

                        self.totalStreamersOnline ++;

                    }

                  }
                  localStorage.setItem('totalStreamersOnline', JSON.stringify(self.totalStreamersOnline));
        localStorage.setItem('twitchStreamersOnline', JSON.stringify(self.twitchStreamersOnline));
                  twitchDeferred.resolve();
              },

    });

  return twitchDeferred.promise();
  }
};


StreamChannels.prototype.getAzubuStreamers = function(){
  var azubuDeferred = $.Deferred();
  var self = this;

    $.ajax({
      dataType:'jsonp',
      url:'http://liveleaguestream.com/json.php?method=getAll&jsoncallback=?',
      error: function(){
              console.log('Unable to load azubu api');
          },
      success: function(data){
        var onlineCount = 0;
        var offlineCount = 0;
        var totalOnlineCount = 0;
        self.topAzubuStreamersOnline = [];
        self.azubuStreamersOnline = [];
        self.azubuStreamersOffline = [];


          for(var i=0;i<data.length;i++){


            if(data[i].Online != '0'){

              var accountFollowed = false;

              for(var t=0;t<self.streamers.length;t++){
                if (data[i].Name.toLowerCase() == self.streamers[t].name.toLowerCase()){
                  accountFollowed = true;
                  break;
                }
              }

              self.topAzubuStreamersOnline[totalOnlineCount] = {
                name: data[i].Name,
                count: totalOnlineCount,
                viewTotal: data[i].Viewer,
                online: true,
                isAlreadyAdded: accountFollowed
              };
              totalOnlineCount ++;

              for(var y = 0;y<self.streamers.length;y++){
                if (self.streamers[y].name.toLowerCase() == data[i].Name.toLowerCase()){
                  self.azubuStreamersOnline[onlineCount] = {
                    name: data[i].Name,
                    viewTotal: data[i].Viewer,
                    online: true,
                  };
                  onlineCount ++;
                  self.totalStreamersOnline ++;
                }
              }


            } else {
              for(var z = 0;z<self.streamers.length;z++){
                if (self.streamers[z].name.toLowerCase() == data[i].Name.toLowerCase()){
                  self.azubuStreamersOffline[offlineCount] = {
                    name: data[i].Name,
                    online: false,
                    // check if json records thumbnail of player or viewer count
                  };
                  offlineCount ++;
                }
              }
            }
          }
          localStorage.setItem('totalStreamersOnline', JSON.stringify(self.totalStreamersOnline));
          localStorage.setItem('topAzubuStreamersOnline', JSON.stringify(self.topAzubuStreamersOnline));
          localStorage.setItem('azubuStreamersOnline', JSON.stringify(self.azubuStreamersOnline));
          localStorage.setItem('azubuStreamersOffline', JSON.stringify(self.azubuStreamersOffline));
          azubuDeferred.resolve();
        },
    });

  return azubuDeferred.promise();
};


StreamChannels.prototype.topTwitchOnline = function(clearStreams){
  var twitchDeferred = $.Deferred();
  var self = this;
  $(".stream-loading").css('display','inline');

  if(this.topTwitchUrl){

    $.ajax({
      dataType:'jsonp',
      url: self.topTwitchUrl,
      error: function(){
              console.log('Unable to load top twitch streamers feed.');
          },
      success: function(data){
        if(clearStreams){
          self.topTwitchStreamersOnline = [];
        }
        self.topTwitchUrl = data._links.next; 
        var totalLength = self.topTwitchStreamersOnline.length;
        localStorage.setItem('streamsLastRetrieved', Date.now());
        
        if(data.streams){
          for(var i=0;i<data.streams.length;i++){

            //work out if someone is already following this account
            var accountFollowed = false;
            for(var t=0;t<self.twitchStreamersOnline.length;t++){
              if (data.streams[i].channel.name == self.twitchStreamersOnline[t].name){
                accountFollowed = true;
                break;
              }
            }

            self.topTwitchStreamersOnline[totalLength+i] = {
              name: data.streams[i].channel.name,
              displayName: data.streams[i].channel.display_name,
              viewTotal: data.streams[i].viewers,
              thumbnailUrl: data.streams[i].preview.medium,
              url: data.streams[i].channel.url,
              isAlreadyAdded: accountFollowed,
              id: totalLength+i,
            };
          }
        }
        localStorage.setItem('topTwitchStreamersOnline', JSON.stringify(self.topTwitchStreamersOnline));
        $(".stream-loading").css('display','none');
        twitchDeferred.resolve();
      },
    });
  }
  return twitchDeferred.promise();
};


StreamChannels.prototype.offlineTwitchStreamers = function(){
  this.twitchStreamersOffline = [];
  this.twitchStreamersOffline = this.streamers.slice(0);

  var azubuPos = [];
  for(var z = 0;z<this.streamers.length;z++){
    if(this.twitchStreamersOffline[z].service != 'twitch'){
      azubuPos.push(z);
    }
  }
  azubuPos.reverse();
  for (var y = 0; y<azubuPos.length; y++ ){
    this.twitchStreamersOffline.splice(azubuPos[y], 1);
  }

  for (var i=0; i<this.twitchStreamersOnline.length; i++) {

    var index;

    for (var t = 0; t<this.twitchStreamersOffline.length; t++ ){
       if(this.twitchStreamersOffline[t].name == this.twitchStreamersOnline[i].name){
           index = t;
       }
    }

      if (index > -1) {
           this.twitchStreamersOffline.splice(index, 1);
      }
  }

  localStorage.setItem('twitchStreamersOffline', JSON.stringify(this.twitchStreamersOffline));

};


StreamChannels.prototype.removeStreamer = function(deleteStreamer){
  var input = deleteStreamer.toString().toLowerCase();
  //check if I can get rid of toLowerCase!!

  if(input){

    for (var i=0; i<this.streamers.length; i++) {
      if(this.streamers[i].name.toLowerCase() == input.toLowerCase()){
        this.streamers.splice(i, 1);
      }
    }

    localStorage.setItem('streamers', JSON.stringify(this.streamers));
    this.noStreamersAdded = (!this.streamers.length)?true:false;
    return true;
  }

  return false;
};

StreamChannels.prototype.pushTwitchStreams = function(twitchNumber, twitchType, twitchObj){
  var self = this;
  var template = Handlebars.compile($('#twitch-template').html());
  twitchNumber = twitchNumber || 0;

  if(twitchType == 'top'){
    $("#twitch-online-content").html( template(self.topTwitchStreamersOnline[twitchNumber]) );
    self.currentStreamDisplayed = self.topTwitchStreamersOnline[twitchNumber].name;
    self.currentStreamViewers = self.topTwitchStreamersOnline[twitchNumber].viewTotal;
  } else if(self.twitchStreamersOnline.length>0) {
    $("#twitch-online-content").html( template(self.twitchStreamersOnline[twitchNumber]) );
    self.currentStreamDisplayed = self.twitchStreamersOnline[twitchNumber].name;
    self.currentStreamViewers = self.twitchStreamersOnline[twitchNumber].viewTotal;
  }
};

StreamChannels.prototype.pushStreamsHeader = function(){
  var self = this;

    for(var i = 0; i<self.topTwitchStreamersOnline.length; i++){
      if (self.topTwitchStreamersOnline[i].name === 'riotgames' && appSettings.eSportsNotifications === 'on'){
        var riotTemplate = Handlebars.compile($('#riot-online-message-template').html());
        $("#riot-online").html(riotTemplate());
        $('#top-header-message').css('padding','14px');
      }
    }
};

StreamChannels.prototype.pushTwitchStreamers = function(favourite, azubu){
  var self = this;

  if(favourite === undefined){
    var onlineTemplate = Handlebars.compile($('#twitch-users-online-template').html());
    var offlineTemplate = Handlebars.compile($('#twitch-users-offline-template').html());
    $("#twitch-list-online").html( onlineTemplate(self.twitchStreamersOnline) );
    $("#twitch-list-offline").html( offlineTemplate(self.twitchStreamersOffline) );
  } else{
    var favouriteTemplateTwitch = Handlebars.compile($('#twitch-user-favourited-online-template').html());
    $("#twitch-list-online").append( favouriteTemplateTwitch(self.topTwitchStreamersOnline[favourite]) );
  }
};

StreamChannels.prototype.pushAzubuStreamers = function(favourite){
  var self = this;

  if(favourite === undefined){
    var onlineTemplate = Handlebars.compile($('#azubu-users-online-template').html());
    var offlineTemplate = Handlebars.compile($('#azubu-users-offline-template').html());
    var topTemplate = Handlebars.compile($('#azubu-top-online-template').html());
    $("#azubu-top-streamers").html( topTemplate(self.topAzubuStreamersOnline) );
    $("#azubu-list-online").html( onlineTemplate(self.azubuStreamersOnline) );
    $("#azubu-list-offline").html( offlineTemplate(self.azubuStreamersOffline) );
  } else{
    var favouriteTemplateAzubu = Handlebars.compile($('#azubu-users-favourited-online-template').html());
    $("#azubu-list-online").append( favouriteTemplateAzubu(self.topAzubuStreamersOnline[favourite]) );
  }
};

StreamChannels.prototype.pushTopStreamerOnline = function(topStreamerName, addAccount, addStream){
  var self = this;

  if(addStream){
    addStream = Handlebars.compile($('#twitch-template').html());

    for(var i = 0; i<self.topTwitchStreamersOnline.length; i++){
      if (self.topTwitchStreamersOnline[i].name == topStreamerName){
        $("#twitch-online-content").prepend(addStream(self.topTwitchStreamersOnline[i]));
      }
    }
  }

  if(addAccount){
    var onlineTemplate = Handlebars.compile($('#twitch-add-user-online-template').html());

    for(var j = 0; j<self.topTwitchStreamersOnline.length; j++){
      if (self.topTwitchStreamersOnline[j].name == topStreamerName){
        $("#twitch-list-online").append(onlineTemplate(self.topTwitchStreamersOnline[j]));
      }
    }
  }
};

StreamChannels.prototype.currentStreamOnline = function(){
  for(var i = 0; i<this.topTwitchStreamersOnline.length; i++){
    if(this.topTwitchStreamersOnline[i].name == this.currentStreamDisplayed){
      return true;
    }
  }
  for(var t = 0; t<this.twitchStreamersOnline.length; t++){
    if(this.twitchStreamersOnline[t].name == this.currentStreamDisplayed){
      return true;
    }
  }
  return false;
};

StreamChannels.prototype.pushTopTwitchStreamers = function(appendToBottom){
  var self = this;
  var onlineTemplate = Handlebars.compile($('#twitch-top-online-template').html());
  if(!appendToBottom){
      $("#twitch-top-streamers").html(' ');
    for(var i=0; i<self.topTwitchStreamersOnline.length; i++){
      $("#twitch-top-streamers").append( onlineTemplate(self.topTwitchStreamersOnline[i]) );
    }
  } else {
    var t = self.topTwitchStreamersOnline.length - 12;
    for(t; t<self.topTwitchStreamersOnline.length; t++){
      $("#twitch-top-streamers").append( onlineTemplate(self.topTwitchStreamersOnline[t]) );
    }
  }
};

StreamChannels.prototype.favouriteStreamerMessage = function(favAzubu, favTwitch){
    var totalAdditions = 0;
    this.newAdditions = [];

    for(var i = 0; i<this.azubuStreamersOnline.length; i++){

      var alreadyAddedAzub = false;

      for(var y=0;y<favAzubu.length;y++){
        if(favAzubu[y].name == this.azubuStreamersOnline[i].name){
          alreadyAddedAzub = true;
          break;
        }
      }

      if(!alreadyAddedAzub){
        var summonerRecentlyAddedAzub = false;
        for(var z=0;z<this.recentlyAddedAzub.length;z++){
          if(this.recentlyAddedAzub[z]==this.azubuStreamersOnline[i].name){
            summonerRecentlyAddedAzub = true;
            break;
          }
        }
        if(!summonerRecentlyAddedAzub){
          this.newAdditions[totalAdditions] = {
            name:this.azubuStreamersOnline[i].name,
            id:this.azubuStreamersOnline[i].id,
            azubu:true,
          };
          totalAdditions ++;
        }
      }
    }

    for(var t = 0; t<this.twitchStreamersOnline.length; t++){
      var alreadyAddedTwitch = false;

      for(var v=0;v<favTwitch.length;v++){
        if(favTwitch[v].name == this.twitchStreamersOnline[t].name){
          alreadyAddedTwitch = true;
          break;
        }
      }

      if(!alreadyAddedTwitch){
        var summonerRecentlyAddedTwitch = false;
        for(var w=0;w<this.recentlyAddedTwitch.length;w++){
          if(this.recentlyAddedTwitch[w]==this.twitchStreamersOnline[t].name){
            summonerRecentlyAddedTwitch = true;
            break;
          }
        }
        if(!summonerRecentlyAddedTwitch){
          this.newAdditions[totalAdditions] = {
            name:this.twitchStreamersOnline[t].name,
            id:null,
            twitch:true,
          };
          totalAdditions ++;
        }
      }
    }

    if(totalAdditions>0){
      if(appSettings.twitchAudioNotifications === 'on'){
        $("#sound").html('<audio controls autoplay style="display:none"><source src="assets/sound/notify.mp3" hidden="true" autostart="true" loop="false" type="audio/mpeg"></audio>');
      }

      if(appSettings.twitchVisualNotifications === 'on'){
        var favouriteTemplate = Handlebars.compile($('#streamer-online-message-template').html());
        $("#favourite-online").html( favouriteTemplate(this.newAdditions) );
        $('#top-header-message').css('padding','14px');

      }
    }
};

function WebInterface(){
  this.youtubeInUse = '';
  this.redditInUse = '';
  this.twitchInUse = '';
  this.redditStyleSheet = false;
  this.tabSystemProcessed = 0;
  this.homePageAccessed = false;
  
  this.pageChange = JSON.parse(localStorage.getItem('pageChange')) || [];
  this.pageAdd = JSON.parse(localStorage.getItem('pageAdd')) || [];

  if(this.pageChange.length>0){
    var inlineBlockArray = [];

    for(var z = 0; z < this.pageChange.length; z++){

      if(this.pageChange[z].display=='none'){
        $('li.website-control[data-id="'+this.pageChange[z].id+'"] .remove-website').removeClass().addClass('add-website');
        $('.nav-button[data-name="'+this.pageChange[z].id+'"]').css('display','none');
      } else {
        $('li.website-control[data-id="'+this.pageChange[z].id+'"] .add-website').removeClass().addClass('remove-website');
        $('.nav-button[data-name="'+this.pageChange[z].id+'"]').css('display','block');
        inlineBlockArray.push(z);
      }
    }
    var that = this;
    var changeToInline = function(){
      for (var y = 0; y < inlineBlockArray.length; y++){
        $('.nav-button[data-name="'+that.pageChange[inlineBlockArray[y]].id+'"]').css('display','inline-block');
      }
    };

    setTimeout(changeToInline, 120);
  }

  if(this.pageAdd.length>0){
    var self = this;
    var addWebsite = Handlebars.compile($('#new-website-template').html());
    var addWebsiteSettings = Handlebars.compile($('#remove-website-template').html());

    for(var y = 0; y < this.pageAdd.length; y++){
      $("#miscbuttons ul").append( addWebsite(self.pageAdd[y]));
      $("#general-websites").append( addWebsiteSettings(self.pageAdd[y]));
    }
  }
}

WebInterface.prototype.hashWithoutParams = function(totalUrl){
  var params = [];
  if(totalUrl){
    var urlArray = window.location.href;
    var questionIndex = urlArray.indexOf("?");
    var hashIndex = urlArray.indexOf("#");

    if ((questionIndex == -1 && hashIndex == -1) || (questionIndex == -1 && hashIndex != -1)){
      if(hashIndex == -1){
        params[0] = urlArray;
      } else{
        var determineHash = urlArray.split("#");
        params[0] = determineHash[1].length>0 ? window.location.href : determineHash[0];
      }

    } else {
      if(questionIndex != -1 && hashIndex == -1){
        params = urlArray.split("?");
      } else {
        if (questionIndex - hashIndex == 1){
          params = urlArray.split("#");
        } else {
          params[0] = urlArray;
        }
      }
    }
  } else {
    params = (window.location.hash.substring(1)).split("?");
  }
  return params[0];
};

WebInterface.prototype.checkIfBelongs = function(optionalClass, highlightArea){
  this.homePageAccessed = false;

  var area = optionalClass || '';
  var iFrameCapableLinks = $(".iframe-capable" + area);
  var hashWithoutParamsVal = this.hashWithoutParams().toString();

  for(var i = 0; i < iFrameCapableLinks.length; i++){

    var iFrameCapableLink = iFrameCapableLinks.eq(i);
    var hashData = iFrameCapableLink.data('name');
    if(hashData !== undefined){
      hashData = hashData.toString();
    }

    if((hashData === hashWithoutParamsVal) || (hashData == appSettings.ezHomePage && this.homePage()) ){
      if(highlightArea){

        $(".nav-button[data-name=\""+hashData+"\"] li").addClass('selected-link');
      }
      return iFrameCapableLink.attr('href');

    }
  }
  return false;
};

WebInterface.prototype.makeIframe = function(iframeUrl){
  var lang = 'en';
  var $iFrameHolder = $("#iframe-holder");
  var heightToProcess = $(window).height()-4;
  var heightToProcess2 = heightToProcess - 16;

  if(iframeUrl.match(/reddit.com/ig)){
    iframeUrl = iframeUrl.replace(/reddit\.com/ig, 'redditjs.com');
  } else if(iframeUrl.match(/inven/ig)){
    lang = 'ko';
  }
  $("#main-content").css( "display", "none" );


  $iFrameHolder.css('height', heightToProcess2 + 'px');
  $iFrameHolder.html('<iframe allowfullscreen="true" lang="'+lang+'" id="iframe-content" src="'+iframeUrl+'" style="width:100%;height:'+heightToProcess+'px;border:none;padding:none;margin:none"><p>Your browser does not support iframes.</p></iframe>').fadeIn();
};

WebInterface.prototype.changeIframeHeight = function(){
  if($("#main-content").css("display")=='none'){

    var heightToProcess = $(window).height()-4;
    var heightToProcess2 = heightToProcess - 16;
    $("#iframe-holder").css('height', heightToProcess2 + 'px');
    $("#iframe-content").css('height', heightToProcess + 'px');

  }
};

WebInterface.prototype.changeTwitchDimensions = function(){

  var spacing = 440;
  var twitchWidth = $(window).width()-spacing-($(".twitch-chat-area").width());

  if(detectmob()){
    spacing = 50;
    twitchWidth = $(window).width()-spacing;
  } else if ($('#sidebar').css('display') == 'none'){
    spacing = 90;
    twitchWidth = $(window).width()-spacing-($(".twitch-chat-area").width());
  }

  var twitchHeight = (twitchWidth/16)*9;


  $(".twitch-video").css({
     width : twitchWidth,
     height : twitchHeight + 'px'
  });

  $(".twitch-chat").css('height', twitchHeight + 'px');
  $(".twitch-chat-area").css('height', twitchHeight + 'px');
};

WebInterface.prototype.setSettings = function(){

  homePageDetector();
  var $ezHomePage = $(".ezHomePage");
  $ezHomePage.html(' ');

  var template = Handlebars.compile($('#homepage-list-template').html());
  $ezHomePage.append( template(idList.general));
  $ezHomePage.append( template(idList.summoner));
  $ezHomePage.append( template(idList.champ));

  if(appSettings.youtubeDisplay == 'fillscreen'){
    $('style').html('');
  } else {
    $('style').html('.youtube-thread{width: 85%;max-width:720px;display:block}' );
  }

  $ezHomePage.val(appSettings.ezHomePage);
  $(".redditNewTab").val(appSettings.redditNewTab);
  $(".youtubeDisplay").val(appSettings.youtubeDisplay);
  $(".twitchVisualNotifications").val(appSettings.twitchVisualNotifications);
  $(".twitchAudioNotifications").val(appSettings.twitchAudioNotifications);
  $(".eSportsNotifications").val(appSettings.eSportsNotifications);
  $(".defaultNameLink").val(appSettings.defaultNameLink);
  $(".shiftNameLink").val(appSettings.shiftNameLink);
  $(".ctrlNameLink").val(appSettings.ctrlNameLink);
  $(".defaultChampLink").val(appSettings.defaultChampLink);
  $(".shiftChampLink").val(appSettings.shiftChampLink);
  $(".ctrlChampLink").val(appSettings.ctrlChampLink);
  $(".defaultSearchLink").val(appSettings.defaultSearchLink);
  $(".shiftSearchLink").val(appSettings.shiftSearchLink);
  $(".ctrlSearchLink").val(appSettings.ctrlSearchLink);
  $(".smartEnter").val(appSettings.smartEnter);
  $(".newWindow").val(appSettings.newWindow);
};

WebInterface.prototype.saveSettings = function(){
  appSettings.ezHomePage = $(".ezHomePage").val();
  appSettings.redditNewTab = $(".redditNewTab").val();
  appSettings.youtubeDisplay = $(".youtubeDisplay").val();
  appSettings.twitchVisualNotifications = $(".twitchVisualNotifications").val();
  appSettings.twitchAudioNotifications = $(".twitchAudioNotifications").val();
  appSettings.eSportsNotifications = $(".eSportsNotifications").val();
  appSettings.defaultNameLink = $(".defaultNameLink").val();
  appSettings.shiftNameLink = $(".shiftNameLink").val();
  appSettings.ctrlNameLink = $(".ctrlNameLink").val();
  appSettings.defaultChampLink = $(".defaultChampLink").val();
  appSettings.shiftChampLink = $(".shiftChampLink").val();
  appSettings.ctrlChampLink = $(".ctrlChampLink").val();
  appSettings.defaultSearchLink = $(".defaultSearchLink").val();
  appSettings.shiftSearchLink = $(".shiftSearchLink").val();
  appSettings.ctrlSearchLink = $(".ctrlSearchLink").val();
  appSettings.smartEnter = $(".smartEnter").val();
  appSettings.newWindow = $(".newWindow").val();
  localStorage.setItem('appSettings', JSON.stringify(appSettings));
};

WebInterface.prototype.registerScreen = function(){
  if(detectmob()){
    $('#sidebar').addClass('clear').css({'position':'relative', 'width':'100%', 'height':'auto'});
    $('#sidebar-content').css('position','relative');
    $('#main-content, #iframe-holder').css('margin-left','0px');
    $('.nav-expand').removeAttr('style').addClass('nav-expand-mobile');
    $('.champtionbuttons').css('padding-bottom','30px');

  } else {
    var $sidebar = $('#sidebar');
    $sidebar.perfectScrollbar({supressScrollX:true, wheelSpeed:40});
    $('#champ-drop').perfectScrollbar({wheelSpeed:25,useKeyboard:true});

    $('.nav-expand').removeClass('nav-expand-mobile');
    $sidebar.css({'position':'', 'width':'', 'height':''});
    $('#sidebar-content, .nav-expand').removeAttr('style');
    $('#iframe-holder, #main-content').css('margin-left',' ');
    $('.championbuttons').css('padding-bottom','0px');

    if($sidebar.css('display') == 'none'){
      $('#main-content, #iframe-holder').css('margin-left','0px');
      $('.nav-expand').css('left','0px');
    }
  }
};

WebInterface.prototype.homePage = function(){
  if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
  }
  if (this.hashWithoutParams(true) == window.location.origin+"/"){
    this.homePageAccessed = true;
    return true;
  } else{
    this.homePageAccessed = false;
    return false;
  }
};

WebInterface.prototype.rearangeSidebar = function(){
   if(idList.hasOwnProperty('search')){
     for(var i=0; i<idList.search.length; i++){
       if(i===0){ 
         $("#searchbuttons").prepend($('.nav-button[data-name="'+idList.search[i].id+'"]'));
         $("#search-websites").prepend($('.website-control[data-id="'+idList.search[i].id+'"]'));
       } else {
         $("#searchbuttons a").eq(i).after($('.nav-button[data-name="'+idList.search[i].id+'"]'));
         $("#search-websites li").eq(i).after($('.website-control[data-id="'+idList.search[i].id+'"]'));
       }
     }
   }
   for(var j=0; j<idList.general.length; j++){
     if(j===0){
       $("#miscbuttons ul").prepend($('.nav-button[data-name="'+idList.general[j].id+'"]'));
       $("#general-websites").prepend($('.website-control[data-id="'+idList.general[j].id+'"]'));
     } else {
       $("#miscbuttons ul a").eq(j).after($('.nav-button[data-name="'+idList.general[j].id+'"]'));
       $("#general-websites li").eq(j).after($('.website-control[data-id="'+idList.general[j].id+'"]'));
     }
   }
   for(var k=0; k<idList.summoner.length; k++){
     if(k===0){
       $("#namebuttons ul").prepend($('.nav-button[data-name="'+idList.summoner[k].id+'"]'));
       $("#summoner-websites").prepend($('.website-control[data-id="'+idList.summoner[k].id+'"]'));
     } else {
       $("#namebuttons ul a").eq(k).after($('.nav-button[data-name="'+idList.summoner[k].id+'"]'));
       $("#summoner-websites li").eq(k).after($('.website-control[data-id="'+idList.summoner[k].id+'"]'));
     }
   }
   for(var l=0; l<idList.champ.length; l++){
     if(l===0){
       $("#championbuttons ul").prepend($('.nav-button[data-name="'+idList.champ[l].id+'"]'));
       $("#champ-websites").prepend($('.website-control[data-id="'+idList.champ[l].id+'"]'));
     } else {
       $("#championbuttons ul a").eq(l).after($('.nav-button[data-name="'+idList.champ[l].id+'"]'));
       $("#champ-websites li").eq(l).after($('.website-control[data-id="'+idList.champ[l].id+'"]'));
     }
   }
};

WebInterface.prototype.saveSidebar = function(category){
  var self = this;
  function sidebarAreaSave(category){
    var changedWebsites = category.children('li');
    var newGeneralArray = [];
    for(var i = 0; i<changedWebsites.length; i++){
      newGeneralArray[i] = {
        name:changedWebsites.eq(i).data('name'),
        id:changedWebsites.eq(i).data('id')
      };
    }

    if(category.prop("id") == "search-websites"){
      idList.search = newGeneralArray;
    } else if(category.prop("id") == "general-websites"){
      idList.general = newGeneralArray;
    } else if(category.prop("id") == "summoner-websites"){
      idList.summoner = newGeneralArray;
    } else if (category.prop("id") == "champ-websites"){
      idList.champ = newGeneralArray;
    }

    localStorage.setItem('idList',JSON.stringify(idList));

    self.rearangeSidebar();
  }

  if(category != 'all'){
    sidebarAreaSave(category);
  } else if(category == 'all' && localStorage.getItem('idList')) {
    sidebarAreaSave($('ul#search-websites'));
    sidebarAreaSave($('ul#general-websites'));
    sidebarAreaSave($('ul#summoner-websites'));
    sidebarAreaSave($('ul#champ-websites'));
    idList = JSON.parse(localStorage.getItem('idList'));
    return true;
  }
  return false;
};

WebInterface.prototype.testIfSearchShouldBeShown = function(){
  var listOfSearch = $("ul#search-websites li");
  var listAdded = false;

  for(var i = 0; i < listOfSearch.length; i++){

    var item = listOfSearch.eq(i);
    var onlineInfo = item.children().hasClass('remove-website');

    if (onlineInfo){
      listAdded = true;
      break;
    }
  }

  if(listAdded){
    $("#searchbuttonshold").css('display','block');
  } else {
    $("#searchbuttonshold").css('display','none');
  }
};

WebInterface.prototype.enableRedditStyleSheet = function(){
  if(!this.redditStyleSheet){
    this.redditStyleSheet = true;
    $('body').append('<link href="assets/css/reddit.css" media="screen" rel="stylesheet" />');
  }
};
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
        url = $("a[data-name='"+appSettings.ezHomePage+"']").attr('href');
        $("a[data-name='"+appSettings.ezHomePage+"'] li").addClass('selected-link');
      } else {
        
        league.name = league.getUrlParams('name') || localStorage.getItem('name');
        league.server = league.getUrlParams('server') || localStorage.getItem('server');
        league.champ = league.getUrlParams('champ') || localStorage.getItem('champ');

        league.account(league.name, league.server, true);
        league.champion(league.champ);

        url = web.checkIfBelongs(null, true);
        console.log(url);
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

$( window ).resize(function() {
  web.changeIframeHeight();
  web.changeTwitchDimensions();
  web.registerScreen();
});

/////// controls up to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#back-top').fadeIn();
    } else {
      $('#back-top').fadeOut();
    }
  });

$('#back-top a').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 700);
  return false;
});

$("#sidebar-content").on('click','.iframe-capable', function(e){

  if(e.which !== 2){
    if(!detectmob()){
      e.preventDefault();
      $this = $(this);
      $("#main-content").fadeOut();

      var url = $this.attr('href');
      var dataName = $this.data('name');

      web.makeIframe(url);

      if($this.hasClass('website-name')){
        history.pushState("", "", "#" + dataName + "?name=" + encodeURIComponent(league.name) + "&server=" + encodeURIComponent(league.server));
      } else if($this.hasClass('website-champ')){
        history.pushState("", "", "#" + dataName + "?champ=" + encodeURIComponent(league.champ));
      } else{
        history.pushState("", "", "#" + dataName);
      }
    }
  }
});

$(".no-iframe").on('click', function(e){
  if(e.which !== 2){
    $("#main-content").css("display","block");
    $("#iframe-holder").css("display","none");
  }
});

var stopRepeating = 1; // this stops multiple retrievals for json if user scrolls

$(window).on('scroll', function(){
  if ($(window).scrollTop() >= ($(document).height() - $(window).height())-200){

    if($("#reddit-content").css('display')!='none'){

      if(reddit.redditCount!=reddit.redditThreads.length){
        reddit.mainPage();
      } else{
        if(reddit.nextPageReddit === null){
          $("#reddit-progress").html('<p>Sorry all out of reddit threads for now</p>');
        }
        else if(stopRepeating === 1){
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


        if(reddit.nextPageYoutube === null){
          $("#youtube-progress").html('<p>Sorry all out of reddit threads for now</p>');
        }
        else if(stopRepeating === 1){
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

$("#redditthreads, #youtube, #twitch, #settings").on('click', function(){
  if(detectmob()){
    $('#sidebar').slideUp();
  }
});

$("#sidebar").on('click', 'a:not(.external-link).nav-button', function(e){
  if(e.which !== 2){
    $(".nav-button li").removeClass('selected-link');
    $(this).children('li').addClass('selected-link');
    
    if(!$(this).is('#youtube')){
      $("#youtube-threads").html(' ');  
      reddit.youtubeVids = [];
      reddit.youtubeCount = 0;
      reddit.currentYoutubeSettings = [null,'leagueoflegends','hot',null];
      reddit.nextPageYoutube = '';
      web.youtubeInUse = 'no';
    }
    
    ga('send', 'pageview', "#" + web.hashWithoutParams());
  }
  if(!isBuggedChrome){
  	$('#ezggadvertisement').html('<iframe src="http://ib.adnxs.com/tt?id=2359794&referrer=2ez.gg" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0" allowtransparency="true" width="300" height="250"></iframe>');
  }
});

$('.tooltip').tipsy({gravity: 'w'});
$('.settings-tooltip').tipsy({gravity: 'e'});


$("#youtube").on('click',function(e){
  if(e.which !== 2){
    e.preventDefault();
    var dataName = $(this).data('name');
    history.pushState("", "", "#" + dataName);
    
    if(web.youtubeInUse == 'no' || ((parseInt(localStorage.getItem('youtubeLastRetrieved')) + 1000*60*30) <= Date.now())){
      if(typeof reddit.redditAjaxRequest !== 'undefined'){
        if(reddit.redditAjaxRequest && reddit.redditAjaxRequest.readyState !== 4){
                reddit.redditAjaxRequest.abort();
                if(!reddit.redditThreads.length){
                    web.redditInUse = 'no';
                }
            }
        }
      reddit.currentYoutubeSettings[0] = 'youtube';
      reddit.getThreads(reddit.currentYoutubeSettings[0],reddit.currentYoutubeSettings[1],reddit.currentYoutubeSettings[2],reddit.currentYoutubeSettings[3],reddit.nextPageYoutube).done(function() {
        reddit.youtubeArea();
        if($(window).height() > 1080){
          reddit.youtubeArea();
        }
      });
      web.youtubeInUse = 'yes';
    } else if(web.youtubeInUse == 'contentAvailable'){
      reddit.youtubeArea();
      if($(window).height() > 1080){
          reddit.youtubeArea();
      }
    }
    $("#iframe-holder").html(' ');
    $("header").css({'height':'100px','display':'block'});
    $("#youtube-content").css("display","block");
    $("#reddit-content").css("display","none");
    $("#twitch-content").css("display","none");
    $("#settings-content").css("display","none");
  }
});


$("#twitch").on('click',function(e){
  if(e.which !== 2){
    e.preventDefault();
    if((parseInt(localStorage.getItem('streamsLastRetrieved')) + 1000*60*8) <= Date.now()){
      streamEvents();
    }
    $(window).scrollTop(0);
    $("#iframe-holder").html(' ');
    $("header").css({'height':'28px','display':'block'});
    $("#twitch-content").css("display","block");
    $("#reddit-content").css("display","none");
    $("#youtube-content").css("display","none");
    $("#settings-content").css("display","none");
    var dataName = $(this).data('name');
    history.pushState("", "", "#" + dataName);
    
  }
});


$("#settings").on('click',function(e){
  if(e.which !== 2){
    e.preventDefault();
    $(window).scrollTop(0);
    $("#iframe-holder").html(' ');
    $("header").css({'height':'28px','display':'block'});
    $("#twitch-content").css("display","none");
    $("#reddit-content").css("display","none");
    $("#youtube-content").css("display","none");
    $("#settings-content").css("display","block");
    web.setSettings();
    $('.settings-update').removeClass('setting-updated');
    $('.settings-update').attr('value','Update Settings');

    var dataName = $(this).data('name');
    history.pushState("", "", "#" + dataName);
    
  }
});



$("#redditthreads").on('click',function(e){
  if(e.which !== 2){
    e.preventDefault();
    web.enableRedditStyleSheet();

    var dataName = $(this).data('name');
    history.pushState("", "", "#" + dataName);
    

    if(web.redditInUse == 'no' || ((parseInt(localStorage.getItem('redditLastRetrieved')) + 1000*60*30) <= Date.now())){
      $("#reddit-threads").html(' ');
      $("#reddit-progress").html('<img src="assets/img/loader.gif" />');


      reddit.currentRedditSettings = ['reddit','leagueoflegends','hot',null];
      reddit.redditThreads = [];
      reddit.redditCount = 0;
      reddit.nextPageReddit = null;

      reddit.getThreads(reddit.currentRedditSettings[0],reddit.currentRedditSettings[1],reddit.currentRedditSettings[2],reddit.currentRedditSettings[3],reddit.nextPageReddit).done(function() {
         reddit.mainPage();
       });
      web.redditInUse = 'yes';

    }
  reddit.displayAbout();
  $("#iframe-holder").html(' ');
  $("header").css({'height':'100px','display':'block'});
  $("#reddit-content").css("display","block");
  $("#youtube-content").css("display","none");
  $("#twitch-content").css("display","none");
  $("#settings-content").css("display","none");
  }
});

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

$('#settings-content').on('click','.add-website', function(){
  var $this = $(this);
  $this.removeClass('add-website');
  $this.addClass('remove-website');

  $('.nav-button[data-name="'+$this.parent().data('id')+'"]').css('display','block');
  var notAdded = true;
  var totalSettingsLength = web.pageChange.length;
  for(var i =0; i<totalSettingsLength; i++){
    if(web.pageChange[i].id == $this.parent().data('id')){
      web.pageChange[i].display = 'inline-block';
      notAdded = false;
      break;
    }
  }
  if (notAdded){
    web.pageChange[totalSettingsLength] = {
      id : $this.parent().data('id'),
      display : 'inline-block'
    };
  }
  localStorage.setItem('pageChange', JSON.stringify(web.pageChange));
  setTimeout(function(){
    $('.nav-button[data-name="'+$this.parent().data('id')+'"]').css('display','inline-block');
  }, 300);
  web.testIfSearchShouldBeShown();
});

$('#settings-content').on('click','.remove-website', function(){
  var $this = $(this);
  $this.removeClass('remove-website');
  $this.addClass('add-website');
  $('.nav-button[data-name="'+$this.parent().data('id')+'"]').css('display','none');

  var notAdded = true;
  var totalSettingsLength = web.pageChange.length;
  for(var i =0; i<totalSettingsLength; i++){
    if(web.pageChange[i].id == $this.parent().data('id')){
      web.pageChange[i].display = 'none';
      notAdded = false;
      break;
    }
  }
  if (notAdded){
    web.pageChange[totalSettingsLength] = {
      id : $this.parent().data('id'),
      display : 'none'
    };
  }
  localStorage.setItem('pageChange', JSON.stringify(web.pageChange));
  web.testIfSearchShouldBeShown();
});

$('.add-user-website').on('click', function(){
  var totalPages = web.pageAdd.length;
  var previousEntry = (totalPages>0)?((web.pageAdd[totalPages-1].id)+1):totalPages;
  var iframeResult = $('.user-website-iframe').is(':checked')?true:false;
  web.pageAdd[totalPages] = {
    name: $('.user-website-name').val(),
    id: previousEntry,
    href: $('.user-website-url').val()
  };
  idList.general[idList.general.length] = {
    name: $('.user-website-name').val(),
    id: previousEntry
  };

  if(iframeResult){
    web.pageAdd[totalPages].iframe = true;
  }

  localStorage.setItem('pageAdd', JSON.stringify(web.pageAdd));
  localStorage.setItem('idList', JSON.stringify(idList));

  $('.iframe-tester').html('');
  $('.user-website-name').val('');
  $('.user-website-url').val('');

  var addWebsite = Handlebars.compile($('#new-website-template').html());
  $("#miscbuttons ul").append( addWebsite(web.pageAdd[totalPages]));

  var addWebsiteSettings = Handlebars.compile($('#remove-website-template').html());
  $("#general-websites").append( addWebsiteSettings(web.pageAdd[totalPages]));

  web.setSettings();
});

$('.test-user-website').on('click', function(){
  var $userUrl = $('.user-website-url').val();
  if($userUrl.length>0){ 
    if($userUrl.match(/reddit.com/ig)){
    $userUrl = $userUrl.replace(/reddit\.com/ig, 'redditjs.com');
    }
    $('.iframe-tester').html('<iframe src="'+$userUrl+'" style="width:300px;height:400px;border:none;padding:none;margin:none"><p>Your browser does not support iframes.</p></iframe>');
  }
});

$('#settings-content').on('click','.remove-user-website', function(){
  var $this = $(this);
  $('.nav-button[data-name="'+$this.parent().data('id')+'"]').remove();

  var index;
  for (var i = 0; i<web.pageAdd.length; i++){
    if(web.pageAdd[i].id == $this.parent().data('id')){
      index = i;
      break;
    }
  }
  if(index>-1){
    web.pageAdd.splice(index,1);
  }

  var index2;
  for (var j = 0; j<idList.general.length; j++){
    if(idList.general[j].id == $this.parent().data('id')){
      index2 = j;
      break;
    }
  }
  if(index2>-1){
    idList.general.splice(index2,1);
  }

  localStorage.setItem('pageAdd', JSON.stringify(web.pageAdd));
  localStorage.setItem('idList', JSON.stringify(idList));
  web.setSettings();
  $this.parent().fadeOut().remove();
});

var $sortableAreas = $("#search-websites, #general-websites, #summoner-websites, #champ-websites");

 $sortableAreas.sortable();
$sortableAreas.disableSelection();

$sortableAreas.on("sortdeactivate", function(){
  web.saveSidebar($(this));
});

$('.settings-update').on('click', function(){
  web.saveSettings();
  $(this).addClass('setting-updated');
  $(this).attr('value','Settings Updated');
});

$(".ezHomePage, .youtubeDisplay, .redditNewTab, .twitchVisualNotifications, .twitchAudioNotifications, .eSportsNotifications, .defaultNameLink, .shiftNameLink, .ctrlNameLink, .defaultChampLink, .shiftChampLink, .ctrlChampLink, .defaultSearchLink, .shiftSearchLink, .ctrlSearchLink, .smartEnter, .newWindow").on('change', function(){
  $('.settings-update').removeClass('setting-updated');
  $('.settings-update').attr('value','Update Settings');
});

$(".nav-expand").on('click', function(){
  var $sidebar = $('#sidebar');

  if($sidebar.css('display') == 'none'){
    if(detectmob()){
      $sidebar.slideDown();
      $(window).scrollTop(0);

    } else {

      $sidebar.css('display','block');
      $('#main-content, #iframe-holder').css('margin-left','310px');
      $(this).css('left','310px');
      web.changeTwitchDimensions();
    }

  } else {
    if(detectmob()){
      if( $(window).scrollTop() <= $sidebar.height() + 20){
        $sidebar.slideUp();
      }
      $(this).css('left','50%');
      $('body,html').animate({
        scrollTop: 0
      }, 400);
    } else {

      $sidebar.css('display','none');
      $('#main-content, #iframe-holder').css('margin-left','0px');
      $(this).css('left','0px');
      web.changeTwitchDimensions();
    }
  }

});

$('input').on('keydown', function(e){
     e.stopPropagation();
});


var ctrlKeyPressed = false;
var shiftKeyPressed = false;
$(".name, .champ, .searchinput").on('keydown', function(e){
  if(e.shiftKey){
      shiftKeyPressed = true;
      ctrlKeyPressed = false;
    }
  else if (e.ctrlKey){
      ctrlKeyPressed = true;
      shiftKeyPressed = false;
    }
});

$(".name, .champ, .searchinput").on('keyup', function(){
  shiftKeyPressed = false;
  ctrlKeyPressed = false;
});

$searchInput = $(".searchinput");
$searchInput.on('keyup change paste textInput input', function(e){
  if($(this).val().length === 0){
    league.returnOriginalUrl('website-search');
  } else {
    league.searchLink();
  }
});

$searchInput.on('keydown', function(e){
  var keycode = (e.keyCode ? e.keyCode : e.which);
  if(keycode == '13'){
    if(!isBuggedChrome){
      $('#ezggadvertisement').html('<iframe src="http://ib.adnxs.com/tt?id=2359794&referrer=2ez.gg" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0" allowtransparency="true" width="300" height="250"></iframe>');
    }
    var websiteAddress;

    if(shiftKeyPressed) {
      websiteAddress = $('.nav-button[data-name="'+appSettings.shiftSearchLink+'"]').attr('href');
    } else if(ctrlKeyPressed){
      websiteAddress = $('.nav-button[data-name="'+appSettings.ctrlSearchLink+'"]').attr('href');
      }  else {
      websiteAddress = $('.nav-button[data-name="'+appSettings.defaultSearchLink+'"]').attr('href');
    }

      window.open(websiteAddress);
    }
});

var timerName;

var $name = $(".name");
$name.on('keyup change paste textInput input', function(e){

  league.account($(".name").val(), $(".server").val());

    clearTimeout(timerName);

  timerName = setTimeout(function(){
    $(".website-name li:not(.selected-link)").animate({'backgroundColor': '#303033','color':'#939393'},150)
                .animate({'opacity':'1'},120)
                .animate({'backgroundColor': '#262729','color':'#777'},{duration:400, complete: function(){
                  $(this).attr('style', ' ');
                }
    });
  }, 375);
});

$name.on('keydown', function(e){
  var keycode = (e.keyCode ? e.keyCode : e.which);

  if(keycode != 8 && keycode != 46){
    $("#summoner-accounts ul").slideUp('fast');
  }

  if(keycode == '13'){
    league.addNewSummoner($(".name").val(), $(".server").val());
    if(!isBuggedChrome){
      $('#ezggadvertisement').html('<iframe src="http://ib.adnxs.com/tt?id=2359794&referrer=2ez.gg" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0" allowtransparency="true" width="300" height="250"></iframe>');
    }
    var $id;
    if(shiftKeyPressed) {
      $id = $('.nav-button[data-name="'+appSettings.shiftNameLink+'"]');
    } else if(ctrlKeyPressed){
      $id = $('.nav-button[data-name="'+appSettings.ctrlNameLink+'"]');
    }  else {
      $id = $('.nav-button[data-name="'+appSettings.defaultNameLink+'"]');
    }

      clearTimeout(timerName);
      if(web.checkIfBelongs('.website-name') && appSettings.smartEnter === 'on' && !ctrlKeyPressed && !shiftKeyPressed){
        if(detectmob()){
            window.location.replace(web.checkIfBelongs('.website-name'));
          } else {
            web.makeIframe(web.checkIfBelongs('.website-name'));
            history.pushState("", "", "#" + web.hashWithoutParams() + "?name=" + encodeURIComponent(league.name) + "&server=" + encodeURIComponent(league.server));

            ga('send', 'pageview', "#" + web.hashWithoutParams());
          }
      } else {
        if(detectmob()){
            window.location.replace($id.attr('href'));
        } else {
          web.makeIframe($id.attr('href'));
          $(".nav-button li").removeClass('selected-link');
        $id.children('li').addClass('selected-link');
        history.pushState("", "", "#" + $id.data('name') + "?name=" + encodeURIComponent(league.name) + "&server=" + encodeURIComponent(league.server));

        ga('send', 'pageview', "#" + web.hashWithoutParams());
      }
      }
    }
});


$(".server").on('change', function(){
  league.account($(".name").val(), $(".server").val());
  league.lolWebsiteLocation(true);
    $(".website-name li:not(.selected-link)").animate({'backgroundColor': '#303033','color':'#939393'},150)
                  .animate({'opacity':'1'},120)
                  .animate({'backgroundColor': '#262729','color':'#777'},{duration:400, complete: function(){
                    $(this).attr('style', ' ');
                    clickedPreviously = false;
                  }});
});


$(".champ-list").on('click', function () {
  league.champion($(".champ").val());
  league.dropDownTemplate($(".champ").val());
     $('.champ-list-entry > #champ-drop').not($(this).children("#champ-drop")).hide();
      $(this).children("#champ-drop").toggle();
  });


var $champ = $(".champ");
$champ.on('focus', function(){
  $(this).val('');
});

$champ.on('click', function(){
  $("#champ-drop").css("display","block");
  league.dropDownTemplate($(this).val());
});

var champAnimate = false;

$champ.on('keyup', function(e){
  var $champInputValue = $(this).val();
  var comparisonChamp = new RegExp($champInputValue,"i");
  var keycode = (e.keyCode ? e.keyCode : e.which);

  if(keycode != '13'){
    league.dropDownTemplate($champInputValue);
    $("#champ-drop").css("display","block");

    $("#champ-drop .champ-list-entry .champ-text").each(function () {
      var $this = $(this),
      text = $this.html(),
      first = text.slice(0, $champInputValue.length),
      rest = text.slice($champInputValue.length);
      $this.html("<span style='color:#f0e863'>" + first + "</span>" + rest);
    });

    league.champion($champInputValue);
    var champSelectAnimation = function(){
      $("#champ-drop").fadeOut();
      $(".website-champ li:not(.selected-link)").animate({'backgroundColor': '#303033','color':'#939393'},150)
        .animate({'opacity':'1'},120)
          .animate({'backgroundColor': '#262729','color':'#777'},{duration:400, complete: function(){
            $(this).attr('style', ' ');
        }
      });
    };

    for(var i = 0; i<ChampionList.length; i++){
      if(ChampionList[i].name.match(comparisonChamp) && (ChampionList[i].name.length == $champInputValue.length)){
        $("#champ-drop .champ-list-entry").css({"background-color" : "#666", "border" : "2px solid black"});
        clearTimeout(timerName);
        timerName = setTimeout(champSelectAnimation, 100);
        break;
      }
    }
  }
});

  $champ.on('keydown', function(e){
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if(keycode == '13'){

    league.addNewSummoner($(".name").val(), $(".server").val());

    var champText = $("#champ-drop .champ-list-entry .champ-text").first().text();
    if(champText.length>0){ $(this).val(champText);}
    $("#champ-drop").fadeOut();
    league.champion($(this).val());
    if(!isBuggedChrome){
      $('#ezggadvertisement').html('<iframe src="http://ib.adnxs.com/tt?id=2359794&referrer=2ez.gg" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0" allowtransparency="true" width="300" height="250"></iframe>');
    }
    var $id;
    if(shiftKeyPressed) {
      $id = $('.nav-button[data-name="'+appSettings.shiftChampLink+'"]');
    } else if(ctrlKeyPressed){
      $id = $('.nav-button[data-name="'+appSettings.ctrlChampLink+'"]');
      }  else {
      $id = $('.nav-button[data-name="'+appSettings.defaultChampLink+'"]');
    }

    if(web.checkIfBelongs('.website-champ') && appSettings.smartEnter === 'on' && !ctrlKeyPressed && !shiftKeyPressed){
      if(detectmob()){
        window.location.replace(web.checkIfBelongs('.website-champ'));
      } else {
        web.makeIframe(web.checkIfBelongs('.website-champ'));
        history.pushState("", "", "#" + web.hashWithoutParams() + "?champ=" + encodeURIComponent(league.champ));

        ga('send', 'pageview', "#" + web.hashWithoutParams());
      }

    } else {

      if(detectmob()){
        window.location.replace($id.attr('href'));
      } else {
          web.makeIframe($id.attr('href'));
          $(".nav-button li").removeClass('selected-link');
        $id.children('li').addClass('selected-link');
        history.pushState("", "", "#" + $id.data('name') + "?champ=" + encodeURIComponent(league.champ));
        ga('send', 'pageview', "#" + web.hashWithoutParams());
      }

    }

    }
});


$("#champ-drop").on('click', '.champ-list-entry', function(){
  var $inputName = $(this).data("name");
  $(".champ").val($inputName);

  $(".website-champ li:not(.selected-link)").animate({'backgroundColor': '#303033','color':'#939393'},150)
                .animate({'opacity':'1'},120)
                .animate({'backgroundColor': '#262729','color':'#5e5e5e'},{duration:400, complete: function(){
                  $(this).attr('style', ' ');
                }
    });
});

$champ.on('blur', function(){
  // hacky thing to allow clicks on the champ-drop menu
   setTimeout(function(){
     $("#champ-drop").css('display','none');
   }, 200);
});


// Summoner Names List

var removePressed = false;

$name.on('click', function(){
  league.summonerList();
  $("#summoner-accounts ul").slideDown('fast');
});

$name.on('blur', function(){
  setTimeout(function(){
    if(!removePressed){
      $("#summoner-accounts ul").slideUp('fast');
    }
  }, 200);
});

$(".website-name").on('click', function(){
  league.addNewSummoner($(".name").val(), $(".server").val());
  $("#summoner-accounts ul").slideUp('fast');
});

$("#summoner-accounts-list").on('click', 'li', function(){
  $this = $(this);

  setTimeout(function(){
    if(!removePressed){

      $(".name").val($this.data('name'));
      $(".server").val($this.data('server'));

      league.account($(".name").val(), $(".server").val());
    }
  }, 60);
});

$("#summoner-accounts-list").on('click', 'li .remove-summoner', function(){
  removePressed = true;
  var name = $(this).parent().data('name');
  var server = $(this).parent().data('server');

  league.removeSummoner(name, server);

  setTimeout(function(){
    removePressed = false;
  }, 400);
});




function streamEvents(){

  if ( (currentUrl().match(/back/i)) && ((parseInt(localStorage.getItem('streamsLastRetrieved')) + 1000*60*20) >= Date.now()) ){
    streams.azubuStreamersOffline = JSON.parse(localStorage.getItem('azubuStreamersOffline'));
    streams.azubuStreamersOnline = JSON.parse(localStorage.getItem('azubuStreamersOnline'));
    streams.topAzubuStreamersOnline = JSON.parse(localStorage.getItem('topAzubuStreamersOnline'));
    streams.twitchStreamersOnline = JSON.parse(localStorage.getItem('twitchStreamersOnline'));
    streams.twitchStreamersOffline = JSON.parse(localStorage.getItem('twitchStreamersOffline'));
    streams.topTwitchStreamersOnline = JSON.parse(localStorage.getItem('topTwitchStreamersOnline'));
    streams.totalStreamersOnline = parseInt(localStorage.getItem('totalStreamersOnline'));

    if(streams.totalStreamersOnline>0){
      $(".twitch-online").css( "display", "inline" ).text(streams.totalStreamersOnline);
    }

    streams.offlineTwitchStreamers();
    streams.pushTwitchStreams();
    streams.pushTwitchStreamers();
    streams.pushAzubuStreamers();
    streams.pushTopTwitchStreamers();
    if(appSettings.eSportsNotifications === 'on'){
      streams.pushStreamsHeader();
    }
    web.changeTwitchDimensions();
    $('.tooltip-left').tipsy({gravity: 'e'});
    $('.tooltip-viewers').tipsy({gravity: 'w'});
    $('.tooltip-center').tipsy({gravity: 'n'});

  } else {
    streams.totalStreamersOnline = 0;
    var pastAzubFav = JSON.parse(localStorage.getItem('azubuStreamersOnline'));
    var pastTwitchFav = JSON.parse(localStorage.getItem('twitchStreamersOnline'));

    streams.onlineTwitchStreamers().done(function() {

      localStorage.setItem('streamsLastRetrieved', Date.now());

      if((streams.streamFunctionCount>0)&&(appSettings.twitchVisualNotifications==='on' || appSettings.twitchAudioNotifications==='on')){
        streams.favouriteStreamerMessage(pastAzubFav, pastTwitchFav);
        streams.recentlyAddedTwitch = [];
        streams.recentlyAddedAzub = [];
      }

      streams.offlineTwitchStreamers();
      streams.pushTwitchStreamers();

      if((streams.streamFunctionCount > 0) && streams.currentStreamOnline()){
        // do nothing - prevents refreshing of streams that are currently online
      } else if((streams.streamFunctionCount > 0) && streams.currentStreamViewers<40){
        // do nothing - prevents smaller streams from being refreshed if they don't make the top 12 after refresh
      } else if(!window.location.href.match('/twitchstreams/i')) {
        streams.pushTwitchStreams();
      }
      $('.tooltip-left').tipsy({gravity: 'e'});
      $('.tooltip-viewers').tipsy({gravity: 'w'});
      $('.tooltip-center').tipsy({gravity: 'n'});

      streams.getAzubuStreamers().done(function() {
        streams.pushAzubuStreamers();
        if(streams.totalStreamersOnline>0){
          $(".twitch-online").css( "display", "inline" ).text(streams.totalStreamersOnline);
        }
        $('.tooltip-left').tipsy({gravity: 'e'});
        $('.tooltip-viewers').tipsy({gravity: 'w'});
        $('.tooltip-center').tipsy({gravity: 'n'});
      });
      streams.topTwitchUrl = 'https://api.twitch.tv/kraken/streams?game=League%20of%20Legends&limit=12&offset=0';
      streams.topTwitchOnline(true).done(function() {
        streams.pushTopTwitchStreamers();
        if(appSettings.eSportsNotifications==='on'){
          streams.pushStreamsHeader();
        }
        $('.tooltip-left').tipsy({gravity: 'e'});
        $('.tooltip-viewers').tipsy({gravity: 'w'});
        $('.tooltip-center').tipsy({gravity: 'n'});
      });

      if(streams.totalStreamersOnline>0){
        $(".twitch-online").css( "display", "inline" ).text(streams.totalStreamersOnline);
      }
      web.changeTwitchDimensions();
      streams.streamFunctionCount++;

    });
  }
}

streamEvents();
setInterval(streamEvents, 1000*60*20);

var $twitchHolder = $("#twitch-content");
$twitchHolder.on('click', '.view-this-stream', function(){
  var $this = $(this);
  streams.pushTwitchStreams($this.data('id'), $this.data('type'));
  web.changeTwitchDimensions();
  $('body,html').animate({
    scrollTop: 0
  }, 400);
});

$twitchHolder.on('click', '.add-top-champ', function(){
  var $this = $(this);

  streams.totalStreamersOnline++;
  localStorage.setItem('totalStreamersOnline', JSON.stringify(streams.totalStreamersOnline));

  $(".twitch-online").css( "display", "inline" ).text(streams.totalStreamersOnline);

  if($this.data('id') !== undefined){
    streams.submitStreamer($this.data('name'));
    streams.pushTwitchStreamers($this.data('id'));
  } else {
    streams.pushAzubuStreamers($this.data('count'));
    streams.submitStreamer($this.data('name'),'azubu');
  }
  $this.after('<span class="favourited-streamer tooltip-left" original-title="You have this streamer favourited">&lt;3</span>');
  $this.fadeOut();
});

$twitchHolder.on('click', '.remove-twitch', function(){
  var $this = $(this);
  $this.parent().fadeOut();
  streams.removeStreamer($this.data('name'));
});

$twitchHolder.on('click','.remove-twitch-online', function(){
  var $this = $(this);
  var streamName = $this.data('name');
  $this.parent().fadeOut();

  streams.totalStreamersOnline--;
  localStorage.setItem('totalStreamersOnline', JSON.stringify(streams.totalStreamersOnline));
  
  $(".twitch-user-"+streamName).fadeOut();
  streams.removeStreamer(streamName);

  if(!streams.totalStreamersOnline){
    $(".twitch-online").css( "display", "none" );
  } else{
    $(".twitch-online").text(streams.totalStreamersOnline);
  }

});

$twitchHolder.on('click', '.add-champ', function(){
  if($(".champ-addition").val().length>0){
    $(this).val('Streamer Added');
    $(this).addClass('streamer-added');
    streams.submitStreamer($(".champ-addition").val(), $(".stream-website").val());
    streamEvents();
    $(".champ-addition").val('');
  }
});

$(".champ-addition").on('keydown', function(){
  $('.add-champ').val('Add Streamer');
  $('.add-champ').removeClass('streamer-added');
});

$twitchHolder.on('click', '.view-twitch-chat', function(){
  var $this = $(this);

  if($this.hasClass("close-twitch-chat")){
    $this.prev().html(' ');
    $this.removeClass('close-twitch-chat');
  } else{
  var streamerName = $this.data('name');
  $this.prev().html('<iframe frameborder="0" id="chat_embed" src="http://twitch.tv/chat/embed?channel='+streamerName+'&popout_chat=true" height="100%" width="300"></iframe>');
  $this.addClass('close-twitch-chat');
  }

  web.changeTwitchDimensions();
});

$("#view-more-streams").on('click', function(){
   streams.topTwitchOnline().done(function() {
      streams.pushTopTwitchStreamers(true);
      if(appSettings.eSportsNotifications==='on'){
        streams.pushStreamsHeader();
      }
      $('.tooltip-left').tipsy({gravity: 'e'});
      $('.tooltip-viewers').tipsy({gravity: 'w'});
      $('.tooltip-center').tipsy({gravity: 'n'});
    });
});

$('#top-header-message').on('click','.close-riot, .close-favourite', function(){
  $(this).parent().fadeOut(function() {
    var $topHeader = $('#top-header-message');

      if( $topHeader.height() === 0){
        $topHeader.css('padding','0px');
      }
  });
});

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

//end of anonomyous function (for 2ez.gg code)
})(jQuery);