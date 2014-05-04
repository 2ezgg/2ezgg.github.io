var webdriverjs = require('webdriverjs'),
    assert      = require('assert');

/*
  Configuration
  1) set appURL to point to an instance of app
  2) make sure jquery can be loaded if you point to a file/offline instance
  3) make sure all champion links/urls are enabled in 2ez.gg settings
*/
var appUrl = 'file:///Users/Jake/Desktop/dev/2ezgg.github.io/index.html';

describe('Champion Guides - ', function(){

  this.timeout(99999999);
  var client = {};
  var championList = [
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

  before(function(done){
    client = webdriverjs.remote({ desiredCapabilities: {browserName: 'chrome'} });
    client.init(done);
  });

  it('Iterate through each guide site and check URL',function(done) {
    client.url(appUrl);
    championList.forEach(function(e){
      var champName = e.name;
      var spaceAndDashChamp = champName.replace(/[^a-zA-Z ]/g, "").replace(/ /g,"-");
      var allDashesChamp = champName.replace(/[^a-zA-Z \']/g, "").replace(/ |\'/g,"-");
      var onlyLettersChamp = champName.replace(/[^a-zA-Z]/g, "");

      /* Oddball checks */
      var alternateWukong = 'monkeyking';
      var leaguepediachamp = champName;
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
      var gameguyzChamp = champName;
      if(gameguyzChamp=='vel\'koz'){
        gameguyzChamp = 'velkoz';
      } else {
        gameguyzChamp = allDashesChamp;
      }
      var krIdNumber = 0;
      for (var i=0;i<championList.length;i++){
        if(champName == championList[i].name){
          krIdNumber = championList[i].id;
        }
      }

      client
      .setValue('.champ', champName, function(err, result){})
      .getAttribute('#champselect','href', function(err, result){
        var correct = 'http://www.championselect.net/champ/'.concat(spaceAndDashChamp);
        console.log(result + '===' + correct);
        assert(result === correct);
      })
      .getAttribute('#kingchamp','href', function(err, result){
        var correct = '';
        if(onlyLettersChamp == 'wukong'){
          correct = 'http://www.lolking.net/champions/'.concat(alternateWukong);
        }
        else{
          correct = 'http://www.lolking.net/champions/'.concat(onlyLettersChamp);
        }
        console.log(result + '===' + correct);
        assert(result === correct);
      })
      .getAttribute('#tsm','href', function(err, result){
        var correct = 'http://www.solomid.net/guide?champ='.concat(onlyLettersChamp);
        console.log(result + '===' + correct);
        assert(result === correct);
      })
      .getAttribute('#probuilds','href', function(err, result){
        var correct = '';
        if(onlyLettersChamp == 'wukong'){
          correct = 'http://www.probuilds.net/champions/'.concat(alternateWukong);
        }
        else{
          correct = 'http://www.probuilds.net/champions/'.concat(onlyLettersChamp);
        }
        console.log(result + '===' + correct);
        assert(result === correct);
      })
      .getAttribute('#elo','href', function(err, result){
        var correct = 'http://www.elophant.com/league-of-legends/champion/'.concat(spaceAndDashChamp).concat('/stats');
        console.log(result + '===' + correct);
        assert(result === correct);
      })
      .getAttribute('#moba','href', function(err, result){
        var correct = 'http://www.mobafire.com/league-of-legends/'.concat(spaceAndDashChamp).concat('-guide');
        console.log(result + '===' + correct);
        assert(result === correct);
      })
      .getAttribute('#builder','href', function(err, result){
        var correct = 'http://www.lolbuilder.net/'.concat(onlyLettersChamp);
        console.log(result + '===' + correct);
        assert(result === correct);
      })
      .getAttribute('#lolpro','href', function(err, result){
        var correct = 'http://www.lolpro.com/guides/'.concat(spaceAndDashChamp);
        console.log(result + '===' + correct);
        assert(result === correct);
      })
      .getAttribute('#wikichamp','href', function(err, result){
        var correct = 'http://leagueoflegends.wikia.com/wiki/'.concat(encodeURIComponent(champName));
        console.log(result + '===' + correct);
        assert(result === correct);
      })
      .getAttribute('#leaguepediachamp','href', function(err, result){
        var correct = 'http://lol.gamepedia.com/'.concat(encodeURIComponent(leaguepediachamp));
        console.log(result + '===' + correct);
        assert(result === correct);
      })
      .getAttribute('#champgameguyz','href', function(err, result){
        var correct = 'http://loldb.gameguyz.com/champions/'.concat(gameguyzChamp).concat('.html');
        console.log(result + '===' + correct);
        assert(result === correct);
      })
      .getAttribute('#inven','href', function(err, result){
        var correct = 'http://lol.inven.co.kr/dataninfo/champion/detail.php?code='.concat(krIdNumber);
        console.log(result + '===' + correct);
        assert(result === correct);
        console.log("============End of Champion===============");
      });
    });
    client.call(done);
  });

  after(function(done) {
    client.end(done);
  });

});
