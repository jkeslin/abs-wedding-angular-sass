angular.module('directives-footer', [
	'templates',
	'ngResource'])

.directive('homeFooter', [ function (){
	return {
		restrict: 'E',
    transclude: false,
		controller: 'homeFooterCtrl',
		templateUrl: 'angular/global/directives/footer/templates/home-footer.html'
	};
}])