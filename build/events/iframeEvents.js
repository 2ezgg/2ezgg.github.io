$("#sidebar-content").on('click','.iframe-capable', function(e){

  if(e.which !== 2){
    if(!detectmob()){
      e.preventDefault();
      $this = $(this);
      $("#main-content").fadeOut();

      var url = $this.attr('href');
      var dataName = $this.data('name');

      web.makeIframe(url);

      if($this.hasClass('website-name')){
        history.pushState("", "", "#" + dataName + "?name=" + encodeURIComponent(league.name) + "&server=" + encodeURIComponent(league.server));
      } else if($this.hasClass('website-champ')){
        history.pushState("", "", "#" + dataName + "?champ=" + encodeURIComponent(league.champ));
      } else{
        history.pushState("", "", "#" + dataName);
      }
    }
  }
});

$(".no-iframe").on('click', function(e){
  if(e.which !== 2){
    $("#main-content").css("display","block");
    $("#iframe-holder").css("display","none");
  }
});
