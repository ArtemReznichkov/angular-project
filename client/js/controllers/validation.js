angular.module('myApp').controller("formCtrl", function($scope){
            $scope.nameRegex = /^[a-z]+$/i; 
			$scope.mailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/;
			$scope.messageRegex=/^.{20,}$/

})