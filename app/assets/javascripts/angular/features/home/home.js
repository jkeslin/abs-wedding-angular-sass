angular.module('awp-home',[
	'templates',
	'ngRoute',
	'ui.bootstrap',
	'ngAnimate',
  'directives-header'])

.config(['$routeProvider', function ($routeProvider) {

	$routeProvider
    .when('/',{
      templateUrl: 'angular/features/home/templates/home.html',
      controller: 'homeCtrl'
		});

}]);