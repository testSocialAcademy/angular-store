'use strict';

(function () {
    angular.module('store')
        .controller("GuitarStore", function ($http) {
            var controller = this;
            $http.get('/pages/serhii-kravchenko/product.json')
                .success(function (data) {
                    controller.productsSkr = data;
                })
        })
        .controller('ArticleControllerSkr', function ($http, $routeParams) {
            var controller = this;
            $http({method: 'GET', url: '/pages/serhii-kravchenko/product.json'})
                .success(function (data) {
                    controller.product = data[$routeParams.id];
                });
        })
        .controller('GalleryControllerSkr', function () {
            this.current = 0;

            this.setCurrent = function (index) {
                this.current = index;
            };
        })
        .controller('ReviewControllerSkr', function () {
            this.message = {};

            this.addReview = function (product) {
                product.messages.push(this.message);
                this.message = {};
            };
        })
        .controller('CreditControllerSkr', ["$scope", "creditSkr", function ($scope, creditSkr) {
            $scope.calculation = [];

            $scope.getCalculation = function (item) {
                $scope.calculation = creditSkr.showCreditSkr(item);
                return true;
            }
        }]);

    // var products = [{
    //     name: 'Электрогитара Gibson ES-335 Studio EB BT',
    //     description: 'Gibson ES-335 Studio — это полуакустическая электрогитара. Она достаточно легендарна и по общему мнению всех гитарных экспертов, является одной из эпохальных революционных моделей, оказавших громадное влияние на всю гитарную индустрию. Гитара хорошо узнаваема по тонкому корпусу и двум вырезам – характерный силуэт гитар Gibson, однако, без эфов, что придает инструменту лоснящийся вид и успешно противостоит чрезмерному фидбэку. Из электроники остался один хамбакер – Dirty Fingers Plus у бриджа, одна ручка громкости и одна ручка тона. Гриф изготовлен из цельного красного дерева с радиальным распилом и плоской накладкой из обожженного клена с нехитрой инкрустацией в виде перламутровых точек. ES-335 Studio оснащена хамбакером Dirty Fingers Plus – одним из самых громких и острых звукоснимателей Gibson. Неистовый кранч, ревущие лидовые партии и певучий сустейн, – этот звукосниматель был рожден для рока, однако, на более мягких партиях звучит удивительно четко и разборчиво. В комплекте с гитарой идёт надёжный и удобный чехол. Гарантия распространяется на электронные компоненты.',
    //     price: 45772,
    //     price2: null,
    //     images: [
    //         "/images/guitars/gibson_es335_1.jpg",
    //         "/images/guitars/gibson_es335_2.jpg",
    //         "/images/guitars/gibson_es335_3.jpg"
    //     ],
    //     messages: [
    //         {
    //             author: "Horochiy_strelok",
    //             message: "Что идёт в комплекте к этой гитаре?"
    //         },
    //         {
    //             author: "Ivan",
    //             message: "Гитара + ключи для отстройки. Шнура нет"
    //         }
    //
    //     ],
    //     soldOut: false
    // }, {
    //     name: 'Электрогитара Jackson JS11 Dinky',
    //     description: 'Шестиструнная электрогитара Jackson JS11 Dinky — прекрасное сочетание качества и внешнего вида, которые подходят для скоростной игры. Корпус, изготовленный из липы, придает жирный, хорошо сбалансированный тон, который придает инструменту теплое, ровное звучание.',
    //     price: 200,
    //     price2: 150,
    //     images: [
    //         "/images/guitars/jackson_js11_1.jpg",
    //         "/images/guitars/jackson_js11_2.jpg",
    //         "/images/guitars/jackson_js11_3.jpg",
    //         "/images/guitars/jackson_js11_4.jpg",
    //         "/images/guitars/jackson_js11_5.jpg",
    //         "/images/guitars/jackson_js11_6.jpg"
    //     ],
    //     messages: [
    //         {
    //             author: "Ivan",
    //             message: "Купил себе такую, в качестве первой электрогитары (до этого была акустика). В целом, доволен на все 100. Играть очень удобно и легко"
    //         },
    //         {
    //             author: "Петя",
    //             message: "Качество сборки - супер, строит на всех ладах (если как следует отстроить), смотрится очень достойно!"
    //         }
    //     ],
    //     soldOut: false
    // }];
})();