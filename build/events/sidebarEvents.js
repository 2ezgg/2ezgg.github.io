$(".nav-expand").on('click', function(){
  var $sidebar = $('#sidebar');

  if($sidebar.css('display') == 'none'){
    if(detectmob()){
      $sidebar.slideDown();
      $(window).scrollTop(0);

    } else {

      $sidebar.css('display','block');
      $('#main-content, #iframe-holder').css('margin-left','310px');
      $(this).css('left','310px');
      web.changeTwitchDimensions();
    }

  } else {
    if(detectmob()){
      if( $(window).scrollTop() <= $sidebar.height() + 20){
        $sidebar.slideUp();
      }
      $(this).css('left','50%');
      $('body,html').animate({
        scrollTop: 0
      }, 400);
    } else {

      $sidebar.css('display','none');
      $('#main-content, #iframe-holder').css('margin-left','0px');
      $(this).css('left','0px');
      web.changeTwitchDimensions();
    }
  }

});

$('input').on('keydown', function(e){
     e.stopPropagation();
});



var ctrlKeyPressed = false;
var shiftKeyPressed = false;
$(".name, .champ, .searchinput").on('keydown', function(e){
  if(e.shiftKey){
      shiftKeyPressed = true;
      ctrlKeyPressed = false;
    }
  else if (e.ctrlKey){
      ctrlKeyPressed = true;
      shiftKeyPressed = false;
    }
})
$(".name, .champ, .searchinput").on('keyup', function(){
  shiftKeyPressed = false;
  ctrlKeyPressed = false;
});

$searchInput = $(".searchinput")
$searchInput.on('keyup change paste textInput input', function(e){
  if($(this).val().length == 0){
    league.returnOriginalUrl('website-search');
  } else {
    league.searchLink();
  }
});

$searchInput.on('keydown', function(e){
  var keycode = (e.keyCode ? e.keyCode : e.which);
  if(keycode == '13'){
      $('#advertisement').html('<iframe src="http://ib.adnxs.com/tt?id=2359794&referrer=2ez.gg" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0" allowtransparency="true" width="300" height="250"></iframe>');
    var websiteAddress;
    if(shiftKeyPressed) {
      websiteAddress = $("#"+appSettings['shiftSearchLink']).attr('href');
    } else if(ctrlKeyPressed){
      websiteAddress = $("#"+appSettings['ctrlSearchLink']).attr('href');
      }  else {
      websiteAddress = $("#"+appSettings['defaultSearchLink']).attr('href');
    }
      window.open(websiteAddress);
    }
});

var timerName;
$(".name").on('keyup change paste textInput input', function(e){
  league.account($(".name").val(), $(".server").val())

    clearTimeout(timerName);

  timerName = setTimeout(function(){
    $(".website-name li:not(.selected-link)").animate({'backgroundColor': '#303033','color':'#939393'},150)
                .animate({'opacity':'1'},120)
                .animate({'backgroundColor': '#262729','color':'#777'},{duration:400, complete: function(){
                  $(this).attr('style', ' ');
                }
    });
  }, 375);
});

$(".name").on('keydown', function(e){
  var keycode = (e.keyCode ? e.keyCode : e.which);
  if(keycode == '13'){
      $('#advertisement').html('<iframe src="http://ib.adnxs.com/tt?id=2359794&referrer=2ez.gg" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0" allowtransparency="true" width="300" height="250"></iframe>');
    var $id;
    if(shiftKeyPressed) {
      $id = $("#"+appSettings['shiftNameLink']);
    } else if(ctrlKeyPressed){
      $id = $("#"+appSettings['ctrlNameLink']);
      }  else {
      $id = $("#"+appSettings['defaultNameLink']);
    }

      clearTimeout(timerName);
      if(web.checkIfBelongs('.website-name') && appSettings['smartEnter'] == 'on' && !ctrlKeyPressed && !shiftKeyPressed){
        if(detectmob()){
            window.location.replace(web.checkIfBelongs('.website-name'));
          } else {
            web.makeIframe(web.checkIfBelongs('.website-name'));
            history.pushState("", "", "#" + web.hashWithoutParams() + "?name=" + encodeURIComponent(league.name) + "&server=" + encodeURIComponent(league.server));

            ga('send', 'pageview', "#" + web.hashWithoutParams());
          }
      } else {
        if(detectmob()){
            window.location.replace($id.attr('href'));
        } else {
          web.makeIframe($id.attr('href'));
          $(".nav-button li").removeClass('selected-link');
        $id.children('li').addClass('selected-link');
        history.pushState("", "", "#" + $id.data('name') + "?name=" + encodeURIComponent(league.name) + "&server=" + encodeURIComponent(league.server));

        ga('send', 'pageview', "#" + web.hashWithoutParams());
      }
      }
    }
});


