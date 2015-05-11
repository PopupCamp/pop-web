Template.registerHelper("navbarExpanded", function() {
  var changeHeaderOn = 200;
  if (Session.get("yOffset") <= changeHeaderOn) {
    return "navbar-expanded";
  } else {
    return "";
  }
});
