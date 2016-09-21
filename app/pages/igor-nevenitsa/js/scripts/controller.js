(function () {
    var app_IN = angular.module('BoardStore', []);


       /* angular.module('store')

            .controller('SnowboardsController', ["$http", "$routeParams",  function($http, $route) {
                var _this = this;
                this.boards = [];
                this.selectedSnowboard = {};

                $http.get("../pages/igor-nevenitsa/boards.json")

                    .success(function(data){
                        _this.boards = data;
                        _this.selectedSnowboard = data[$route.id] ;
                })
            }])*/

    app_IN.controller("StoreController_IN", function () {

                this.products = boards;


            });

    app_IN.controller('TabController', function(){
            this.tab = 1;

            this.setTab = function(newValue){
                this.tab = newValue;
            };

            this.isSet = function(tabName){
                return this.tab === tabName;
            };
        });

    app_IN.controller('GalleryController', function(){
            this.current = 0;
            this.setCurrent = function(newGallery){
                this.current = newGallery || 0;
            };
        });

    app_IN.controller('ReviewController', function() {
            this.review = {};
            this.addReview = function(product) {
                product.messages.push(this.review);
                this.review = {};
            };

        });
//  ======================     ТОВАРЫ   ===========================
    var boards = [


        {
            name: "Nitro Afterlife",
            description: "Лучшая парковая доска 2016 года по версии Transworld Snowboarding. Естeственно, имеет награду Good Wood. " +
            "Отзывчивая, пуляет как с кататапульты, и, при этом, очень устойчива на джибе",
            camber: "Regular camber (low-profile)",
            flex: "Soft",
            price: 500,
            price2: 420,
            images: [

                '../../../images/snowboards/NitroAfterlife1.jpg',
                "../../../images/snowboards/nitro-afterlife-all-2017.jpg",
                "../../../images/snowboards/afterlife-lifestyle-bg.png"


            ],

            messages:[
                {
                    author: 'J.P. Walker',
                    message: "Лучше не придумать"
                },
                {
                    author: 'Shaun White',
                    message: "У меня есть такая, доволен"
                },
                {
                    author: 'Travis Rise',
                    message: "Крутая доска"
                }
            ],
            soldOut: false
        },


        {
            name: "Lib Tech Burtner Box Scratcher",
            description: "Награда Good Wood 2016, эта доска среди лучших парковых досок уходящего года. Оптимальный " +
            "баланс между мягкостью и устойчивостью. Превратите весь склон в ваш личный парк.",
            camber: "Hybrid (reverse between inserts, flat to camber to tips)",
            flex: "Medium",
            price: 510,
            price2: 460,
            images: [
                "../../../images/snowboards/lib-good-wood.jpg",
                '../../../images/snowboards/lib-burtner.jpg'

            ],
            messages:
                [
                    {
                        author: 'Ololoshkin777',
                        message: "КРутая доска"
                    }
                ],
            soldOut: false
        },


        {
            name: "Capita Stairmaster",
            description: "Не важно, какая миссия стоит перед тобой сегодня: парк, пайп, " +
            "джибовая серия или просто отратраченный склон. Доске Stairmaster Extreme не страшен никакой вызов " +
            "- ведь это одна из самых лучших универсальных досок с традиционным прогибом на рынке.",
            camber: "Flat",
            flex: "Medium",
            price: 340,
            price2: 290,
            images: [
                '../../../images/snowboards/capita-stairmaster.jpg',
                "../../../images/snowboards/stairmaster1.jpg"
            ],
            messages:
                [
                    {
                        author: 'HrenovAR',
                        message: "Пойдет!"
                    },
                    {
                        author: 'Джугашвили543',
                        message: "Топлю на ней каждый день как батька"
                    }
                ],
            soldOut: true
        }


    ];


})();

