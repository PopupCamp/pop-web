/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('events', function (/* args */) {
  return Events.find();
});

Meteor.publish(null, function (){
  return Meteor.roles.find({})
})
