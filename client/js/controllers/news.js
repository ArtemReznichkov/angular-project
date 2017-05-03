angular.module("myApp").controller("newsCtrl", ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    
     
     function getItems() {
        $http.get('./data.json').then(function(resp) {
            $scope.getNews = resp.data;
            
            
        }, function(err) {
          console.log(err);
        });
     }
     getItems();
     
      $scope.month = ['January','February','March','April','May','June',
    'July','August','September','October','November','December'];
    $scope.paramId = +$routeParams.id;
    
    
}])