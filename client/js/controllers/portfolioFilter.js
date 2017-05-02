var app = angular.module('myApp')
app.controller("portfolioCtrl", function ($scope){
        $scope.photos = [
        { src: "img/portfolio1.png", cover: "WEB"},
        { src: "img/portfolio2.png", cover: "GRAPHIC DESIGN"},
        { src: "img/portfolio3.png", cover: "PHOTOGRAPHY"},
        { src: "img/portfolio1.png", cover: "WEB"},
        { src: "img/portfolio2.png", cover: "GRAPHIC DESIGN"},
        { src: "img/portfolio3.png", cover: "PHOTOGRAPHY"},
        { src: "img/portfolio1.png", cover: "WEB"},
        { src: "img/portfolio2.png", cover: "GRAPHIC DESIGN"},
        { src: "img/portfolio3.png", cover: "PHOTOGRAPHY"},
        { src: "img/portfolio1.png", cover: "WEB"},
        { src: "img/portfolio2.png", cover: "GRAPHIC DESIGN"},
        { src: "img/portfolio3.png", cover: "PHOTOGRAPHY"}
        ];
        $scope.selected = "all";
})



app.filter('portFilter', function (){
    
    return function(arr, scope){
        if(scope.selected == "all") return arr;
       
        var fil = [];
        (function filterson(){
            for(var i = 0; i < arr.length; i++){
                if(arr[i].cover == scope.selected){
                    fil.push(arr[i]);
                }
            }
        })();
        return fil;
    }
})


