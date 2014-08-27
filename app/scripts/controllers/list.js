'use strict';

/**
 * @ngdoc function
 * @name posAngularApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the posAngularApp
 */
angular.module('posAngularApp')
    .controller('ListCtrl', function ($scope, $location) {
        $scope.initialize = function () {
            $scope.items = loadAllItems();
            $scope.cartCount = Order.getCount();
        };

        $scope.buyItem = function (barcode) {
            Order.addItem(barcode);
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
