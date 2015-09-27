Meteor.methods({
	'encryptPassword': function(password){
		var bcrypt = Meteor.npmRequire('bcrypt');
		var salt = bcrypt.genSaltSync(10);
		var encryptedPassword = bcrypt.hashSync(password, salt);
		return encryptedPassword;
	},
	'checkPassword': function(password, hash){
		var bcrypt = Meteor.npmRequire('bcrypt');
		return bcrypt.compareSync(password, hash);
	},
	'checkEmail': function(email){
		if ((Users.find({email:email}).count()) === 0 ){
			return true;
		} else {
			return false;
		}
	},
	'checkUsername': function(username){
		if ((Users.find({username:username}).count()) === 0 ){
			return true;
		} else {
			return false;
		}
	},
	'userRegister':function(user){
		var encryptedPw;
		var errors = [];
		var email, username;
		Meteor.call('checkEmail', user.email, function(err, result) {
			if (result) {
				email = true;
			} else {
				errors.push(new Meteor.Error("email-exsits", "Email already registered"));
			}
		});
		Meteor.call('checkUsername', user.username, function(err, result) {
			if (result) {
				username = true;
			} else {
				errors.push(new Meteor.Error("username-exsits", "Username has been used"));
			}
		});

		if (email && username){
			Meteor.call('encryptPassword', user.password, function(err, result){
				encryptedPw = result;
				console.log(encryptedPw);
			});
			Users.insert({email:user.email, username:user.username, password:encryptedPw});
		}

		if (errors.length > 0){
			for(var i=0; i < errors.length; i++){
				throw new Meteor.Error(errors[i].error, errors[i].reason);
			}
		}
		
		// Meteor.call('checkPassword', user.password, encryptedPw, function(err, result){
		// 	console.log(result);
		// });
		
	}
});