(function () {
    angular.module('store')
        .controller("StoreController_sp", ['$http', '$scope', '$routeParams', 'Credit', function ($http, $scope, $routeParams, Credit) {
            var _this = this;
            var currPrice = 0;
            $scope.id = $routeParams.id;
            $http({method: 'GET', url: '/pages/piven-sergey/product.json'})
                .success(function (data) {
                    _this.products = data;
                    currPrice = data[$scope.id].price;

                    $scope.resultTwoMonths = 0;
                    $scope.resultSixMonths = 0;
                    $scope.resultTwelveMonths = 0;
                    $scope.resultTwoMonths = Credit.calculateCreditForTwoMonths(currPrice);
                    $scope.resultSixMonths = Credit.calculateCreditForSixMonths(currPrice);
                    $scope.resultTwelveMonths = Credit.calculateCreditForTwelveMonths(currPrice);
                });

            $('.creditButton').on('click', function () {
                $('.creditsForItems').slideDown(500);
                $('.buyButton').hide(500);
                $(this).hide(500)
            });

            $('.closeCreditButton').on('click', function () {
                $('.creditsForItems').slideUp(500);
                $('.buyButton').show(500);
                $('.creditButton').show(500);
            })
        }])
        .controller("AdditionalPanelController", function () {
            this.tab = 1;
            this.selectTab = function (setTab) {
                this.tab = setTab;
            };
            this.isSelected = function (checkTab) {
                return this.tab === checkTab;
            }
        })
        .controller("ReviewController", function () {
            this.review = {};
            this.addReview = function (products) {
                products.messages.push(this.review);
                this.review = {};
            };
        })
        .controller("current", function ($scope) {
            this.counter = $scope.id;
        });
})();
