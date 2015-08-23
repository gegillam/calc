'use strict';

angular.module('calcApp')
  .controller('MainCtrl', function ($scope, $http, socket, Auth) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });
    $scope.myMessages = [];

    $http.get('/api/messages').success(function(myMessages) {
      $scope.myMessages = myMessages;
      socket.syncUpdates('message', $scope.myMessages);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      console.log($scope);
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.addMessage = function() {
      if($scope.newMessage === '') {
        return;
      }
console.log(Auth.getCurrentUser());
      $http.post('/api/messages', { user: Auth.getCurrentUser(), title: $scope.newMessage, body: $scope.newBody });
      $scope.newMessage = '';
      $scope.newBody = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.deleteMessage = function(message) {
      $http.delete('/api/messages/' + message._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

  });
