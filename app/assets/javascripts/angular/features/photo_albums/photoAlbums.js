angular.module('awp-photo-albums',[
	'templates',
	'ngRoute',
  'directives-header'])

.config(['$routeProvider', function ($routeProvider){

	$routeProvider
		.when('/photo-albums',{
			templateUrl: 'angular/features/photo_albums/templates/photo-albums.html',
			controller: 'photoAlbumsCtrl'
		});
}]);

