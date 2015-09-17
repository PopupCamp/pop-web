Router.configure
  layoutTemplate: "MasterLayout"
  loadingTemplate: "Loading"
  notFoundTemplate: "NotFound"
  trackPageView: true

Router.onBeforeAction (->
  unless Meteor.user()
    @render "AccessDenied"
  else
    @next()
),
  only: [ "profile" ]

AccountsTemplates.configureRoute('signIn');

Router.route "home",
  name: "home"
  controller: "HomeController"
  action: "action"
  where: "client"

Router.route "/", ->
  @redirect "/home"

Router.route "events",
  name: "events"
  controller: "EventsController"
  action: "action"
  where: "client"

Router.route "events/startupfest",
  name: "events/startupfest"
  controller: "StartupFestController"
  action: "action"
  where: "client"

Router.route 'sponsors',
  name: 'sponsors'
  controller: 'SponsorsController'
  action: 'action'
  where: 'client'

Router.route 'parents',
  name: 'parents'
  controller: 'ParentsController'
  action: 'action'
  where: 'client'

Router.route 'organizers',
  name: 'organizers'
  controller: 'OrganizersController'
  action: 'action'
  where: 'client'
