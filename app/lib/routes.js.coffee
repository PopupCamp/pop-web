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
