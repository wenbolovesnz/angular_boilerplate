angular.module('myApp')
    .controller('HomeController', ['$scope', function($scope){
        var homeVm = this;

        homeVm.test = 'This is working';

    }]);
