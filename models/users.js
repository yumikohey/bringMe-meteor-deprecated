Users = new Mongo.Collection("bringme_users");

Users.allow({
  insert: function (userId, user) {
    return userId;
  },
  update: function (userId, user) {
    return userId;
  },
  remove: function (userId, user) {
    return userId;
  }
});