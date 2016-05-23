(function () {
    'use strict';

    angular.module('cgApp')
    .controller('joinController', JoinController);

    JoinController.$inject = ['$scope', '$http', '$location', '$rootScope', '$localStorage', 'dataService'];
    function JoinController($scope, $http, $location, $rootScope, $localStorage, dataService) {
      
      if(typeof $localStorage.token != 'undefined' ){
        dataService.setData($localStorage.token);
        $location.path('/dashboard');
        return;
      }

      $scope.login = function() {

        let params = {
          username: $scope.username,
          password: $scope.password
        }

        $http.post('http://cardgame-gcaraciolo.rhcloud.com/api/login', params)
        .success(function(data, status) {
          // console.log(data)
          // console.log(status)
          $localStorage.token = data.msg
          dataService.setData(data.msg);
          $location.path('/dashboard');
        })
        .catch(function(err) {
          console.log(err)
        })

        // $http.post('http://cardgame-gcaraciolo.rhcloud.com/api/join', params)
        // .success(function(data, status) {
        //   // console.log(data)
        //   // console.log(status)
        //   $rootScope.username = $scope.username
        //   $location.path('/dashboard');
        // })
        // .catch(function(err) {
        //   console.log(err)
        // })
      };
    }

})();
