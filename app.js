if (Meteor.isClient) {
	angular.module('bringMe', ['angular-meteor', 'ui.router', 'ionic']);

	angular.module('bringMe').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){
    	$locationProvider.html5Mode(true);

    	$stateProvider
    	  .state('login', {
    	  	url: '/login',
    	  	templateUrl: 'client/login.ng.html'
    	  })
          .state('register', {
            url: '/register',
            templateUrl: 'client/register.ng.html'
          })
          .state('home', {
            url: '/home',
            templateUrl: 'client/index.ng.html',
            controller: 'registerCtrl'
          })

    	$urlRouterProvider.otherwise("/parties");
    }]);

    angular.module('bringMe').controller('registerCtrl', ['$scope', '$meteor', function ($scope, $meteor) {
        var user = {
          email: 'test@abc.com',
          username: 'test',
          password: 'abc123'
        }
        Meteor.call('userRegister', user, function(err, result) {
          if(!err){
            $scope.users = $meteor.collection(Users).subscribe('bringme_users');
          }else{
            console.log(err);
          }
        });
      }]);
}