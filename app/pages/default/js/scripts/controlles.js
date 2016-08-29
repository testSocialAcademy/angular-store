(function () {
    angular.module('store')
        .controller("DefaultController", function () {
            this.message = {
                first: "Список товаров",
                second: "Пока будет пусто"
            }
        });
})();