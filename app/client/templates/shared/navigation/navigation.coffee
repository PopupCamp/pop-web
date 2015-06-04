# Navigation: Event Handlers
Template.Navigation.events {}

# Navigation: Helpers
Template.Navigation.helpers {
  active: (path) ->
    (if Router.current().url is path then "active" else "")
}

# Navigation: Lifecycle Hooks
Template.Navigation.created = ->

Template.Navigation.rendered = ->

Template.Navigation.destroyed = ->
