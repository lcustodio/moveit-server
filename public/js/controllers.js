'use strict';

/* Controllers */

angular.module('moveitApp.controllers', []).
  controller('AppCtrl', function ($scope, socket) {
    // nothing to do here 8)
  }).
  controller('MainCtrl', function ($scope, socket) {
    socket.on('send:moveOn', function (data) {
      alert("teste");
      $scope.movingOnOff = data.moveOn;
    });
  })
