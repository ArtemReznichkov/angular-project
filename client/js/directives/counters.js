angular.module("myApp").directive('counterDir', function () {
            return {
                restrict: 'E',
                templateUrl: 'templates/counters.html',
                
                
                controller: function ($scope, $interval, $timeout,  $document) {
                    $scope.countersArr=[
                    	{text:"COMPLETED PROJECTS", count: 4, src: "img/count1.png"},
                    	{text:"CLICK PRESED", count: 0, src: "img/count2.png"},
                    	{text:"MAILS SENTED & RECIVED", count: 0, src: "img/count3.png"},
                    	{text:"JOKES TOLDS", count: 0, src: "img/count4.png"},
                    ];
              
   
                $scope.startCount1 = function(){
                    var interval = $interval(function() {
                        $scope.countersArr[0].count += 10;
                        if ($scope.countersArr[0].count == 3054){
                            $interval.cancel(interval);
                        }
                    },10)
                }
                 $scope.startCount2 = function(){
                    var interval = $interval(function() {
                        $scope.countersArr[1].count += 17267;
                        if ($scope.countersArr[1].count == 7234873){
                            $interval.cancel(interval);
                        }
                    },8)
                }
                 $scope.startCount3 = function(){
                    var interval = $interval(function() {
                        $scope.countersArr[2].count += 10;
                        if ($scope.countersArr[2].count == 4670){
                            $interval.cancel(interval);
                        }
                    },6.4)
                }
                 $scope.startCount4 = function(){
                    var interval = $interval(function() {
                        $scope.countersArr[3].count += 3;
                        if ($scope.countersArr[3].count == 939){
                            $interval.cancel(interval);
                        }
                    },10)
                }
                
              
                var marker = true
                  
                window.onscroll = function(){
                    if(document.body.scrollTop>=document.getElementById("counters").offsetTop-document.documentElement.clientHeight){
                        if(marker){
                         $scope.startCount1();
                         $scope.startCount2();
                         $scope.startCount3();
                         $scope.startCount4();
                            
                         marker = false;
                        }
                    }
                }
                
             
                
            }
            }
});   
                    
                    
                    
                    
   