var app = angular.module('loja', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when("/", {controller: "listController", templateUrl: "list.html"})
	.when("/edit/:name", {controller: "editController", templateUrl: "form.html"})
	.when("/new", {controller: "newController", templateUrl: "form.html"})
	.otherwise({redirectTo: "/"});
});

app.run(function($rootScope) {
	$rootScope.frutas = ['banana', 'melancia', 'pera'];
});

app.controller('listController', ['$scope', function listController($scope){
	
}]);

app.controller('editController', ['$scope', '$location','$routeParams',
	function editController($scope, $location, $routeParams) {
	$scope.title = 'Editar Fruta';
	$scope.fruta = $routeParams.name;
	$scope.frutaIndex = $scope.frutas.indexOf($scope.fruta);
	
	$scope.salvar = function() {
		$scope.frutas[$scope.frutaIndex] = $scope.fruta;
		$location.path('/');
	};
	
}]);

app.controller('newController', ['$scope', '$routeParams', '$rootScope', '$route', '$location',
	function newController($scope, $routeParams, $rootScope, $route, $location) {
	$scope.title = 'Nova Fruta';
	$scope.fruta = '';
	
	$scope.salvar = function() {
		$scope.frutas.push($scope.fruta);
		$location.path('/');
	};
	
}])

