Meteor.publish("bringme_users", function () {
  return Users.find({});
});