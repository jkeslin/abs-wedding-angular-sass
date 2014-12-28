angular.module('directives-knoxville-map', [
  'templates',
  'ngResource'])

.directive('knoxvilleMap', [ function (){
  return {
    restrict: 'E',
    transclude: true,
    controller: 'knoxvilleMapCtrl',
    templateUrl: 'angular/global/directives/knoxville_map/templates/knoxville-map.html'
  };
}])