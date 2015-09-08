'use strict';

angular.module('listing', ['ngRoute', 'listingServices'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/listing', {
    templateUrl: 'listing/listing.html',
    controller: 'ListingCtrl'
  });
}])

.controller('ListingCtrl', ['$scope', 'GetListing', function($scope, GetListing) {

      $scope.movie_listing = GetListing.query();

}]);