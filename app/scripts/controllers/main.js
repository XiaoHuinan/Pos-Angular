'use strict';

/**
 * @ngdoc function
 * @name posAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the posAngularApp
 */
angular.module('posAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
