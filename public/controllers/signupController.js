app.controller('signupCtrl', function($scope, myFactory,$location){
    //console.log("signup controller");
    $scope.setFile = function(element) {
        console.log(element.files.length);
        for(var i=0; i<element.files.length; i++){
        $scope.currentFile = element.files[i];
        var reader = new FileReader();
        reader.onload = function(event) {
            $scope.user.image = event.target.result; 
            //console.log($scope.user.image);
            // $scope.images.push(angular.copy(event.target.result));
            // console.log($scope.images);
            $scope.$apply()

        }
        //console.log($scope.images);
        // when the file is read it triggers the onload event above.
        reader.readAsDataURL(element.files[i]);
        }
    }
    $scope.registeruser = function(user){
        myFactory.url = 'http://localhost:3000/users/signup';
        myFactory.postData(user).then(function(success){
            console.log(success.data.status);
            if(success.data.status == 200){
                swal('Registered Successfully');
                $location.path('/');
            }if(success.data.status == 201){
                swal('User already Registered');
                $location.path('/');
            }
        },
            function(error){
                console.log(error);
            }
        )
    }
})