angular.module('directoryApp',[])
	.controller('directoryController', function($scope) {
		$scope.list = [
			{name:'Carlos',age:29},
			{name:'Sasha', age: 23},
			{name:'John', age:40},
			{name:'Mark', age: 44}
		];

		$scope.addPerson = function() {
			$scope.list.push({name:$scope.name, age: $scope.age});
			$scope.name = "";
			$scope.age = 0;
		};
	});