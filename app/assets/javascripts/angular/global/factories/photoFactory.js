angular.module('factories-photo-factory',[
	'ngResource'])

.factory('photoFactory', function photoFactory() {
	// When done this way, ANYTHING that uses productFactory is
	// referencing the SAME OBJECT
	
	var photos = [];

	return {
		getphotos: function () {
			//do something to get photos
			return photos;
		}
	}
});