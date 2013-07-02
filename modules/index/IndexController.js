define(['app'], function(app) {
  app.controller('IndexController', ['$scope', '$routeParams',
    function IndexController($scope, $routeParams) {
		
		$scope.items = [{ name: "Podgorica", id: "1" }, { name: "Niksic", id: "2" }];
		
	}
  ]);
});