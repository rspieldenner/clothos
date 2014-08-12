'use strict';

/**
 * @ngdoc function
 * @name clothosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clothosApp
 */
angular.module('clothosApp')
  .controller('MainCtrl', function ($scope) {
    console.log('here');
    $scope.links = [
      { group: 'com.netflix.nebula', name: 'astrid' },
      { group: 'com.netflix', name: 'platform' }
    ];
  });
