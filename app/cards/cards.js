(function (angular) {
  "use strict";

  var app = angular.module('myApp.cards', ['ngRoute', 'firebase.utils', 'firebase']);

  app.controller('CardCtrl', ['$scope', 'cardList', function($scope, cardList) {
      $scope.cards = cardList;
      $scope.addCard = function(newCard) {
        if( newCard ) {
          $scope.cards.$add({text: newCard});
        }
      };
    }]);

  app.factory('cardList', ['fbutil', '$firebaseArray', function(fbutil, $firebaseArray) {
    var ref = fbutil.ref('cards').limitToLast(10);
    return $firebaseArray(ref);
  }]);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/cards', {
      templateUrl: 'cards/cards.html',
      controller: 'CardCtrl'
    });
  }]);

})(angular);