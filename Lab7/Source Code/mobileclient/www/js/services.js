angular.module('starter.services', [])
.service('LoginService', function($q, $http) {
    return {
  loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
             $http({
        method: 'GET',
        url: 'http://localhost:8080/lab8_ase/rest/login/'+name,
        contentType:"application/json"
        
    }).success(function(data){
      if (name == data.username && pw == data.password) {
          localStorage.setItem("firstname", data.firstname);
          localStorage.setItem("lastname", data.lastname);
          localStorage.setItem("username", data.username);
          localStorage.setItem("password", data.password);
          localStorage.setItem("id", data._id.$oid);
          
                deferred.resolve('Welcome ' + data.username + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
                 
    })
    promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
  }
            
        }})
.service('DeleteService', function($q, $http) {
    return {
        
         deleteUser:function(id) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
             
          $http({
              method: 'DELETE' ,   
        url: 'http://localhost:8080/lab8_ase/rest/delete/'+id,
		 
             }).success(function (data) { 
             })
                deferred.resolve('Welcome!');
        promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;

        }
        
    }
         })


  .service('UpdateService', function($q, $http) {
    return {
        
         updateUser:function(data) {
            var deferred = $q.defer();
            var promise = deferred.promise; 
          $http({
              method: 'POST' ,   
        url: 'http://localhost:8080/lab8_ase/rest/update/'+data.username,
		 data: JSON.stringify({ "$set" : { "firstname": data.firstname,
    "lastname": data.lastname,
    "username": data.username,
    "password": data.password } }),
		 
		  contentType: "application/json"
             }).success(function (data) { 
             }).error(function(data){
              alert(data);
            })
                deferred.resolve('Welcome !');
                 
    
    promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;

        }
        
    }
         })


.service('RegisterService', function($q, $http) {
    return {
        RegisterUser: function(fname, lname,username, password) {
            var deferred = $q.defer();
            var promise = deferred.promise;
          $http({
        method: 'POST',
        url: 'http://localhost:8080/lab8_ase/rest/signup',
        data: JSON.stringify({
       firstname: fname,
        lastname: lname,
        username: username,
        password: password,
    }),
        contentType:"application/json"
        
    }).success(function(data){
            
              deferred.resolve('Welcome!');
    })
           promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
           
        }
    }
})
;
