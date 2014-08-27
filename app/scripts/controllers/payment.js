'use strict';

/**
 * @ngdoc function
 * @name posAngularApp.controller:PaymentCtrl
 * @description
 * # PaymentCtrl
 * Controller of the posAngularApp
 */
angular.module('posAngularApp')
    .controller('PaymentCtrl', function ($scope, $location) {
        $scope.initialize = function () {
            $scope.cartCount = Order.getCount();
            $scope.boughtItems = _.chain(Order.all())
                .values()
                .filter(function (item) {
                    return item.count > 0;
                }).value();
            $scope.presentItems = _($scope.boughtItems).filter(function (item) {
                return item.free() > 0;
            }).value();
            $scope.totalPrice = Order.totalPrice().toFixed(2) + '元';
            $scope.savePrice = Order.savePrice().toFixed(2) + '元';
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

        $scope.confirm = function () {
            Order.clear();
            $scope.go_to_list();
        };

        $scope.initialize();
    });
