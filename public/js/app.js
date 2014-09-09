'use strict';

// Declare app level module which depends on filters, and services

angular.module('moveitApp', [
  'ngRoute',

  'moveitApp.controllers',
  'moveitApp.filters',
  'moveitApp.services',
  'moveitApp.directives',

  // 3rd party dependencies
  'btford.socket-io'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/main', {
      templateUrl: 'partials/main',
      controller: 'MainCtrl'
    }).
    otherwise({
      redirectTo: '/main'
    });

  $locationProvider.html5Mode(true);
});
