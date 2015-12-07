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
            templateUrl: 'client/index.html',
          })

    	$urlRouterProvider.otherwise("/home");
    }]);

    angular.module('bringMe').controller('registerCtrl', ['$scope', '$meteor', function ($scope, $meteor) {
        $scope.register = function(user){
            Accounts.createUser({email:user.email, password:user.password}, function(err){
              if(err){
                $scope.failed = "Email has been registered";
                $scope.success = false;
              } else {
                $scope.success = true;
                $scope.failed = "";
              }
            });   
        }
      }]);

    angular.module('bringMe').controller('loginCtrl', ['$scope', '$meteor', function ($scope, $meteor) {
        $scope.login = function(user){
          Meteor.loginWithPassword(user.username, user.password, function(err){
            if(err){
              $scope.failed = "Incorrect email / password";
              $scope.success = false;
            } else {
              $scope.success = true;
              $scope.failed = "";
            }
          });
        }
      }]);
    
    if (Meteor.isCordova) {
      angular.element(document).on('deviceready', bootstrapTheApp);
    } else {
      bootstrapTheApp();
    }
}

function bootstrapTheApp() {
  angular.bootstrap(document, ['bringMe']);
}
