Blog.config
  adminRole: 'blogAdmin'
  authorRole: 'blogAuthor'
  comments:
    disqusShortname: 'popupcamp'

bootstrapUsers = ->
  users = Meteor.users.find(emails:
    $elemMatch:
      address:
        $in: [ "gen.begin@popupcamp.com", "paulcu@gmail.com", "melyan.vezina@popupcamp.com" ]
  )
  users.forEach (user) ->
    Roles.addUsersToRoles(user._id, ['blogAdmin'])

  return Meteor.users.findOne(emails:
    $elemMatch:
      address: "paulcu@gmail.com"
  )

Meteor.startup ->
  admin = bootstrapUsers()
