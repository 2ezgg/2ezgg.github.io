$('#settings-content').on('click','.add-website', function(){
  var $this = $(this);
  $this.removeClass('add-website');
  $this.addClass('remove-website');
  $('#'+$this.parent().data('id')).css('display','block');
  var notAdded = true;
  var totalSettingsLength = web.pageChange.length;
  for(var i =0; i<totalSettingsLength; i++){
    if(web.pageChange[i].id == $this.parent().data('id')){
      web.pageChange[i].display = 'inline-block';
      notAdded = false;
    }
  }
  if (notAdded){
    web.pageChange[totalSettingsLength] = {
      id : $this.parent().data('id'),
      display : 'inline-block',
    }
  }
  localStorage.setItem('pageChange', JSON.stringify(web.pageChange));
  setTimeout(function(){
    $('#'+$this.parent().data('id')).css('display','inline-block');
  }, 300);
  web.testIfSearchShouldBeShown();
});

$('#settings-content').on('click','.remove-website', function(){
  var $this = $(this);
  $this.removeClass('remove-website');
  $this.addClass('add-website');
  $('#'+$this.parent().data('id')).css('display','none');

  var notAdded = true;
  var totalSettingsLength = web.pageChange.length;
  for(var i =0; i<totalSettingsLength; i++){
    if(web.pageChange[i].id == $this.parent().data('id')){
      web.pageChange[i].display = 'none';
      notAdded = false;
    }
  }
  if (notAdded){
    web.pageChange[totalSettingsLength] = {
      id : $this.parent().data('id'),
      display : 'none',
    }
  }
  localStorage.setItem('pageChange', JSON.stringify(web.pageChange));
  web.testIfSearchShouldBeShown();
});

$('.add-user-website').on('click', function(){
  var totalPages = web.pageAdd.length
  var previousEntry = (totalPages>0)?((web.pageAdd[totalPages-1].id)+1):totalPages;
  var iframeResult = $('.user-website-iframe').is(':checked')?true:false;
  web.pageAdd[totalPages] = {
    name: $('.user-website-name').val(),
    id: previousEntry,
    href: $('.user-website-url').val(),
  }
  idList.general[idList.general.length] = {
    name: $('.user-website-name').val(),
    id: previousEntry,
  }

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
    $('.iframe-tester').html('<iframe src="'+$userUrl+'" style="width:300px;height:400px;border:none;padding:none;margin:none"><p>Your browser does not support iframes.</p></iframe>');
  }
});

$('#settings-content').on('click','.remove-user-website', function(){
  var $this = $(this);
  $('#'+$this.parent().data('id')).remove();

  var index;
  for (var i = 0; i<web.pageAdd.length; i++){
    if(web.pageAdd[i].id == $this.parent().data('id')){
      index = i;
    }
  }
  if(index>-1){
    web.pageAdd.splice(index,1);
  }

  var index2
  for (var i = 0; i<idList.general.length; i++){
    if(idList.general[i].id == $this.parent().data('id')){
      index2 = i;
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
