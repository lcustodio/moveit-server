'use strict';

/* Controllers */

angular.module('moveitApp.controllers', []).
  controller('AppCtrl', function ($scope, socket) {
    // nothing to do here 8)
  }).
  controller('MainCtrl', function ($scope, socket) {
    socket.on('send:moveOn', function (data) {
      if(data.moveOn){
      	$('body').removeClass("red");
      	$('body').addClass("green");
      } else {
      	$('body').removeClass("green");
      	$('body').addClass("red");
      }
      $scope.movingOnOff = data.moveOn;
    });
  })
