angular.module('directives-header').controller('headerCtrl',
	['$http','$scope','$location', function ($http, $scope, $location) {

		$scope.helloHeaderCtrl = "Hi, from header controllers!";
    
    $scope.headerShowState = false;

    $scope.toggleHeader = function (headerShowState) {
      if(headerShowState){
        $scope.headerShowState = false;
      }else{
        $scope.headerShowState = true;
      }
    };

}]);