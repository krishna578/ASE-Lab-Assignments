(function()
{
    var app = angular.module('Mlab',['ngRoute']);
    app.config(function($routeProvider){
        $routeProvider
           .when('/',{
           controller:'LoginController',
           templateUrl:'App/Views/Login.html'
        }).when('/Register',{
            controller: 'RegisterController',
            templateUrl : 'App/Views/Register.html'
        }).when('/Home',{
             controller:'HomeController',
            templateUrl : 'App/Views/Home.html'
        })
        .otherwise({redirectTo:'/'});
        
    });
    
}());