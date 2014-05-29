var webdriverjs = require('webdriverjs'),
    assert      = require('assert'),
    championData= require('../../build/data/championList.js');

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

  before(function(done){
    client = webdriverjs.remote({ desiredCapabilities: {browserName: 'chrome'} });
    client.init(done);
  });

  it('Iterate through each guide site and check URL',function(done) {
    client.url(appUrl);
    championData.ChampionList.forEach(function(e){
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
      for (var i=0;i<championData.ChampionList.length;i++){
        if(champName == championData.ChampionList[i].name){
          krIdNumber = championData.ChampionList[i].id;
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
