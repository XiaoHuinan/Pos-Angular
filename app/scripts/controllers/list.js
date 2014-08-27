'use strict';

/**
 * @ngdoc function
 * @name posAngularApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the posAngularApp
 */
angular.module('posAngularApp')
  .controller('ListCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
