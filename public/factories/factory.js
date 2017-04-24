app.factory('myFactory',function($http,$q){
    
    var object={};
    object.getData=function(){
        var deffered=$q.defer();
        //console.log('in factory');
       $http({
           url:object.url,
           method:'GET'
       }).then(function(response){
           deffered.resolve(response);
           //console.log(response.data);
           //console.log('resolved in factory');
       },function(err){
           deffered.reject(err);
           //console.log('rejected in factory');
       })
       return deffered.promise;
    }
    object.postData=function(data){
        var deffered=$q.defer();
       $http({
           url:object.url,
           method:'POST',
           data:data
       }).then(function(response){
           deffered.resolve(response);
       },function(err){
           deffered.reject(err);
       })
       return deffered.promise;
    }
    return object;
})

// app.factory('loginFactory',function($http,$q,$window){
//     var object={};
//     var user;
//     object.postData=function(data){
//         var deffered=$q.defer();
//         console.log("login facr");
//        $http({
//            url:object.url,
//            method:'POST',
//            data:data
//        }).then(function(response){ 
//             user = response.data.token;
//             console.log(response)
//            $window.sessionStorage['user'] = user;
//            deffered.resolve(response);
//        },function(err){
//            deffered.reject(err);
//        })
//        return deffered.promise;
//     }
//     object.getUserToken = function(){
//         return user;
//         //console.log(user);
//     }
//     function initialization(){
//         if($window.sessionStorage['user']){
//             user = $window.sessionStorage['user'];
//             console.log(user);
//         }
//     }
//     initialization();
//     return object;
// })
// app.factory('logoutFactory',function($http,$q,$window,$localStorage){
//     var object={};
//     var user;
//     object.postData=function(){
//         var deffered=$q.defer();
//         console.log("login facr");
//        $http({
//            url:object.url,
//            method:'POST',
//            headers: {
//             "token": user
//             }
//        }).then(function(response){
//            $window.sessionStorage['user'] = null;
//            user=null;
//            console.log($window.sessionStorage['user']);
//            $window.localStorage.clear();
//            deffered.resolve(response);
//        },function(err){
//            deffered.reject(err);
//        })
//        return deffered.promise;
//     }
//     return object;
// })

