var webdriverjs = require('webdriverjs'),
    assert      = require('assert');

/*
  Configuration
  1) set appURL to point to an instance of app
  2) make sure jquery can be loaded if you point to a file/offline instance
  3) make sure all summoner websites are enabled in 2ez.gg settings
  4) set usernameToTest variable and timeBetweenEachPage
*/
var appUrl = 'file:///Users/Jake/Desktop/dev/2ezgg.github.io/index.html';

describe('Load each Summoner Lookup URL - ', function(){

  this.timeout(99999999);
  var client = {};
  var usernameToTest = 'Best Behe NA';
  var urlsToTest = [];
  var timeBetweenEachPage = 8000; // In milliseconds (8 seconds default)

  before(function(done){
    client = webdriverjs.remote({ desiredCapabilities: {browserName: 'chrome'} });
    client.init(done);
  });

  it('Collecting each URL',function(done) {
    client
      .url(appUrl)
      .setValue('.name', usernameToTest, function(err, result){})
      .click('.server', function(err, result){})
      .getAttribute('.server', 'length', function(err, result){
        for(var i=0;i<result;i++){
          var currentOption = ".server option:nth-child("+i+")";
          client
            .click(currentOption, function(err, result){})
            .getValue('.server', function(err, server){
              client
                .getAttribute('#king','href', function(err, result){
                  urlsToTest.push(result);
                })
                .getAttribute('#nexus','href', function(err, result){
                  urlsToTest.push(result);
                })
                .getAttribute('#gg','href', function(err, result){
                  urlsToTest.push(result);
                })
                .getAttribute('#now','href', function(err, result){
                  urlsToTest.push(result);
                })
                .getAttribute('#summoning','href', function(err, result){
                  urlsToTest.push(result);
                })
                .getAttribute('#skill','href', function(err, result){
                  urlsToTest.push(result);
                })
                .getAttribute('#kassad','href', function(err, result){
                  urlsToTest.push(result);
                })
                .getAttribute('#phant','href', function(err, result){
                  urlsToTest.push(result);
                })
                .getAttribute('#summonergameguyz','href', function(err, result){
                  urlsToTest.push(result);
                });
          });
        }
      })
      .call(done);
    });

    after(function(done) {
      urlsToTest.forEach(function(e){
        console.log(e);
        client
          .url(e)
          .waitFor('#FFFFFFFF', timeBetweenEachPage, function(err, result){});
      });
      client.end(done);
    });

});
