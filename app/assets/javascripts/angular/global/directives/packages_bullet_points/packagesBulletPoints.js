angular.module('directives-packages-bullet-points', [
  'templates',
  'ngResource'])

.directive('packagesBulletPoints', [ function (){
  return {
    restrict: 'E',
    transclude: true,
    controller: 'packagesBulletPointsCtrl',
    templateUrl: 'angular/global/directives/packages_bullet_points/templates/packages-bullet-points.html'
  };
}])