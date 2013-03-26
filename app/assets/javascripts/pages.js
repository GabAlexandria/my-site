//slider javascript

$(document).ready(function() {
  //dynamic calculation of sliding
  var kids = $("ul.slides").find('li');
  var numOfKids = kids.length;
  var limit = numOfKids - 1;
  var slideDist = parseInt($(".slider").css('width'), 10);
  var fullTurn = slideDist * limit;

  //sliding speeds
  var lowerSpeed = 400;
  var upperSpeed = 'fast';
  var interval = 3000;

  var leftPos = 0;

  //use javascript to dynamically set left attribute
  for (var pos = 0; pos < numOfKids; pos += 1) {
    $(kids[pos]).css('left', (leftPos + "px"));
    leftPos += slideDist;
  }

  //track current slide being seen
  var index = 0;

  //function to animate each slide
  function slider(distance, speed) {
    for (var pos = 0; pos < numOfKids; pos += 1) {
      $(kids[pos]).animate({left: distance}, speed);
    }
  }

  //variable to store setInterval
  var slideAnimation;

  //function to start slideshow
  function startSlides() {
    slideAnimation = setInterval(function() {
      (index === limit) ? slider("+=" + fullTurn, upperSpeed): slider("-=" + slideDist, lowerSpeed);
    index = (index === limit) ? 0 : index + 1;
    }, interval);
  }

  //function to pause slideshow
  function pauseSlides() {
    clearInterval(slideAnimation);
  }

  //startSlides();

  //
  $("a.left").click(function() {
    if (!$(kids[index]).is(":animated")) {
      (index === 0) ? slider("-=" + fullTurn, upperSpeed) : slider("+=" + slideDist, lowerSpeed);
      index = ((index - 1) < 0) ? limit : index - 1;
      pauseSlides();
    }
  });

  $("a.right").click(function() {
    if (!$(kids[index]).is(":animated")) {
      (index === limit) ? slider("+=" + fullTurn, upperSpeed) : slider("-=" + slideDist, lowerSpeed);
      index = ((index + 1) < numOfKids) ? index + 1 : 0;
      pauseSlides();
    }
  });

  //number sliding
  $('ul.goToNum').find('a').each(function() {
    $(this).click(function() {
      toSlide = parseInt($(this).attr('id'), 10);
      if (toSlide !== index) {
        difference = Math.abs(index - toSlide);
        sign = (toSlide < index) ? "+=" : "-=";
        slider(sign + (slideDist * difference), upperSpeed);
        pauseSlides();
        index = toSlide;
      }
    });
  });

  //button to start slideshow
  $("button.start").click(function() {
    startSlides();
  });

  //button to stop slideshow
  $("button.pause").click(function() {
    pauseSlides();
  });

  $('div#arrow').hide();

  $('div.enter-area').hover(function() {
    $($(this).find('div')).show();
    }, function() {
      $($(this).find('div')).hide();
    }
  );
});