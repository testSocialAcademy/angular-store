var app_nv = angular.module("camStore_nv", []);

app_nv.controller("StoreController_nv", function () {
    this.products = products;
});

app_nv.controller("TabController_nv", function () {
    this.tab = 1;

    this.setTab = function (selectTab) {
        this.tab = selectTab;
    }

    this.isTab = function (checkedTab) {
        return this.tab === checkedTab;
    }
});

app_nv.controller("ReviewController_nv", function () {
    this.review = {};
    
    this.addReview = function (products) {
        products.messages.push(this.review);
        this.review = {};
    }
});


var products = {
    name: 'GoPro HERO 4',
    description: 'HERO4 — самая передовая камера GoPro, может похвастаться высокой производительностью и функционалом, имеет встроенный Wi-Fi, способна снимать в разрешении 4K со скоростью 30 кадров в секунду а также делать 12 Мп снимки.',
    price: 16599,
    price2: 14999,
    images: [
        "../../images/actionCams/gopro-hero4-1.jpeg",
        "../../images/actionCams/gopro-hero4-2.jpeg",
        "../../images/actionCams/gopro-hero4-3.jpeg"
    ],
    messages: [
        {
            author: 'Аркадий',
            message: 'Нареканий к товару нет, жаль нет в продаже нормальных флешек, которые хорошо тянут 4ку'
        },
        {
            author: 'Остап',
            message: 'GoPro незаменимая вещь в походах! Закрепил на держателе и нереальные фотки обеспечены'
        },
    ],
    soldOut: true
};
