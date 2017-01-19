(function () {
    angular.module('store')

    .controller("StoreController_af", ["$http","$routeParams", function ($http, $routeParams) {
        var _this = this;
        _this.products = [];

        _this.showedCredit = false;

        $http.get('/pages/feschenko-oleksandr/product.json').success(function(data) {
            _this.products = data;
            _this.selectedProduct = data[$routeParams.id];
        });
        
        this.showCredit = function() {
            this.showedCredit = !this.showedCredit;
        }
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
    })
    
    .controller('CreditController_af',["$scope","credit_af",function ($scope,credit_af) {
        $scope.montlyPay = [];
        
        $scope.getMontlyPay = function (item) {
            $scope.montlyPay = credit_af.showCredit(item);
            return true;
        }
    }]);
    
    
})();





