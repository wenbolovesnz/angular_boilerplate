angular.module('myApp', ['ui.router'])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("home");

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'js/home/home.html'
        });

}]);


