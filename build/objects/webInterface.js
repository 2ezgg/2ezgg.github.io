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