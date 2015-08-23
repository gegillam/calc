'use strict';

angular.module('calcApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/index/index.html',
        controller: 'IndexCtrl'
      });
  });
