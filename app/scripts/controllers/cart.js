'use strict';

/**
 * @ngdoc function
 * @name posAngularApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the posAngularApp
 */
angular.module('posAngularApp')
  .controller('CartCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
