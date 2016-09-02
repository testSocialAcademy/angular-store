(function () {
    var app_af = angular.module('WhiskeyStore', []);

    app_af.controller("StoreController", ["$http" ,function ($http) {
        var whiskeys = this;
        whiskeys.products = [];

        $http.get('/pages/feschenko-oleksandr/product.json').success(function(data) {
            whiskeys.products = data;
        });
    }]);
    
    app_af.controller('TabController', function(){
        this.tab = 1;

        this.setTab = function(tab){
            this.tab = tab;
        };

        this.isSet = function(tab){
            return (this.tab === tab);
        };
    });

    app_af.controller('DisplayController',function(){
        this.displayed = false;

        this.toggle = function () {
            this.displayed = !this.displayed;
        };

        this.isDisplayed = function(displayed) {
            return (this.displayed === displayed);
        }
    });

    app_af.controller('ReviewController', function () {
        this.review = {};

        this.addReview = function(product){
            this.review.createdOn = Date.now();

            product.messages.push(this.review);
            this.review = {};
        };
    });

    
    
})();





