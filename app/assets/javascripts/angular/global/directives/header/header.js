angular.module('directives-header', [
	'templates',
	'ngResource'])

.directive('header', [ function (){
	return {
		restrict: 'E',
    transclude: false,
		controller: 'headerCtrl',
		templateUrl: 'angular/global/directives/header/templates/header.html'
	};
}])