
var top0 = $('#welcome-section').offset().top;
var top1 = $('#about-me').offset().top;
var top2 = $('#skills').offset().top;
var top3 = $('#projects').offset().top;
var top4 = $('#contact').offset().top;


$(document).ready(function(){

  $(document).scroll(function() {
    var scrollPos = $(document).scrollTop();
    if (scrollPos >= top0 && scrollPos < top1){
      $('#change a').css('color', 'black');
      $('nav img').css('filter', 'none');
    }else if (scrollPos >= top1 && scrollPos < top2) {
      $('#change a').css('color', 'white');
      $('nav img').css('filter', 'invert(100) sepia(100)');
    } else if (scrollPos >= top2 && scrollPos < top3) {
      $('#change a').css('color', 'white');
      $('nav img').css('filter', 'none');
    } else if (scrollPos >= top3 && scrollPos < top4) {
        $('#change a').css('color', '#53151f');
        $('nav img').css('filter', 'none');
     }else if (scrollPos >= top4) {
        $('#change a').css('color', 'white');
        $('nav img').css('filter', 'invert(100) sepia(100)');
    }
  });

  if($(window).width() < 550 || $(document).width() < 550  ){
    $('#nav-links').hide();
  }else{
    $('#nav-links').unhide();
  };

});
