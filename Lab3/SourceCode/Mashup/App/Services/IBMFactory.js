(function(){
    
    var IBMFactory = function($http)
    {
        var Obj_IBM ={};
        Obj_IBM.DetectImage = function(Image_URI)
        {
            var API_Key = "d2ebeef150580c99db8d7d18b302399cad512344";
            var API_URI = "https://gateway-a.watsonplatform.net/visual-recognition/api/v3/detect_faces?api_key=" + API_Key + "&url=" + Image_URI + "&version=2016-05-20"
            return $http.get(API_URI)

        }
        return Obj_IBM;
    };
    IBMFactory.$inject =['$http']
    angular.module("SplitWise").factory("IBMFactory",IBMFactory)

    }()) ;