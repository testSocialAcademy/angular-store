(function () {
    angular.module('store')

    .controller("StoreController_af", ["$http","$routeParams", function ($http, $routeParams) {
        var _this = this;
        _this.products = [];

        $http.get('/pages/feschenko-oleksandr/product.json').success(function(data) {
            _this.products = data;
            _this.selectedProduct = data[$routeParams.id];
        });
    }])
        
    .controller('TabController_af', function(){
        this.tab = 1;

        this.setTab = function(tab){
            this.tab = tab;
        };

        this.isSet = function(tab){
            return (this.tab === tab);
        };
    })

    .controller('ReviewController_af', function () {
        this.review = {};

        this.addReview = function(product){
            this.review.createdOn = Date.now();

            product.messages.push(this.review);
            this.review = {};
        };
    });

    
    
})();





