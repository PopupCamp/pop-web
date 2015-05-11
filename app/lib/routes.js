Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

Router.route('events', {
  name: 'events',
  controller: 'EventsController',
  action: 'action',
  where: 'client'
});

Router.route('events/startupfest', {
  name: 'startupfest',
  controller: 'StartupFestController',
  action: 'action',
  where: 'client'
});