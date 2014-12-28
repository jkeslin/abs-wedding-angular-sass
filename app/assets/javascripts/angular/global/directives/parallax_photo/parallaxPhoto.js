angular.module('directives-parallax-photo', [
  'templates',
  'ngResource'])

.directive('parallaxPhoto', [ function (){
  return {
    restrict: 'E',
    transclude: true,
    controller: 'parallaxPhotoCtrl',
    templateUrl: 'angular/global/directives/parallax_photo/templates/parallax-photo.html'
  };
}])