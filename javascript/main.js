



$(document).ready(function(){

  $("#header__button").click(function() {
    $(this).toggleClass("hamburger--open");
    $('#menu').fadeIn(200);
    $('body').addClass('stop-scrolling');
  });

  $('#menuTop p').click(function(){
    $('#header__button').toggleClass("hamburger--open");
    $('.hamburger__inner').css({'color':'rgb(23,23,23)'});
    $('#menu').fadeOut(200);
    $('body').removeClass('stop-scrolling');

  });
  //======================== on Load ==============================


  $('body').css({'visibility':'visible'}).addClass('animated fadeIn');



  setTimeout(bounceInFunction, 100);
  setTimeout(flip2, 500);
  setTimeout(fadeUpGreen, 700);


function bounceInFunction() {
      $('#title').css({'visibility':'visible'}).addClass('animated flipInX');
}
function flip2() {
    $('#titleUnder').css({'visibility':'visible'}).addClass('animated flipInX');

}
function fadeUpGreen() {

    $('.green').css({'visibility':'visible'}).addClass('animated fadeInUp');
}

$('header img').addClass('fadeToColor');

//============================== ON SCROLL ===================================
$('.hvaKanViGjore h1, .hvaKanViGjore hr, .hvaKanViGjore p, .hvaKanViGjore i').css({'visibility':'hidden'});
$('#chooseSystem').css({'visibility':'hidden'});

$(window).scroll(function() {
  $('#nexuRound').each(function(){
  var imagePos = $('#hvaViGjor').offset().top;
  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+400) {
    $('#nexuRound').fadeIn(2000).addClass('animated fadeInDown');
    }
  });

		$('#hvaViGjor').each(function(){
		var imagePos = $('#hvaViGjor').offset().top;
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+300) {
        $('#hvaViGjor h1, #hvaViGjor hr, #hvaViGjor p, #hvaViGjor i').css({'visibility':'visible'}).addClass('animated fadeInUp');
			}
		});

    $('#hvemViJobberFor').each(function(){
		var imagePos = $('#hvemViJobberFor').offset().top;
		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$('#hvemViJobberFor h1, #hvemViJobberFor hr, #hvemViJobberFor p, #hvemViJobberFor i').css({'visibility':'visible'}).addClass('animated fadeInUp');

			}
		});



    $('#chooseSystem').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+400) {
        $('#chooseSystem').css({'visibility':'visible'}).addClass('animated fadeIn ');
        return false;
      }
    });

    $('#contact').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+400) {
        $('#messageUs h1, #messageUs h4, #messageUs h5, #messageUs p').css({'visibility':'visible'}).addClass('animated fadeInUp ');
      }
    });

    $('#quick-contact-button').each(function(){
    var imagePos = $('#wobbleContact').offset().top;
    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow) {
        $('#quick-contact-button p').addClass('animated wobble');
      }
    });

    $('footer').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow +300) {
        $('footer h1, footer p').css({'visibility':'visible'}).addClass('animated fadeInUp');
      }
    });
	});



//============================ on hover ===========================

$('.green').hover(function(){
  $('#computer').addClass('animated bounce');

});

//===========================CLICK EVENTS==============================

// LINKS
$("#tjenester").click(function() {
    window.location = "tjenester.html";
});
$("#helsesektor").click(function() {
    window.location = "index.html";
});
$("#kontakt").click(function() {
    window.location = "about.html";
});

$("#stillinger").click(function() {
    window.location = "ansettelse.html";
});

$("#logo").click(function() {
    window.location = "index.html";
});

$("#support").click(function() {
    window.location = "https://hordalandikt.freshdesk.com/support/home";
});

$(".contactButton").click(function(){
  window.location = "about.html";

});


//============================= App Events ============================



//=========================== SMOOTH SCROLL =================================
    function filterPath(string) {
    return string
      .replace(/^\//,'')
      .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
      .replace(/\/$/,'');
    }
    var locationPath = filterPath(location.pathname);
    var scrollElem = scrollableElement('html', 'body');

    $('a[href*=#]').each(function() {
      var thisPath = filterPath(this.pathname) || locationPath;
      if (  locationPath == thisPath
      && (location.hostname == this.hostname || !this.hostname)
      && this.hash.replace(/#/,'') ) {
        var $target = $(this.hash), target = this.hash;
        if (target) {
          var targetOffset = $target.offset().top;
          $(this).click(function(event) {
            event.preventDefault();
            $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
              location.hash = target;
            });
          });
        }
      }
    });

    // use the first element that is "scrollable"
    function scrollableElement(els) {
      for (var i = 0, argLength = arguments.length; i <argLength; i++) {
        var el = arguments[i],
            $scrollElement = $(el);
        if ($scrollElement.scrollTop()> 0) {
          return el;
        } else {
          $scrollElement.scrollTop(1);
          var isScrollable = $scrollElement.scrollTop()> 0;
          $scrollElement.scrollTop(0);
          if (isScrollable) {
            return el;
          }
        }
      }
      return [];
    }
// <------ end SMOOTH SCROLL --------->


}); // <----- DOCUMENT READY
