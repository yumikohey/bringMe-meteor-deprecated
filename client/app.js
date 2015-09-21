if (Meteor.isClient) {
	angular.module('bringMe', ['angular-meteor', 'ui.router', 'ionic']);

	angular.module('bringMe').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){
    	$locationProvider.html5Mode(true);

    	$stateProvider
    	  .state('shopping', {
    	  	url: '/',
    	  	templateUrl: 'client/index.ng.html'
    	  });

    	$urlRouterProvider.otherwise("/parties");
    }]);
}