// THIS PAGE TO BE DEPRECATED, DON'T RELY ON IT / ADD TO IT

awp.config(['$routeProvider', function ($routeProvider) {

	// Check each feature's main js file for route info
	$routeProvider
  	// ** Routes **
  	// '/'
		// '/photo-albums'
		// '/photo-albums/:id'

		.otherwise({
			redirectTo: "/"
		});
}]);