(function (){
    'use strict';
    
    angular.module("MyModel", [])
    .controller("MyController", MyFunction);

    MyFunction.$inject = ["$scope"];
    function MyFunction($scope){
        $scope.input = "";
        $scope.output = "";

        $scope.calc = function (){
            $scope.list = $scope.input.split(',');
            if( $scope.list[0] == "" && $scope.list.length== 1)
            $scope.output = "Please enter data first";
            else if ($scope.list.length <= 3)
            $scope.output = "Enjoy!";
            else $scope.output = "Too much!";

        };

    }
}
)();