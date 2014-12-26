var awp = angular.module('awp', [
// Vendor / NG modules
	'ngRoute',
	'ngResource',
// awp modules
	'awp-home',
	'awp-photo-albums'
]); 

awp.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {

	// This provides the security token that Rails is looking for
	$httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

	$locationProvider.html5Mode(true);

}]);


