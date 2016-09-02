(function () {
    angular.module('WhiskeyStore')
        .directive("productImages", function() {
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

        .directive("productDescription", function() {
            return {
                restrict: "E",
                templateUrl: "/pages/feschenko-oleksandr/templates/description.html"
            };
        })

        .directive("productMessages", function() {
            return {
                restrict: "E",
                templateUrl: "/pages/feschenko-oleksandr/templates/messages.html"
            };
        });
})();

