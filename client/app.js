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
    console.log("scrolling");
    Session.set("yOffset", window.pageYOffset || document.documentElement.scrollTop)
    console.log(Session.get("yOffset"));
  });
  return new WOW().init();
};
