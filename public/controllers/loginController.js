app.controller('loginCtrl',function($rootScope,$scope,myFactory,$localStorage,$location,userService){
    //console.log("log in controller");
    $rootScope.loggedIn=false;
    console.log(userService.data);
    $scope.loginUser=function(user){
        // userService.data = 'jogi';
        
       // console.log(user);
       myFactory.url="http://localhost:3000/users/signin";
       myFactory.postData(user).then(function(response){
           console.log(response);
           $scope.msg=response.data;
           console.log($scope.msg);
           $localStorage.token=response.data.token;
           $localStorage.user=response.data.user;
           if($scope.msg.status == 200){
               $rootScope.loggedIn=true;
               $rootScope.user=response.data.user;
               console.log($rootScope.user);
            swal('Logged In Successfully');
            $location.path('/home');
            console.log('home controller has called.')
           }if($scope.msg.status == 201){
               $rootScope.loggedIn=false;
            swal('Invalid Details.');
            $location.path('/');
           }
       })
    }
    
})


