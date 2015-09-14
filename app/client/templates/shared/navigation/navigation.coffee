# Navigation: Event Handlers
Template.Navigation.events {
  "click #at-nav-button": (event) ->
    if Meteor.user()
      AccountsTemplates.logout()
    else
      Router.go "login"
}

# Navigation: Helpers
Template.Navigation.helpers {
  active: (path) ->
    (if Router.current().url is path then "active" else "")
}

# Navigation: Lifecycle Hooks
Template.Navigation.created = ->

Template.Navigation.rendered = ->

Template.Navigation.destroyed = ->
