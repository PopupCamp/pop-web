Template.registerHelper 'navbarExpanded', ->
  changeHeaderOn = undefined
  changeHeaderOn = 200
  if Router.current().route.getName() == 'home' and Session.get('yOffset') <= changeHeaderOn
    'navbar-expanded'
  else
    ''
Template.registerHelper 'notHomeRoute', ->
  if Router.current().route.getName() != 'home'
    '/home'
  else
    ''
