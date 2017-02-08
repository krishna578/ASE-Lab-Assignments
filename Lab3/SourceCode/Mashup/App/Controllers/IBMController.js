(function(){

    var IBMController = function($scope,IBMFactory,TwitterFactory,$location)
    {
		
		$scope.IsLogged = TwitterFactory.isReady();
        $scope.classifyImage = function()
        {
			var Iden_Celebs = [];
			IBMFactory.DetectImage($scope.Image_URI).success(function(Result)
            {
				var count = 0;
				$scope.Celebs = Result;
				
				 angular.forEach($scope.Celebs.images[0].faces,function(item){
					
					if(item.identity!=null)
						{
							var Celeb_name = item.identity.name
					if(Celeb_name!=null)
						{
							Iden_Celebs.push(Celeb_name)
						}
							
						}
					
					
				})
			 if(Iden_Celebs.length!=0)
				 {
					 $scope.Str_Celb  = Iden_Celebs.join(' OR ')
				
				 }
				
				if( $scope.Str_Celb!=null)
					{
						TwitterFactory.getTweets($scope.Str_Celb).then(function(Result){
							$scope.tweets = Result.statuses;
						})
					}
				
            })
			
			
			
			
			
        }
		
		
		
		$scope.signOut = function()
		{
		TwitterFactory.ClearUser();		
			$location.path('/')
		}
	
		
		
	
	}
    IBMController.$inject=['$scope','IBMFactory','TwitterFactory','$location']
    angular.module("SplitWise").controller("IBMController",IBMController)
    
}());