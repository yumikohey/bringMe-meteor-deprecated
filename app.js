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
              // $scope.users = $meteor.collection(Users).subscribe('bringme_users');
              // console.log($scope.users);
            }else{
              console.log(err);
            }
          });
        }
      }]);
}