Meteor.methods({
	'userRegister':function(user){
		Users.insert({email:user.email, username:user.username, password:user.password});
	}
});