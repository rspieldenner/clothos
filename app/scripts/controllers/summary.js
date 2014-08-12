'use strict';

/**
 * @ngdoc function
 * @name clothosApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clothosApp
 */
angular.module('clothosApp')
  .controller('SummaryCtrl', function ($scope) {
    $scope.group = 'com.netflix.nebula';
    $scope.name = 'astrid';
  });
