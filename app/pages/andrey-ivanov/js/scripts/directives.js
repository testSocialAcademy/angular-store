(function () {
    angular.module('store')

        .directive("laptops",function() {
            return {
                restrict: "E",
                templateUrl: "/pages/andrey-ivanov/templates/articles.html",
                controller: "LaptopController",
                controllerAs: "laptopCtrl"
            }
        })

        .directive("laptop",function() {
            return {
                restrict: "E",
                templateUrl: "/pages/andrey-ivanov/templates/article.html",
                controller: "LaptopController",
                controllerAs: "laptopCtrl"
            }
        })

        .directive("laptopImages", function() {
            return {
                restrict: "E",
                templateUrl: "/pages/andrey-ivanov/templates/images.html",
                controller: function() {
                    this.current = 0;

                    this.setCurrent = function(newGallery){
                        this.current = newGallery || 0;
                    };

                    this.isCurrent = function (index){
                        return (this.current === index);
                    };
                },
                controllerAs: "laptopImagesCtrl"
            };
        })

        .directive("laptopDescription", function() {
            return {
                restrict: "E",
                templateUrl: "/pages/andrey-ivanov/templates/description.html"
            };
        })

        .directive("laptopMessages", function() {
            return {
                restrict: "E",
                templateUrl: "/pages/andrey-ivanov/templates/messages.html"
            };
        });

})();
