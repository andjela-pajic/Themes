$(document).ready(function(){
  console.log("mine")

$('li').click(function(event) {
  event.preventDefault();

  var idNeeded = $(this).find('a').attr('href');
  // alert(idNeeded)
  var distanceFromTop =  $(idNeeded).offset().top;
  var navBarHeight = $('nav').height();
 console.log(navBarHeight)
 $('html, body').animate({
      'scrollTop': distanceFromTop - navBarHeight
    }, 1000, "swing")})

  })
