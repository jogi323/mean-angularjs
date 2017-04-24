app.controller('homeCtrl',function($rootScope,$scope,myFactory,$location, $window,$localStorage,States,userService){
    $rootScope.loggedIn=true;
    myFactory.url="http://localhost:3000/users/user";
    myFactory.getData().then(function(res){
        console.log(res);
    },function(err){
        console.log(err);
    });
    $scope.selected = undefined;
	
	$scope.users = $rootScope.allusers;

    $scope.logOut=function(){
        //console.log("hai");
        myFactory.url="http://localhost:3000/users/logOut";
        myFactory.postData().then(function(res){
        //console.log(res);
        $localStorage.user = null;
        $localStorage.token = null;
        $location.path('/');
        })
    }
$scope.profile=function(){
    $location.path('/profile');
}
$scope.settings=function(){
    $location.path('/settings');
}
});