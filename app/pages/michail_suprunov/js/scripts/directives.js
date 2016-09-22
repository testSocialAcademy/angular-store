(function () {
    angular.module('store')
        .directive("mobiles",function() {
            return {
                restrict: "E",
                templateUrl: "/pages/michail_suprunov/templates/articles.html",
                controller: "MobilesController",
                controllerAs: "mobilesCtrl"
            }
        })

        .directive("mobile",function() {
            return {
                restrict: "E",
                templateUrl: "/pages/michail_suprunov/templates/article.html",
                controller: "MobilesController",
                controllerAs: "mobilesCtrl"
            }
        })

        .directive("mobileImages", function() {
            return {
                restrict: "E",
                templateUrl: "/pages/michail_suprunov/templates/images.html"
            };
        })

        .directive("mobileDescription", function() {
            return {
                restrict: "E",
                templateUrl: "/pages/michail_suprunov/templates/description.html"
            };
        })

        .directive("mobileMessages", function() {
            return {
                restrict: "E",
                templateUrl: "/pages/michail_suprunov/templates/messages.html",
                controller: "ReviewController_mu",
                controllerAs: "reviewCtrl"
            };
        })

        .directive("creditMu", function() {
            return {
                restrict: "E",
                templateUrl: "/pages/michail_suprunov/templates/credit.html",
                scope: {
                    price: "=",
                    show: "="
                },
                controller: "CreditController_mu",
                controllerAs: "creditCtrl"
            };
        });
})();