(function () {
    'use strict';

    angular.module('cgApp')
    .controller('logoutController', LogoutController);

    LogoutController.$inject = ['$scope', '$http', '$location', '$rootScope', '$localStorage', 'dataService'];
    function LogoutController($scope, $http, $location, $rootScope, $localStorage, dataService) {
      
      $localStorage.$reset();
      $location.path('/join');

    }

})();
