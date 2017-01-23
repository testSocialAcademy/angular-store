angular.module('store')

    .controller("DefaultController", ['$http', '$log', function($http, $log) {

        let product = this;

        $http.get('pages/baitasova-anastasiia/product.json').success(function(data) {
            product.sneakers = data;
        })
    }])

    .controller('PanelController', ['$http', '$log', function($http, $log)  {
        let product = this;
        this.tab = 1;



        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };

        $http.get('pages/baitasova-anastasiia/product.json').success(function(data) {
            product.sneakers = data;
            data.show = $(".reviews__review1").each(function () {
                $(".reviews").text(data.author + " \n" + data.message);
            });
        })
    }])


    .controller('ReviewController', ['$http', '$log', function($http, $log)  {
        let product = this;
        this.sneakers = sneakers.messages;
        this.review = {author: "", message: ""};

        this.addReview = function () {
            this.sneakers.unshift(this.review);
            this.review = {author: "", message: ""};
        };

        $http.get('pages/baitasova-anastasiia/product.json').success(function(data) {
            product.sneakers = data;
        })
    }])

    .controller('ImageController', ['$http', '$log', function($http, $log) {
    let product = this;

        product.sneakers = [];

    $http.get('pages/baitasova-anastasiia/product.json').success(function(data) {
        product.sneakers = data;
    })
}]);
