'use strict';

/**
 * @ngdoc function
 * @name posAngularApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the posAngularApp
 */
angular.module('posAngularApp')
    .controller('CartCtrl', function ($scope, $location) {
        $scope.initialize = function () {
            Order.getPromotion();
            $scope.cartCount = Order.getCount();
            $scope.boughtItems = _.chain(Order.all())
                .values()
                .filter(function (item) {
                    return item.count > 0;
                }).value();
            $scope.totalPrice = Order.totalPrice().toFixed(2) + '元';
            $scope.savePrice = Order.savePrice().toFixed(2) + '元';
        };

        $scope.addCount = function (barcode) {
            Order.all()[barcode].addCount();
            $scope.initialize();
        };

        $scope.minusCount = function (barcode) {
            Order.all()[barcode].minusCount();
            if($scope.cartCount == 1) {
                $scope.go_to_list();
            }
            $scope.initialize();
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

        $scope.go_to_payment = function () {
            $location.path('/payment');
        };

        $scope.initialize();

    });
