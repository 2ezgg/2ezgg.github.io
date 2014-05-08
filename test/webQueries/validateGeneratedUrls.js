var webdriverjs = require('webdriverjs'),
    assert      = require('assert');

/*
  Configuration
  1) set appURL to point to an instance of app
  2) make sure jquery can be loaded if you point to a file/offline instance
  3) make sure all query websites are enabled in 2ez.gg settings
  4) set stringToQuery variable
*/
var appUrl = 'file:///Users/Jake/Desktop/dev/2ezgg.github.io/index.html';

describe('Summoner Lookups - ', function(){

  this.timeout(99999999);
  var client = {};
  var stringToQuery = 'Testing 123';
  var GoogleWebQuery = "http://google.com/search?q="+stringToQuery;
  var GoogleImageQueryStart = "http://www.google.com/search?site=&tbm=isch&source=hp&q=";
  var GoogleImageQueryEnd = "&btnG=Search+by+image";
  var GoogleImageQuery = GoogleImageQueryStart + stringToQuery + GoogleImageQueryEnd;
  var YouTubeQuery = "http://www.youtube.com/results?search_query="+stringToQuery;
  var YahooWebQueryEnd = "&fr=sfp";
  var YahooWebQuery = "http://search.yahoo.com/search?p="+stringToQuery+YahooWebQueryEnd;
  var BingWebQuery = "http://www.bing.com/search?q="+stringToQuery;
  var WikipediaQuery = "http://wikipedia.org/wiki/"+stringToQuery;
  var WolframAlphaQuery = "http://www.wolframalpha.com/input/?i="+stringToQuery;

  before(function(done){
    client = webdriverjs.remote({ desiredCapabilities: {browserName: 'chrome'} });
    client.init(done);
  });

  it('Checks each region in dropdown, and validates each generated URL',function(done) {
    client
      .url(appUrl)
      .setValue('.searchinput', stringToQuery, function(err, result){})
      .getAttribute('#google','href', function(err, result){
        console.log(result + '===' + GoogleWebQuery);
        assert(result === GoogleWebQuery);
      })
      .getAttribute('#gimages','href', function(err, result){
        console.log(result + '===' + GoogleImageQuery);
        assert(result === GoogleImageQuery);
      })
      .getAttribute('#youtubesearch','href', function(err, result){
        console.log(result + '===' + YouTubeQuery);
        assert(result === YouTubeQuery);
      })
      .getAttribute('#yahoo','href', function(err, result){
        console.log(result + '===' + YahooWebQuery);
        assert(result === YahooWebQuery);
      })
      .getAttribute('#wikipedia','href', function(err, result){
        console.log(result + '===' + WikipediaQuery);
        assert(result === WikipediaQuery);
      })
      .getAttribute('#bing','href', function(err, result){
        console.log(result + '===' + BingWebQuery);
        assert(result === BingWebQuery);
      })
      .getAttribute('#wolfram','href', function(err, result){
        console.log(result + '===' + WolframAlphaQuery);
        assert(result === WolframAlphaQuery);
      })
    client.call(done);
  });

    after(function(done) {
      client.end(done);
    });

});
