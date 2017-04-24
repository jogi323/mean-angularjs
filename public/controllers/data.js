app.factory('userService', ['$rootScope', function ($rootScope) {
    var service = {};
    service.data ='fayaz';
    console.log(service.data);
    return service;
}]);