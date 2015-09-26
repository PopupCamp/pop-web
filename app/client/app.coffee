getUserLanguage = ->
  # Put here the logic for determining the user language
  "fr"

Meteor.startup ->
  $("body").attr "id", "page-top"
  Session.set "showLoadingIndicator", true
  TAPi18n.setLanguage(getUserLanguage()).done(->
    Session.set "showLoadingIndicator", false
  ).fail (error_message) ->
    # Handle the situation
    console.log error_message

  SEO.config
    title: "Popup Camp"
    meta:
      description: "Halte-garderie mobile événementielle / Mobile Child Care Services for Events"
    og:
      image: "http://popupcamp.com/img/profile.png"
