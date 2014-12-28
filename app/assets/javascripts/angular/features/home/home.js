angular.module('awp-home',[
	'templates',
	'ngRoute',
	'ui.bootstrap',
	'ngAnimate',
  'directives-header',
  'directives-parallax-photo',
  'directives-grid-items',
  'directives-packages-bullet-points',
  'directives-knoxville-map',
  'directives-footer'])

.config(['$routeProvider', function ($routeProvider) {

	$routeProvider
    .when('/',{
      templateUrl: 'angular/features/home/templates/home.html',
      controller: 'homeCtrl'
		});

}]);