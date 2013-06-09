console.log($(window).height())
console.log($(window).width())

jQuery.fn.extend({
  createModal : function() {
    return this.each(function () {
      $(this).wrap("<div class=\"modal-container\"><div class=\"modal-box\"><div class=\"content-container\"></div></div></div>");
      $(".content-container").before("<div class=\"title-bar\"></div>");
      $(".title-bar").append("<img src=\"assets/close-button.jpg\" alt=\"Close\" class=\"close-button\"/>")
    });
  },
  openModal : function () {
    return this.each(function () {
      if (!$(this).is(":visible")) {
        $(this).parents(".modal-container").show();
      }
    });
  },

  closeModal : function () {
    return this.each(function () {
      $(this).parents(".modal-container").remove();
    });
  }
});

$(document).ready(function() {
  $(".nav-index").click(function() {
    $(".index-menu").slideToggle('slow');
  });

  $(".nav-contact").click(function() {
    $(".contact-menu").slideToggle('slow');
  });

  $(".nav-admin").click(function() {
    $(".admin-menu").slideToggle('slow');
  });

});
