
'use strict';
(function(){
    angular.module('store')

        .controller('LaptopsController', ["$http", "$routeParams",  function($http, $routeParams) {
            var _this = this;
            this.laptops = [];
            this.selectedLeptop = {};

            $http.get("../pages/andrey_ivanov/laptop.json").
            success(function(data){
                _this.laptops = data;
                _this.selectedLeptop= data[$routeParams.id] ;
            })
        }])

        .controller('PanelController_ai', function(){
            this.tab = 1;

            this.selectTab = function(setTab) {
                this.tab = setTab;
            };

            this.isSelected = function(checkTab) {
                return this.tab === checkTab;
            };
        })

        .controller('ReviewController_ai', function(){
            this.review = {};
            this.addReview = function(product) {
                product.reviews.push(this.review);
                this.review = {};
            };
        });

})();