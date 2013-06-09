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
  var slidesAnimated;


  //function to start slideshow
  function startSlides() {
    if (!slidesAnimated) {
      slidesAnimated = setInterval(function() {
        (index === limit) ? slider("+=" + fullTurn, upperSpeed): slider("-=" + slideDist, lowerSpeed);
        index = (index === limit) ? 0 : index + 1;
      }, interval);
    }
  }

  //function to pause slideshow
  function pauseSlides() {
    clearInterval(slidesAnimated);
    slidesAnimated = null;  //to allow startSlides to be called again
  }

  if (!slidesAnimated) {
    startSlides();
  }

  //left arrow button to move to the photo on the left
  $("a.left").click(function() {
    if (!$(kids[index]).is(":animated")) {
      (index === 0) ? slider("-=" + fullTurn, upperSpeed) : slider("+=" + slideDist, lowerSpeed);
      index = ((index - 1) < 0) ? limit : index - 1;
      pauseSlides();
    }
  });

  //right arrow button to move to the photo on the right
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

//infield label javascript

$(document).ready(function() {
  $(".form-field").focusin(function () {
    $label = $($(this).find('label'));
    $input = $($(this).find(':input'));
    //Detect if filled by autocomplete
    setTimeout(function() {
      if ($input.is(":visible") && $input.val() !== "") {
        $label.hide();
      }
    }, 2500);
    //prevent label from showing up on input select
    if ($input.val() !== "") {
      $input.select(function() {
        $label.hide();
      });
    } else {
      $label.fadeTo(100, 0.5);
      $input.keydown(function() {
        $label.hide();
        $input.unbind('keydown');
      });
    }
  });

  $(".form-field").focusout(function() {
    $input = $($(this).find(':input'))
    if ($input.val() === "") {
      $($(this).find('label')).fadeTo(100, 1);
    }
  });
});

$(document).ready(function() {
  $(".multi-dropdown").find("div#bar").each(function () {
    var $clickedMenu = $(this)
    $clickedMenu.find(".bar-link").click(function () {
      if (!$("div.open").find("#code-field").is(":animated")) {
        if ($clickedMenu.hasClass("closed")) {
          slideClosedUp();

          var $prevOpen = $($(".multi-dropdown").find("div.open"))
          $prevOpen.find("#code-field").slideUp();
          $prevOpen.addClass("closed");
          $prevOpen.removeClass("open");

          $clickedMenu.find("#code-field").slideDown();
          $clickedMenu.removeClass("closed")
          $clickedMenu.addClass("open")
          $clickedMenu.next().animate({"margin-top": 400});
        }  else if ($clickedMenu.hasClass("open")) {
          slideClosedUp();

          $clickedMenu.find("#code-field").slideUp();
          $clickedMenu.addClass("closed");
          $clickedMenu.removeClass("open");
        }
      }
    });
  });

  function slideClosedUp () {
    $(".multi-dropdown").find("div.closed").each(function() {
      if ($(this).css("margin-top") === "400px") {
        $(this).animate({"margin-top": 0});
      }
    });
  }
   
});
