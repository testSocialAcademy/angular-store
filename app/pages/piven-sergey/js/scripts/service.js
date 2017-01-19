angular.module('store')
    .service('Credit', function () {
        this.calculateCreditForTwoMonths = function (currPrice) {
            return Math.floor((currPrice / 2) + (currPrice * 0.04));
        };
        this.calculateCreditForSixMonths = function (currPrice) {
            return Math.floor((currPrice / 6) + (currPrice * 0.05) + 1);
        };
        this.calculateCreditForTwelveMonths = function (currPrice) {
            return Math.floor((currPrice / 2) + (currPrice * 0.1) + 2);
        };
    });