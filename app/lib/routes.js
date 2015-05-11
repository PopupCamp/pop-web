Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('home', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

Router.route('/', function () {
  this.redirect('/home');
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
