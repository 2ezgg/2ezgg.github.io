function LeagueLinks(){

    this.name = this.getUrlParams('name') || localStorage.getItem('name') || '';
    this.server = this.getUrlParams('server') || localStorage.getItem('server') || 'na';
    this.champ = this.getUrlParams('champ') || localStorage.getItem('champ') || '';
    this.rssFeeds = JSON.parse(localStorage.getItem('rssFeeds')) || [];
    this.oldDate = localStorage.getItem('date') || 0;
    this.oldDate = parseInt(this.oldDate);
    localStorage.setItem('date', Date.now());
    

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
    var regex = new RegExp( regexS );
    var results = regex.exec( window.location.href );
  if(results == null){
      return null;
    } else {
      return decodeURIComponent(results[1]);
  }
}

LeagueLinks.prototype.account = function(nameUpdate,serverUpdate, stopReplacement){
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
    var webData = item.data('name');

    if (webData == 'google'){
      item.attr("href","http://google.com/search?q="+searchQuery);
    }  else if (webData == 'gimages'){
      item.attr("href","http://www.google.com/search?site=&tbm=isch&source=hp&q="+searchQuery+"&btnG=Search+by+image");
    }	else if (webData == 'youtubesearch'){
      item.attr("href","http://www.youtube.com/results?search_query="+searchQuery);
    } else if (webData == 'yahoo'){
      item.attr("href","http://search.yahoo.com/search?p="+searchQuery+"&fr=sfp");
    } else if (webData == 'bing'){
      item.attr("href","http://www.bing.com/search?q="+searchQuery);
    }
    else if(webData == 'wikipedia'){
      item.attr("href", "http://wikipedia.org/wiki/"+searchQuery)
    }
    else if(webData == 'wolfram'){
      item.attr("href", "http://www.wolframalpha.com/input/?i="+searchQuery)
    }
  }
}

LeagueLinks.prototype.nameLink = function(){
  var items = $(".website-name");

  for(var i = 0; i < items.length; i++){

    var item = items.eq(i);
    var webData = item.data('name');

    if (webData == 'nexus'){
      item.attr("href","http://www.lolnexus.com/" +
          this.server + "/search?name=" +
          this.name + "&server=" + this.server
        );
    }  else if (webData == 'kassad'){
      item.attr("href","http://quickfind.kassad.in/profile/" +
            this.kassadServerName() + "/"
            + this.name + "/"
          );
    } else if (webData == 'now'){
      item.attr("href","http://www.lolking.net/now/"+this.server+"/"+this.name);
    } else if(webData == 'summoning'){
      item.attr("href", "http://summoning.net/v1/lyralei/"+this.server+"/"+this.name)
    }
    else if (webData == 'king'){
      item.attr("href","http://www.lolking.net/search?name="+this.name+"&region="+this.server);

    } else if (webData == 'gg'){
      var ggServer;
      if (this.server == 'na' || this.server == 'euw' || this.server == 'eune' || this.server == 'oce' || this.server == 'br' || this.server == 'tr' || this.server == 'ru' || this.server == 'lan' || this.server == 'las'){
        ggServer = this.server;
      } else {
        ggServer = 'www';
      }
      item.attr("href","http://" + ggServer + ".op.gg/summoner/userName=" + this.name);
    } else if (webData == 'skill'){
      item.attr("href","http://www.lolskill.net/game-" + this.server + "-" + this.name);
    } else if (webData == 'summonergameguyz'){
      item.attr("href","http://loldb.gameguyz.com/analyze/search?search_text="+this.name+"&c_server=1_10_6_2_3_4_5_7_8_9");
    } else if (webData == 'phant'){
      item.attr("href","http://www.elophant.com/league-of-legends/search?query="+this.name+"&region="+this.server);
    }
  }
}

