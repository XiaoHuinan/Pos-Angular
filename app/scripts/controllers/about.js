'use strict';

/**
 * @ngdoc function
 * @name posAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the posAngularApp
 */
angular.module('posAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
