angular.module('directives-grid-items', [
  'templates',
  'ngResource'])

.directive('gridItems', [ function (){
  return {
    restrict: 'E',
    transclude: true,
    controller: 'gridItemsCtrl',
    templateUrl: 'angular/global/directives/grid_items/templates/grid-items.html'
  };
}])