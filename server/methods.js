Meteor.methods({
	'userRegister':function(user){
		if(Users.find({email:user.email}).count() === 0) {
			Users.insert(email:user.email, username:user.username, password:user.password);
		} else {
			throw new Meteor.error('wrong-email', 'Email is already registered');
		}
	}
});