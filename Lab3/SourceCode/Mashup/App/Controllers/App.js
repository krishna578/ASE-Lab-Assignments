(function()
{
    var app = angular.module('SplitWise',['ngRoute']);
    app.config(function($routeProvider){
        $routeProvider
           .when('/',{
           controller:'LoginController',
           templateUrl:'App/Views/Login.html'
        }).when('/Home',{
            controller: 'IBMController',
            templateUrl : 'App/Views/Classify.html'
        }).when('/Register',{
             controller:'RegisterController',
            templateUrl : 'App/Views/Register.html'
        })
        .otherwise({redirectTo:'/'});
        
    });
    
}());