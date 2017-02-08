(function()
{
    var LoginController = function($scope,$location,TwitterFactory)
    {
       
        
       TwitterFactory.Init();
       $scope.ValidateUser  =  function()
        {
        if($scope.Email != null && $scope.Password!= null)
            {
               
                var Reg_Password = localStorage.getItem($scope.Email)
                if(Reg_Password==null)
                    {
                        alert("Username not found, Please register")
                    }
              else if(Reg_Password == $scope.Password)
                    {
                         $location.path('/Home')
                    }
                else
                    {
                        alert("Username/Password is not valid")
                    }
                
               
                
            }
        else
            {
               
                alert("Please enter the login credentials")
                
            }
    
        };

        
        $scope.go = function(strPath)
        {
            $location.path(strPath);
        };
        
		
		$scope.Connect = function()
		{
			TwitterFactory.ConnectTwitter().then(function() {
			if (TwitterFactory.isReady()) {
				$location.path('/Home')
            }
		    });
		}
                       
    }
    LoginController.$inject = ['$scope','$location','TwitterFactory'];
    angular.module('SplitWise').controller('LoginController',LoginController);
}());