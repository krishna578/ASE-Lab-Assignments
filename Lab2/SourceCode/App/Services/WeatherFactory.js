(function(){
    
    var WeatherFactory =function($http)
    {
        var factory = {};
        
        factory.getWeather = function(CityName)
        {
            var API_KEY = "a149d0dfbedce700edce4a82cccb6c32";
            var API_URI = "http://api.openweathermap.org/data/2.5/weather?q=" + CityName + "&APPID="+ API_KEY
            return $http.get(API_URI)
        };
        return factory;
    }
    WeatherFactory.$inject = ['$http'];
    angular.module("SplitWise").factory("WeatherFactory",WeatherFactory);
    
}());