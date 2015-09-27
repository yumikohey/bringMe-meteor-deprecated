Meteor.publish("bringme_users", function (username) {
  return Users.find({username:username});
});