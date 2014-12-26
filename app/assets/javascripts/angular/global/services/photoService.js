angular.module('services-photo-service', [])

.service('photoService', ['photoFactory', function (photoFactory) {
  
  this.chooseCurrentPhoto = function(currentphotoId, photos) {
    var currentphoto = {};
    for(var index in photos){
      if(photos[index].photoId == currentphotoId){
        return currentphoto = photos[index];
      }
    }
    return currentPhoto;
  }

}]);