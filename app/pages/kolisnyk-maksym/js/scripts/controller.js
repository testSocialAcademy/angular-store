var app = angular.module('store', []);

app.controller("DefaultController", function () {
    this.message = {
        first: "Список товаров",
        second: "Пока будет пусто"
    }
});