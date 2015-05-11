getUserLanguage = function () {
  // Put here the logic for determining the user language

  return "fr";
};

Meteor.startup(function () {
  $('body').attr('id', 'page-top');
  Session.set("showLoadingIndicator", true);

  TAPi18n.setLanguage(getUserLanguage())
    .done(function () {
      Session.set("showLoadingIndicator", false);
    })
    .fail(function (error_message) {
      // Handle the situation
      console.log(error_message);
    });
});
