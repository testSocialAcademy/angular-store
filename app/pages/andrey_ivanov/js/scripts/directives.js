(function () {
    angular.module('store')
        .directive("laptops",function() {
            return {
                restrict: "E",
                templateUrl: "/pages/andrey_ivanov/templates/articles.html",
                controller: "LeptopsController",
                controllerAs: "laptopsCtrl"
            }
        })

        .directive("laptops",function() {
            return {
                restrict: "E",
                templateUrl: "/pages/andrey_ivanov/templates/article.html",
                controller: "LeptopsController",
                controllerAs: "laptopsCtrl"
            }
        })

        .directive("laptopsImages", function() {
            return {
                restrict: "E",
                templateUrl: "/pages/andrey_ivanov/templates/images.html"
            };
        })

        .directive("laptopsDescription", function() {
            return {
                restrict: "E",
                templateUrl: "/pages/andrey_ivanov/templates/description.html"
            };
        })

        .directive("laptopsMessages", function() {
            return {
                restrict: "E",
                templateUrl: "/pages/andrey_ivanov/templates/messages.html",
                controller: "ReviewController_ai",
                controllerAs: "reviewCtrl_ai"
            };
        });
})();
