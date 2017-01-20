angular.module('store')

    .controller("DefaultController", function () {

        this.product = sneakers;
    })

    .controller('PanelController', function () {
        this.tab = 1;

        this.show = $(".reviews__review1").each(function () {
            $(".reviews").text(product.author + " \n" + product.message);
        });

        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };

        this.selectTab = function (setTab) {
            this.tab = setTab;
        }
    })


    .controller('ReviewController', function () {
        this.sneakers = sneakers.messages;
        this.review = {author: "", message: ""};

        this.addReview = function () {
            this.sneakers.unshift(this.review);
            this.review = {author: "", message: ""};
        }
    })

    .controller('ImageController', ['$http', '$log', function($http, $log) {
    let img = this;

    img.sneakers = [];

    $http.get('pages/baitasova-anastasiia/product.json').success(function(data) {
        img.sneakers = data;
        console.log(img.sneakers);
    })
}]);
