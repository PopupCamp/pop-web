/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
};

Template.Home.rendered = function () {
  $(window).scroll(function() {
    Session.set("yOffset", window.pageYOffset || document.documentElement.scrollTop)
  });

  // Smooth Scrolling: Smooth scrolls to an ID on the current page.
  // To use this feature, add a link on your page that links to an ID, and add the .page-scroll class to the link itself. See the docs for more details.
  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
  });

  // Activates floating label headings for the contact form.
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
  });

  // Owl Carousel Settings
  $(".about-carousel").owlCarousel({
      items: 3,
      navigation: true,
      pagination: false,
      navigationText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
  });

  $(".portfolio-carousel").owlCarousel({
      singleItem: true,
      navigation: true,
      pagination: false,
      navigationText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      autoHeight: true,
      mouseDrag: false,
      touchDrag: false,
      transitionStyle: "fadeUp"
  });

  $(".testimonials-carousel").owlCarousel({
      singleItem: true,
      navigation: true,
      pagination: true,
      autoHeight: true,
      navigationText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      transitionStyle: "backSlide"
  });

  $(".portfolio-gallery").owlCarousel({
      items: 3,
  });

  // Magnific Popup jQuery Lightbox Gallery Settings
  $('.gallery-link').magnificPopup({
      type: 'image',
      gallery: {
          enabled: true
      },
      image: {
          titleSrc: 'title'
      }
  });

  // Scrollspy: Highlights the navigation menu items while scrolling.
  $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 51
  })

  $('#portfoliolist').mixItUp();

  return new WOW().init();
};

Template.Home.destroyed = function () {
  $('#portfoliolist').mixItUp('destroy',true);
}
