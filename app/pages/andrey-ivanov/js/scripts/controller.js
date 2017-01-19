'use strict';
(function () {
    angular.module('store')

        .controller("LaptopController", ["$http", "$routeParams", function ($http, $routeParams) {
            var _this = this;
            _this.products = [];

            $http.get('/pages/andrey-ivanov/laptop.json').success(function (data) {
                _this.products = data;
                _this.selectedProduct = data[$routeParams.id];
            });

            this.showCreditWindow = function () {
                this.modalCredit = !this.modalCredit;

            }
        }])

        .controller('LaptopTabController', function () {
            this.tab = 1;

            this.setTab = function (tab) {
                this.tab = tab;
            };

            this.isSet = function (tab) {
                return (this.tab === tab);
            };
        })

        .controller('LaptopReviewController', function () {
            this.review = {};

            this.addReview = function (product) {
                product.messages.push(this.review);
                this.review = {};
            };
        })

        .controller('LaptopCreditController', ["$scope", "creditService_ai", function ($scope, creditService_ai) {
           $scope.monthlyPayment = [];

           $scope.getMonthlyPayment = function (price) {
             $scope.monthlyPayment = creditService_ai.showCredit(price);
           };
        }]);


})();