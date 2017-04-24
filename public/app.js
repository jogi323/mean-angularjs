var app=angular.module('myApp',["ngRoute","ui.bootstrap","ngStorage"]);
app.config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
    });

   $routeProvider
        .when('/', {
            templateUrl: 'views/signin.html',
            controller: 'loginCtrl'
        })
        .when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'signupCtrl'
        })
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'homeCtrl',
            
        })
        .when('/employeeslist', {
            templateUrl: 'views/emps.html',
            controller: 'empsCtrl'
        })
        .when('/profile', {
            templateUrl: 'views/profile.html',
            controller: 'homeCtrl'
        })
        .when('/settings', {
            templateUrl: 'views/settings.html',
            controller: 'homeCtrl'
        })
        .otherwise('/',{
            templateUrl: 'views/signin.html',
            controller: 'loginCtrl'
        });
        
}).factory("States", function(){
  var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
  
  return states;
  
});
// app.controller('mainCtrl',function($rootScope,$scope,myFactory,$localStorage,$location){
//     //console.log("log in controller");
//      $rootScope.loggedIn  = false;
//     // console.log( $scope.loggedIn);
//     $scope.loginUser=function(user){
//        // console.log(user);
//        myFactory.url="http://localhost:3000/users/signin";
//        myFactory.postData(user).then(function(response){
//            //console.log(response);
//            $scope.msg=response.data;
//           // console.log($scope.msg);
//            $localStorage.token=response.data.token;
//            $localStorage.user=response.data.user;
//            if($scope.msg.status == 200){
//                $rootScope.loggedIn = true;
//                console.log( $scope.loggedIn);
//             swal('Logged In Successfully');
//             $location.path('/home');
//             //console.log('home controller has called.')
//            }if($scope.msg.status == 201){
//                $rootScope.loggedIn = false;
//             swal('Logged In Successfully');
//             $location.path('/');
//            }
//        })
//     }
    
// })




