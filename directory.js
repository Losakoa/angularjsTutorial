angular.module('directoryApp',[])
	.controller('directoryController', function($scope) {
		
		//adding a controllerAs refering to the controller itself so I do not need the $scope part
		var dirList = this;

		dirList.list = [
			{name:'Carlos',age:29},
			{name:'Sasha', age: 23},
			{name:'John', age:40},
			{name:'Mark', age: 44}
		];

		dirList.addPerson = function() {
			dirList.list.push({name:dirList.name, age: dirList.age});
			dirList.name = "";
			dirList.age = 0;
		};

		dirList.removePerson = function() {
			dirList.list.pop({name:dirList.name, age: dirList.age});
			dirList.name = "";
			dirList.age =  0;
		};
	});