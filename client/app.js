Meteor.startup(function() {
  $('body').attr('id', 'page-top');
});

function scrollPage() {
  var sy = scrollY();
  if (sy >= changeHeaderOn) {
    classie.remove(header, 'navbar-expanded');
  }
  else {
    classie.add(header, 'navbar-expanded');
  }
  didScroll = false;
}

Template.landing.rendered = function() {
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

  // Formstone Wallpaper - Video Background Settings
  $("header.video").wallpaper({
      source: {
          poster: "assets/img/bg-mobile-fallback.jpg",
          mp4: "assets/mp4/camera.mp4"
      }
  });

  // Scrollspy: Highlights the navigation menu items while scrolling.
  $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 51
  })

  // Portfolio Filtering Scripts & Hover Effect
  var filterList = {
      init: function() {

          // MixItUp plugin
          // http://mixitup.io
          $('#portfoliolist').mixitup({
              targetSelector: '.portfolio',
              filterSelector: '.filter',
              effects: ['fade'],
              easing: 'snap',
              // call the hover effect
              onMixEnd: filterList.hoverEffect()
          });

      },

      hoverEffect: function() {
          // Simple parallax effect
          $('#portfoliolist .portfolio').hover(
              function() {
                  $(this).find('.caption').stop().animate({
                      bottom: 0
                  }, 200, 'easeOutQuad');
                  $(this).find('img').stop().animate({
                      top: -20
                  }, 300, 'easeOutQuad');
              },
              function() {
                  $(this).find('.caption').stop().animate({
                      bottom: -75
                  }, 200, 'easeInQuad');
                  $(this).find('img').stop().animate({
                      top: 0
                  }, 300, 'easeOutQuad');
              }
          );

      }

  };
  filterList.init();

  return new WOW().init();
};