LeagueLinks.prototype.champLink = function(){
  var items = $(".website-champ");

  var spaceAndDashChamp = this.champ.replace(/[^a-zA-Z ]/g, "").replace(/ /g,"-");
  var allDashesChamp = this.champ.replace(/[^a-zA-Z \']/g, "").replace(/ |\'/g,"-");
  var onlyLettersChamp = this.champ.replace(/[^a-zA-Z]/g, "");

  this.champ = this.champ.trim();

  for(var i = 0; i < items.length; i++){

    var item = items.eq(i);
    var webData = item.data('name');

    if (webData == 'champselect'){
      item.attr('href','http://www.championselect.net/champ/' + spaceAndDashChamp);
    } else if (webData == 'kingchamp'){
      item.attr('href','http://www.lolking.net/champions/' + onlyLettersChamp);
    } else if (webData == 'tsm'){
      item.attr('href','http://www.solomid.net/guide?champ=' + onlyLettersChamp);
    } else if (webData == 'probuilds'){
      var probuildChamp;
      if(onlyLettersChamp =='wukong'){
        probuildChamp = 'monkeyking';
      } else {
        probuildChamp = onlyLettersChamp;
      }
      item.attr('href','http://www.probuilds.net/champions/' + probuildChamp);
    } else if (webData == 'elo'){
      item.attr('href','http://www.elophant.com/league-of-legends/champion/' + spaceAndDashChamp + '/stats' );
    } else if (webData == 'moba'){
      item.attr('href','http://www.mobafire.com/league-of-legends/' + spaceAndDashChamp + '-guide' );
    } else if(webData == 'builder'){
      item.attr('href','http://www.lolbuilder.net/' + onlyLettersChamp);
    } else if(webData == 'lolpro'){
      item.attr('href','http://www.lolpro.com/guides/' + spaceAndDashChamp);
    }
    else if(webData == 'wikichamp'){
      item.attr('href','http://leagueoflegends.wikia.com/wiki/' + this.champ);
    }
    else if(webData == 'leaguepediachamp'){
      var leaguepediachamp = this.champ;

      switch(leaguepediachamp){
        case 'cho\'gath':
          leaguepediachamp = 'Cho\'Gath';
          break;
        case 'dr. mundo':
          leaguepediachamp = 'Dr. Mundo';
          break;
        case 'kha\'zix':
          leaguepediachamp = 'Kha\'Zix';
          break;
        case 'kog\'maw':
          leaguepediachamp = 'Kog\'Maw';
          break;
        case 'lee sin':
          leaguepediachamp = 'Lee Sin';
          break;
        case 'master yi':
          leaguepediachamp = 'Master Yi';
          break;
        case 'miss fortune':
          leaguepediachamp = 'Miss Fortune';
          break;
        case 'twisted fate':
          leaguepediachamp = 'Twisted Fate';
          break;
        case 'vel\'koz':
          leaguepediachamp = 'Vel\'Koz';
          break;
        case 'xin zhao':
          leaguepediachamp = 'Xin Zhao';
          break;
        }

      item.attr('href','http://lol.gamepedia.com/' + encodeURIComponent(leaguepediachamp));
    }
    else if(webData == 'champgameguyz'){
      var gameguyzChamp;
      if(this.champ=='vel\'koz'){
        gameguyzChamp = 'velkoz';
      } else {
        gameguyzChamp = allDashesChamp;
      }
      item.attr('href','http://loldb.gameguyz.com/champions/' + gameguyzChamp + '.html');
    }
    else if(webData == 'inven'){
      for (var i=0;i<this.championList.length;i++){
        if(this.champ == this.championList[i].name){
          item.attr('href','http://lol.inven.co.kr/dataninfo/champion/detail.php?code='+this.championList[i].id);
        }
      }
    }
  }
}

LeagueLinks.prototype.championList = [
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


LeagueLinks.prototype.championCompare = function(input){
  for (var i=0; i<this.championList.length; i++) {
      if(this.championList[i] == input){
        return true;
      }
    }
    return false;
}

LeagueLinks.prototype.dropDownTemplate = function(input){
  var self = this;
  var template = Handlebars.compile($('#champion-template').html());
  if(input.length == 0){
    $("#champ-drop").html( template(self.championList) );
  } else{
    var matchingChampInfo = [];
    var count = 0;
    var inputExpression = new RegExp("^"+input, "i");
    for(var i = 0;i<self.championList.length;i++ ){
      if(self.championList[i].name.match(inputExpression)){
        matchingChampInfo[count] = {
          name: self.championList[i].name,
                      xpos: self.championList[i].xpos,
                      ypos: self.championList[i].ypos,
        }
        count++;
      }
      $("#champ-drop").html( template(matchingChampInfo) );
    }
  }
}

LeagueLinks.prototype.kassadServerName = function(){
  if (this.server == 'eune'){
    return 'eun';
  } else if(this.server == 'oce'){
    return 'oc';
  } else if(this.server == 'cn'){
    return 'china-ionia-1';
  } else {
    return this.server;
  }
}

LeagueLinks.prototype.rssAlerts = function(pageRssId){

  var rssDeferred = $.Deferred();
  var self = this;
  var websiteUrl = '';
  var index;

  if(pageRssId == 'league'){
    websiteUrl = "http://na.leagueoflegends.com/en/rss.xml";
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
