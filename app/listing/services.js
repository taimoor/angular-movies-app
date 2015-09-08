'use strict';

var listingServices = angular.module('listingServices', ['ngResource']);


listingServices.service('GetListing',['$resource', function($resource){
            return $resource('http://jsonplaceholder.typicode.com/posts/', {}, {
                query: {method:'GET', isArray:true}
            });
}]);