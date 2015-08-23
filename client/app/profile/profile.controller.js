'use strict';

angular.module('calcApp')
  .controller('ProfileCtrl', function ($scope, Auth) {
    console.log(Auth.getCurrentUser());
    $scope.message = 'Hello, ' + (Auth.getCurrentUser().name ? Auth.getCurrentUser().name : '');
  });
