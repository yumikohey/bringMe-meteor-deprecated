Users = new Mongo.Collection("bringme_users");

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
        $scope.users = $meteor.collection(Users);
        console.log($scope.users);
      }]);
}