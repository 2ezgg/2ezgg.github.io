var webdriverjs = require('webdriverjs'),
    assert      = require('assert');

/*
  Configuration
  1) set appURL to point to an instance of app
  2) make sure jquery can be loaded if you point to a file/offline instance
  3) make sure all summoner websites are enabled in 2ez.gg settings
*/
var appUrl = 'file:///Users/Jake/Desktop/dev/2ezgg.github.io/index.html';

describe('Summoner Lookups - ', function(){

  this.timeout(99999999);
  var client = {};
  var usernameToTest = 'Best Behe NA';

  before(function(done){
    client = webdriverjs.remote({ desiredCapabilities: {browserName: 'chrome'} });
    client.init(done);
  });

  it('Checks each region in dropdown, and validates each generated URL',function(done) {
    client
      .url(appUrl)
      .setValue('.name', 'Best Behe NA', function(err, result){})
      .click('.server', function(err, result){})
      .getAttribute('.server', 'length', function(err, result){
        for(var i=0;i<result;i++){
          var currentOption = ".server option:nth-child("+i+")";
          client
            .click(currentOption, function(err, result){})
            .getValue('.server', function(err, server){
              client
                .getAttribute('#king','href', function(err, result){
                  var correct = 'http://www.lolking.net/search?name='+encodeURIComponent(usernameToTest)+'&region='+server;
                  console.log(result + '===' + correct);
                  assert(result === correct);
                })
                .getAttribute('#nexus','href', function(err, result){
                  var correct = 'http://www.lolnexus.com/'+server+'/search?name='+encodeURIComponent(usernameToTest)+'&server='+server;
                  console.log(result + '===' + correct);
                  assert(result === correct);
                })
                .getAttribute('#gg','href', function(err, result){
                  var fixedForOp = '';
                  if(server !== 'kr' && server !== 'cn' && server !== 'tw' && server !== 'sea'){
                    fixedForOp = server+'.';
                  }
                  var correct = 'http://www.'+fixedForOp+'op.gg/summoner/userName='+encodeURIComponent(usernameToTest);
                  console.log(result + '===' + correct);
                  assert(result === correct);
                })
                .getAttribute('#now','href', function(err, result){
                  var correct = 'http://www.lolking.net/now/'+server+'/'+encodeURIComponent(usernameToTest); //doesn't support sea
                  console.log(result + '===' + correct);
                  assert(result === correct);
                })
                .getAttribute('#summoning','href', function(err, result){
                  var correct = 'http://www.summoning.net/v1/lyralei/'+server+'/'+encodeURIComponent(usernameToTest);
                  console.log(result + '===' + correct);
                  assert(result === correct);
                })
                .getAttribute('#skill','href', function(err, result){
                  var correct = 'http://www.lolskill.net/game-'+server+'-'+encodeURIComponent(usernameToTest); //doesn't support sea
                  console.log(result + '===' + correct);
                  assert(result === correct);
                })
                .getAttribute('#kassad','href', function(err, result){
                  var fixedForKassad = '';
                  if(server === 'eune'){
                    fixedForKassad = 'eun';
                  }else if(server === 'oce'){
                    fixedForKassad = 'oc';
                  }else if(server === 'cn'){
                    fixedForKassad = 'china-ionia-1';
                  }else{
                    fixedForKassad = server;
                  }
                  var correct = 'http://quickfind.kassad.in/profile/'+fixedForKassad+'/'+encodeURIComponent(usernameToTest)+'/';
                  console.log(result + '===' + correct);
                  assert(result === correct);
                })
                .getAttribute('#phant','href', function(err, result){
                  var correct = 'http://www.elophant.com/league-of-legends/search?query='+encodeURIComponent(usernameToTest)+'&region='+server;
                  console.log(result + '===' + correct);
                  assert(result === correct);
                })
                .getAttribute('#summonergameguyz','href', function(err, result){
                  var correct = 'http://www.loldb.gameguyz.com/analyze/search?search_text='+encodeURIComponent(usernameToTest)+'&c_server=1_10_6_2_3_4_5_7_8_9';
                  console.log(result + '===' + correct);
                  assert(result === correct);
                  console.log("============End of "+server+" Region===============");
                });
          });
        }
      })
      .call(done);
    });

    after(function(done) {
        client.end(done);
    });

});
