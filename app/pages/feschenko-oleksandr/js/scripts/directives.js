(function () {
    angular.module('store')
        
        .directive("productsAf",function() {
            return {
                restrict: "E",
                templateUrl: "/pages/feschenko-oleksandr/templates/articles.html",
                controller: "StoreController_af",
                controllerAs: "storeCtrl"
            }
        })

        .directive("productAf",function() {
            return {
                restrict: "E",
                templateUrl: "/pages/feschenko-oleksandr/templates/article.html",
                controller: "StoreController_af",
                controllerAs: "storeCtrl"
            }
        })

        .directive("productImagesAf", function() {
            return {
                restrict: "E",
                templateUrl: "/pages/feschenko-oleksandr/templates/images.html",
                controller: function() {
                    this.current = 0;

                    this.setCurrent = function(newGallery){
                        this.current = newGallery || 0;
                    };

                    this.isCurrent = function (index){
                        return (this.current === index);
                    };
                },
                controllerAs: "imagesCtrl"
            };
        })
        
        .directive("productDescriptionAf", function() {
            return {
                restrict: "E",
                templateUrl: "/pages/feschenko-oleksandr/templates/description.html"
            };
        })

        .directive("productMessagesAf", function() {
            return {
                restrict: "E",
                templateUrl: "/pages/feschenko-oleksandr/templates/messages.html"
            };
        });
})();

