app.controller('empsCtrl',function($scope,myFactory,$rootScope,$location, $window, $modal,userService){
    $rootScope.loggedIn=true;
    console.log('employees controller.');
    myFactory.url="http://localhost:3000/users/user";
    myFactory.getData().then(function(res){
        var emp=res.data.data;
        $scope.employees=emp.sort(function (a, b) {
            var nameA = a.firstName.toUpperCase(); // ignore upper and lowercase
            var nameB = b.firstName.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            // names must be equal
            return 0;
         });
        //console.log($scope.employees);
    },function(err){
        console.log(err);
    })

    $scope.open = function (emp) {
        //console.log(emp);
        $rootScope.data=emp;
        // console.log(myFactory.data);
       // console.log($rootScope.data);
        var modalInstance = $modal.open({
            templateUrl: 'views/preview.html',
            controller : 'PopupCont',
            backdrop  : 'static',
            keyboard  : false
        });

    }
    $scope.delete=function(emp){
        //console.log(emp);
        $rootScope.delete=emp;
        var modalInstance = $modal.open({
            templateUrl: 'views/confirm.html',
            controller : 'PopupCont',
            backdrop  : 'static',
            keyboard  : false,
      
        });
    }
    
});
app.controller('PopupCont', function ($scope,$rootScope, $modalInstance,myFactory,$window) {
    $scope.emp=$rootScope.data;
      $scope.isTrue=function(){
            $scope.emp=$rootScope.delete;
            var id=$scope.emp._id;
            //console.log(id);
            myFactory.url="http://localhost:3000/users/deleteuser/"+id;
            myFactory.postData().then(function(res){
                //console.log(res);
                if(res.data.status ===200){
                    $window.location.reload();
                }
            })
        } 
        $scope.close = function () {
        $modalInstance.dismiss('cancel');
    };
});
