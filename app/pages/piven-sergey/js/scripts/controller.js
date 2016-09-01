(function () {
    var test = [];
    var id = 0;
    angular.module('store')
        .controller("StoreController_sp", function ($http) {
            var controller = this;
            this.selectId = function (setId) {
                id = setId;
                console.log(setId);
            };
            $http({method: 'GET', url: '/pages/piven-sergey/product.json'})
                .success(function (data) {
                    controller.products = data;
                    test = data;
                    console.log(controller.products);
                });
        })
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
        .controller("current", function () {
            this.counter = id;
        });
})();
