// console.log('here');

// const navbar = document.getElementById('Header');
// const navLogo = document. querySelector('#header-img')
// window.onscroll = () => {
//     if (window.scrollY > 300) {
//         navbar.classList.add('nav-active');
//         navLogo.classList.add('img-active');
//     } else {
//         console.log(navbar)
//         navbar.classList.remove('nav-active');
//         navLogo.classList.remove('img-active');
//     }
// };
// var top1 = $('#about-me').offset().top;
// var top2 = $('#skills').offset().top;
// var top3 = $('#project').offset().top;


// $(document).scroll(function(){
//     var scrollPos = $(document).scrollTop();
//     if (scrollPos >= top1 && scrollPos < top2) {
//         $('#navbar').css('background-color', '#f00');
//       } else if (scrollPos >= top2 && scrollPos < top3) {
//         $('#navbar').css('background-color', '#0f0');
//       } else if (scrollPos >= top3) {
//         $('#navbar').css('background-color', '#00f');
//       }
// });
var top0 = $('#welcome-section').offset().top;
var top1 = $('#about-me').offset().top;
var top2 = $('#skills').offset().top;
var top3 = $('#projects').offset().top;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if (scrollPos >= top0 && scrollPos < top1){
    $('#change a').css('color', 'black');
    $('nav img').css('filter', 'none');
  }else if (scrollPos >= top1 && scrollPos < top2) {
    $('#change a').css('color', 'white');
    $('nav img').css('filter', 'sepia(100)');
  } else if (scrollPos >= top2 && scrollPos < top3) {
    $('#change a').css('color', 'white');
    $('nav img').css('filter', 'none');
  } else if (scrollPos >= top3) {
    $('#change a').css('color', '#53151f');
  }
});