(function() {
let myApp = angular.module('storess', []);

myApp.controller("DefaultController", function () {

    this.product = sneakers;
});

let sneakers = {
    name: 'Nike Revolution EU',
    description: 'Nike Revolution EU - это перевыпуск легендарной модели кроссовок от Nike. Несмотря на свой простой вид, модель выполнена из высококачественных материалов. Верх выполнен из синтетики со вставками их натуральной кожи, подошва выполнена из износоустойчивой резины.Очень прочная модель, которая станет отличным дополнением к Вашему спортивному гардеробу.',
    price: 2199 + ' грн.',
    price2: 1899 + ' грн.',
    size: [36, 37, 38, 39],
    images: [
        '/images/sneakers/nike-revolution-eu1.jpg',
        '/images/sneakers/nike-revolution-eu2.jpg'
    ],
    messages: [
        {
            author: 'Анна',
            message: 'Великолепные кроссовки! Очень рада приобретению.'
        },
        {
            author: 'Мария',
            message: 'Качество отменное, цена хоть и велика, но за такие кроссы не жалко! Спасибо.'
        }
    ],
    canPurchase: true,
    soldOut: false
};

myApp.controller('PanelController', function() {
    this.tab = 1;

    /*this.show = $(".reviews__review1").each(function(){
        $(".reviews").text(product.author + " \n" + product.message);
    });*/


    this.isSelected = function(checkTab) {
        return this.tab === checkTab;
    };

    this.selectTab = function(setTab) {
        this.tab = setTab;
    }
});


    myApp.controller('ReviewController', function() {
        this.sneakers = sneakers.messages;
        this.review = {author: "", message: ""};

        this.addReview = function() {
            this.sneakers.unshift(this.review);
            this.review = {author: "", message: ""};
        }
    });

}) ();
