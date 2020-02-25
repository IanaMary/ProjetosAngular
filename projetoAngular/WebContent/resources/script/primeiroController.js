var app = angular.module('loja', []);

app.controller('primeiroController', ['$scope', function($scope){
	
	$scope.user = {meuNome: 'Drigo', meuSobrenome: 'da Iana'};
	$scope.contador = 0;
	
	$scope.subContador = function() {
		if($scope.contador > 0){
			$scope.contador--;
		}
	};
	
	$scope.addContador = function() {
			$scope.contador++;
	};
	
	$scope.pessoas = ['Iana', 'Mary', 'Rodrigo', 'Clara'];
	
}]);