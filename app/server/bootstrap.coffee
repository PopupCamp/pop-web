bootstrapUsers = ->
  users = Meteor.users.find(emails:
    $elemMatch:
      address:
        $in: [ "gen.begin@popupcamp.com", "paulcu@gmail.com", "melyan.vezina@popupcamp.com" ]
  )
  users.forEach (user) ->
    Roles.addUserToRoles user._id, ["admin"] unless Roles.userHasRole(user._id, "admin")
  return Meteor.users.findOne(emails:
    $elemMatch:
      address: "paulcu@gmail.com"
  )

Meteor.startup ->
  admin = bootstrapUsers()
