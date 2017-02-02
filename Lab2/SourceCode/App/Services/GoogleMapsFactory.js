(function(){

    var GoogleMapsFactory = function($http)

{
    var MapsFactory = {};
    var directionsService = new google.maps.DirectionsService();
    
    

  
   MapsFactory.calcRoute = function (Source,  Destination, obj_MAP) {
       
  var request = {
    origin: Source,
    destination: Destination,
    travelMode: 'DRIVING'
  };
       
  directionsService.route(request,function(Result,Status)
                         {
      if(Status == "OK")
      obj_MAP.setDirections(Result);
       
  });
       
 
}
   
    
    return MapsFactory;
};
GoogleMapsFactory.$inject = ['$http']
angular.module('SplitWise').factory("GoogleMapsFactory",GoogleMapsFactory)
 
 
 }());
