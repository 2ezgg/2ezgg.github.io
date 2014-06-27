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

  // var default idList
  idList = {
    search : [{name:'google', id:'google'},{name:'youtubesearch', id:'youtubesearch'},{name:'yahoo', id:'yahoo'},{name:'wikipedia', id:'wikipedia'}],
    general : [{name:'RedditJS', id:'reddit'},{name:'Reddit Front', id:'redditfront'},{name:'Old Reddit', id:'redditthreads'},{name:'LoL Videos', id:'youtube'},{ name:'Streams', id:'twitch'},{name:'LoL News', id:'league'},{ name:'RoG', id:'reign'},{ name:'onGamers', id:'ongamers'},{ name:'S@20', id:'surrender'},{ name:'Cloth 5', id:'cloth'},{ name:'NewsOfLegends', id:'newslegend'},{ name:'ESEx', id:'esex'},{ name:'In2LoL', id:'in2'},{ name:'LoL Wiki', id:'wikia'},{ name:'Esportspedia', id:'esportpedia'},{ name:'Leaguepedia', id:'gamepedia'},{ name:'LeagueCraft', id:'craft'},{name:'NerfPlz Tier List', id:'nerfplz'},{ name:'Jungle Timer', id:'jungle'},{ name:'LoL Esports', id:'esports'},{ name:'Fantasy LCS', id:'fantasy'},{ name:'Esport Calendar', id:'calendar'},{ name:'Elo Hell', id:'hell'},{name:'SummonersCode', id:'code'},{ name:'LoL IRC', id:'irc'},{ name:'LResearch', id:'research'}],
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
