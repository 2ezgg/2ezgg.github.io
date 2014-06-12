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