const top1 = $('#about-me').offset().top;
const top2 = $('#skills').offset().top;
const top3 = $('#projects').offset().top;

$(document).scroll(function() {
  const scrollPos = $(document).scrollTop();
  if (scrollPos >= top1 && scrollPos < top2) {
    $('#change').css('font-color', '#f00');
  } else if (scrollPos >= top2 && scrollPos < top3) {
    $('#change').css('color', '#0f0');
  } else if (scrollPos >= top3) {
    $('#change').css('text-color', '#00f');
  }
});