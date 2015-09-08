'use strict';

// Declare app level module which depends on views, and components
angular.module('vedioCatalog', [
  'ngRoute',
  'listing',
  'fileUpload',
  'myApp.view2',
  'myApp.version',
  'ngResource'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/listing'});
}]);