$(".server").on('change', function(){
  league.account($(".name").val(), $(".server").val());
  league.lolWebsiteLocation(true);
    $(".website-name li:not(.selected-link)").animate({'backgroundColor': '#303033','color':'#939393'},150)
                  .animate({'opacity':'1'},120)
                  .animate({'backgroundColor': '#262729','color':'#777'},{duration:400, complete: function(){
                    $(this).attr('style', ' ');
                    clickedPreviously = false;
                  }});
});


$(".champ-list").on('click', function () {
  league.champion($(".champ").val())
  league.dropDownTemplate($(".champ").val());
     $('.champ-list-entry > #champ-drop').not($(this).children("#champ-drop")).hide();
      $(this).children("#champ-drop").toggle();
  });


var $champ = $(".champ")
$champ.on('focus', function(){
  $(this).val('');
});

$champ.on('click', function(){
  $("#champ-drop").css("display","block");
  league.dropDownTemplate($(this).val());
});

var champAnimate = false;

$champ.on('keyup', function(e){
  var $champInputValue = $(this).val();
  var comparisonChamp = new RegExp($champInputValue,"i");
  var keycode = (e.keyCode ? e.keyCode : e.which);

    if(keycode != '13'){
      league.dropDownTemplate($champInputValue);
    $("#champ-drop").css("display","block");

    $("#champ-drop .champ-list-entry .champ-text").each(function () {
        var $this = $(this),
            text = $this.html(),
            first = text.slice(0, $champInputValue.length),
            rest = text.slice($champInputValue.length);
          $this.html("<span style='color:#f0e863'>" + first + "</span>" + rest);

    });

    league.champion($champInputValue);

    for(var i = 0; i<league.championList.length; i++){
      if(league.championList[i].name.match(comparisonChamp) && (league.championList[i].name.length == $champInputValue.length)){
        $("#champ-drop .champ-list-entry").css({"background-color" : "#666",
          "border" : "2px solid black"});
        clearTimeout(timerName);
        timerName = setTimeout(function(){
          $("#champ-drop").fadeOut();

          $(".website-champ li:not(.selected-link)").animate({'backgroundColor': '#303033','color':'#939393'},150)
            .animate({'opacity':'1'},120)
            .animate({'backgroundColor': '#262729','color':'#777'},{duration:400, complete: function(){
              $(this).attr('style', ' ');
            }});
        }, 100);
      }
    }

    } else {
    var champText = $("#champ-drop .champ-list-entry .champ-text").first().text();
    if(champText.length>0){ $(this).val(champText) };
    $("#champ-drop").fadeOut();
    league.champion($(this).val());
    $('#advertisement').html('<iframe src="http://ib.adnxs.com/tt?id=2359794&referrer=2ez.gg" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0" allowtransparency="true" width="300" height="250"></iframe>');

    var $id;
    if (shiftKeyPressed) {
      $id = $("#"+appSettings['shiftChampLink'])
    } else if(ctrlKeyPressed) {
      $id = $("#"+appSettings['ctrlChampLink'])
    } else {
      $id = $("#"+appSettings['defaultChampLink'])
    }

    if(web.checkIfBelongs('.website-champ') && appSettings['smartEnter'] == 'on' && !ctrlKeyPressed && !shiftKeyPressed){
      if(detectmob()){
        window.location.replace(web.checkIfBelongs('.website-champ'));
      } else {
        web.makeIframe(web.checkIfBelongs('.website-champ'));
        history.pushState("", "", "#" + web.hashWithoutParams() + "?champ=" + encodeURIComponent(league.champ));

        ga('send', 'pageview', "#" + web.hashWithoutParams());
      }

    } else {

      if(detectmob()){
        window.location.replace($id.attr('href'));
      } else {
          web.makeIframe($id.attr('href'));
          $(".nav-button li").removeClass('selected-link');
        $id.children('li').addClass('selected-link');
        history.pushState("", "", "#" + $id.data('name') + "?champ=" + encodeURIComponent(league.champ));
        ga('send', 'pageview', "#" + web.hashWithoutParams());
      }

    }

    }
});


$("#champ-drop").on('click', '.champ-list-entry', function(){
  var $inputName = $(this).data("name");
  $(".champ").val($inputName);

  $(".website-champ li:not(.selected-link)").animate({'backgroundColor': '#303033','color':'#939393'},150)
                .animate({'opacity':'1'},120)
                .animate({'backgroundColor': '#262729','color':'#5e5e5e'},{duration:400, complete: function(){
                  $(this).attr('style', ' ');
                }
    });
});

$champ.on('blur', function(){
  // hacky thing to allow clicks on the champ-drop menu
   setTimeout(function(){
     $("#champ-drop").css('display','none');
   }, 200);
});
