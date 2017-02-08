(function(){

	var TwitterFactory = function($q)
	{
		
	var Obj_twitter = {}
	
	Obj_twitter.Init = function()
	{
		 OAuth.initialize('Ut4UZVMSUPi1kRK3Oa0JnBSL5-c', {cache:true});
         authorizationResult = OAuth.create('twitter');
    }
	
	Obj_twitter.isReady = function()
	{
		return authorizationResult;
	}
	
	Obj_twitter.ConnectTwitter = function()
	{
		 var deferred = $q.defer();
		OAuth.popup('twitter', {cache:true}, function(error, result) {
                if (!error) {
                    authorizationResult = result;
                    deferred.resolve();
                } else {
                   
                }
            });
            return deferred.promise;
	}
	
	Obj_twitter.getTweets = function(Celebs)
	{
		    var deferred = $q.defer();
            var promise = authorizationResult.get('/1.1/search/tweets.json?q='+Celebs + '&result_type=mixed&count=20').done(function(data) { 
                deferred.resolve(data)
            });
           
            return deferred.promise;
	}
	
	
	Obj_twitter.ClearUser = function()
	{
		 OAuth.clearCache('twitter');
         authorizationResult = false;
	}
	
	

	return Obj_twitter
	}
	
	TwitterFactory.$inject = ['$q']
	angular.module("SplitWise").factory("TwitterFactory",TwitterFactory)
}());
