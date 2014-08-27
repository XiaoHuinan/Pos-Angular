'use strict';

/**
 * @ngdoc function
 * @name posAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the posAngularApp
 */
angular.module('posAngularApp')
    .controller('MainCtrl', function ($scope, $location) {
        $scope.initialize = function () {
            $scope.cartCount = Order.getCount();
        };

        $scope.go_home = function () {
            $location.path('/');
        };

        $scope.go_to_list = function () {
            $location.path('/list');
        };

        $scope.go_to_cart = function () {
            $location.path('/cart');
        };

        $scope.initialize();
    });
