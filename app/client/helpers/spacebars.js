Template.registerHelper('navbarExpanded', function() {
  var changeHeaderOn;
  changeHeaderOn = 200;
  if ((Router.current().route.getName() === "home") && (Session.get('yOffset') <= changeHeaderOn)) {
    return "navbar-expanded";
  } else {
    return "";
  }
});

Template.registerHelper('notHomeRoute', function() {
  if (Router.current().route.getName() !== "home") {
    return "/home";
  } else {
    return "";
  }
});
