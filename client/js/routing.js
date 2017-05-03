angular.module("myApp").config(function ($routeProvider) {
   
        
 $routeProvider
        .when('/', {
            reloadOnSearch: false,
            templateUrl: 'templates/main.html',
            

        })
        .when('/news/:id', {
            reloadOnSearch: false,
            templateUrl: 'templates/news.html',
            controller: 'newsCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
       
});