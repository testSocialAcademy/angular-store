'use strict';
(function(){
    angular.module('store')

        .controller('MobilesController', ["$http", "$routeParams",  function($http, $routeParams) {
            var _this = this;
            this.mobiles = [];
            this.selectedMobile = {};

            $http.get("../pages/michail_suprunov/mobiles.json").
                success(function(data){
                    _this.mobiles = data;
                    _this.selectedMobile = data[$routeParams.id] ;
            })
        }])

        .controller('PanelController_mu', function(){
            this.tab = 1;

            this.selectTab = function(setTab) {
                this.tab = setTab;
            };

            this.isSelected = function(checkTab) {
                return this.tab === checkTab;
            };
        })

        .controller('ReviewController_mu', function(){
            this.review = {};
            this.addReview = function(product) {
                product.reviews.push(this.review);
                this.review = {};
            };
        });

})();