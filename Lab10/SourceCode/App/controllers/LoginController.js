(function(){
	
	var LoginController = function($scope,$location,AngularFactory,UserFactory)
	{
		
		$scope.Login =function()
		{
			var EmailId = $scope.EmailId;
			var Password = $scope.Password;
			AngularFactory.GetUser(EmailId).success(function(data, status, headers, config){
				var MlabPass = data[0].Password;
				if(Password == MlabPass)
					{
						$scope.FirstName = data[0].FirstName;
						UserFactory.setFirstName(data[0].FirstName);
						UserFactory.setLastName(data[0].LastName);
						UserFactory.setEmail(data[0].EmailId);
						UserFactory.setPassword(data[0].Password);
						$location.path('\Home')
					}
				else
					{
						alert("Password Entered is Wrong ..!");
					}
			})
		}
		
		 $scope.go = function(strPath)
        {
            $location.path(strPath);
        };
	}
	LoginController.$inject = ['$scope','$location','AngularFactory','UserFactory']
	angular.module('Mlab').controller('LoginController',LoginController);
	
}());