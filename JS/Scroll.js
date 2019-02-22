$(document).ready(function () {
    $('li#About').click(function() {
    $('html, body').animate({
      scrollTop: $("div.aboutWrapper").offset().top
    }, 1000)
  }), 
    $('li#Project').click(function (){
      $('html, body').animate({
        scrollTop: $("div.container-fluid").offset().top
      }, 1000)
    }),
    $('li#Contact').click(function (){
      $('html, body').animate({
        scrollTop: $("div.center-div").offset().top
      }, 1000)
    })
  });