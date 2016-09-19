(function () {
    var app_IN = angular.module('BoardStore', []);


//  ======================     ТОВАРЫ   ===========================
    var boards = [


    {
            name: "Capita Stairmaster",
            description: "Не важно, какая миссия стоит перед тобой сегодня: парк, пайп, " +
            "джибовая серия или просто отратраченный склон. Доске Stairmaster Extreme не страшен никакой вызов " +
            "- ведь это одна из самых лучших универсальных досок с традиционным прогибом на рынке.",
            price: 340,
            price2: 290,
            images: [
                '../../../images/snowboards/capita-stairmaster.jpg',
                "../../../images/snowboards/stairmaster1.jpg"
            ],

            messages:[
                {
                    author: 'Ololoshkin777',
                    message: "КРутая доска"
                },
                {
                    author: 'Ololoshkin777',
                    message: "КРутая доска"
                },
                {
                    author: 'Ololoshkin777',
                    message: "КРутая доска"
                }
            ],
            soldOut: false
        },


        {
            name: "Capita Stairmaster1",
            description: "Не важно, какая миссия стоит перед тобой сегодня: парк, пайп, " +
            "джибовая серия или просто отратраченный склон. Доске Stairmaster Extreme не страшен никакой вызов " +
            "- ведь это одна из самых лучших универсальных досок с традиционным прогибом на рынке.",
            price: 340,
            price2: 290,
            images: [
                '../../../images/snowboards/capita-stairmaster.jpg',
                "../../../images/snowboards/stairmaster1.jpg"
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
            name: "Capita Stairmaster2",
            description: "Не важно, какая миссия стоит перед тобой сегодня: парк, пайп, " +
            "джибовая серия или просто отратраченный склон. Доске Stairmaster Extreme не страшен никакой вызов " +
            "- ведь это одна из самых лучших универсальных досок с традиционным прогибом на рынке.",
            price: 340,
            price2: 290,
            images: [
                '../../../images/snowboards/capita-stairmaster.jpg',
                "../../../images/snowboards/stairmaster1.jpg"
            ],
            messages:
                [
                    {
                        author: 'Ololoshkin777',
                        message: "КРутая доска"
                    },
                    {
                        author: 'Ololoshkin777',
                        message: "КРутая доска"
                    }
                ],
            soldOut: true
        }


];


    //     ========================     StoreController     =============================

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

})();