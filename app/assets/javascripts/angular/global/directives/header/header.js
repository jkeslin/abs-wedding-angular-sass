angular.module('directives-header', [
	'templates',
	'ngResource'])

.directive('homeHeader', [ function (){
	return {
		restrict: 'E',
    transclude: false,
		controller: 'headerCtrl',
		templateUrl: 'angular/global/directives/header/templates/home-header.html'
	};
}])