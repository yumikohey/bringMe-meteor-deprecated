if (Meteor.isClient) {
	angular.module('bringMe', ['angular-meteor', 'ui.router', 'ionic']);

	angular.module('bringMe').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){
    	$locationProvider.html5Mode(true);

    	$stateProvider
    	  .state('login', {
    	  	url: '/login',
    	  	templateUrl: 'client/login.ng.html',
            controller: 'loginCtrl'
    	  })
          .state('register', {
            url: '/register',
            templateUrl: 'client/register.ng.html',
            controller: 'registerCtrl'
          })
          .state('home', {
            url: '/home',
            templateUrl: 'client/index.ng.html',
          })

    	$urlRouterProvider.otherwise("/parties");
    }]);

    angular.module('bringMe').controller('registerCtrl', ['$scope', '$meteor', function ($scope, $meteor) {
        $scope.register = function(user){
          Meteor.call('userRegister', user, function(err, result) {
            if(!err){
                console.log("Congratulations! You successfully created an account with BringMe!");
            }else{
              console.log(err);
            }
          });
        }
      }]);

    angular.module('bringMe').controller('loginCtrl', ['$scope', '$meteor', function ($scope, $meteor) {
        $scope.login = function(user){
          $meteor.subscribe('bringme_users', user.username)
          .then(function(subscriptionHandle){
            var returnUser = $meteor.collection(Users);
            var hash = returnUser[0].password;
            Meteor.call('userLogin', user.password, hash, function(err, result) {
              if(!err){
                  console.log("Thanks for returning");
              }else{
                  console.log(err);
              }
            });
            subscriptionHandle.stop();
          })

        }
      }]);
}