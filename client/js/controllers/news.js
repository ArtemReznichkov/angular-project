angular.module("myApp").controller("newsCtrl", ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
     $scope.getItems = getItems;
     console.log($routeParams.id);
     function getItems() {
        $http.get('./data.json').then(function(resp) {
            $scope.getNews = resp.data;
            $scope.new = resp.data[$routeParams.id];
            
        }, function(err) {
          console.log(err);
        });
     }
     
      $scope.month = ['January','February','March','April','May','June',
    'July','August','September','October','November','December'];
    
    
}])