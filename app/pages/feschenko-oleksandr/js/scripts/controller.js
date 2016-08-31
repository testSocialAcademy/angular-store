(function () {
    var app_af = angular.module('WhiskeyStore', []);

    app_af.controller("StoreController", function () {
        this.products = whiskeys;
    });

    app_af.controller('GalleryController', function(){
        this.current = 0;
        
        this.setCurrent = function(newGallery){
            this.current = newGallery || 0;
        };
    });

    app_af.controller('TabController', function(){
        this.tab = 1;

        this.setTab = function(tab){
            this.tab = tab;
        };

        this.isSet = function(tab){
            return (this.tab === tab);
        };
    });

    app_af.controller('DisplayController',function(){
        this.displayed = false;

        this.toggle = function () {
            console.log(this.displayed);
            this.displayed = !this.displayed;
        };

        this.isDisplayed = function(displayed) {
            return (this.displayed === displayed);
        }
    });

    app_af.controller('ReviewController', function () {
        this.review = {};

        this.addReview = function(product){
            product.messages.push(this.review);
            this.review = {};
        };
    });

    var whiskeys = [
        {
            name: 'Glen Grant Old Smuggler 3 года выдержки 0.7 л 40%',
            description: 'Вискикурня Glen Grant основана в 1840 году в Rothes, Speyside, Scotland. Ранее принадлежала Chivas Brothers Ltd, известному по своему виски Chivas Regal. Вискикурня Glen Grant была приобретена итальянской компанией Gruppo Campari в декабре 2005 года. Группа Davide Campari-Milano S.p.A., является одним из ведущих мировых производителей напитков, представленных более чем в 190 странах мира и занимающих лидирующие позиции в Европе и Америке. Основанная в 1860 году, сегодня группа — шестой по величине игрок на рынке алкогольных напитков категории "премиум". Продуктовая линейка компании – это более 50-ти брендов, среди которых всемирно известные Aperol, Appleton, Campari, Cinzano, SKYY Vodka и Wild Turkey.',
            price: 12.00,
            price2: null,
            images: [
                "/images/whiskey/glen_grant_1.jpg",
                "/images/whiskey/glen_grant_2.jpg"
            ],
            messages:[
                {
                    author: "Віктор",
                    message: "Хороший виски Всем советую Берите и останетесь довольны"
                },
                {
                    author: "Лариса",
                    message: "Виски Glen Grant Old Smuggler отличный напиток в чистом виде,но мне как любителю кока-колы отдаю предпочтение коктелю Whiskey Cola .Двойное удовольствие!!!"
                },
            ],
            soldOut: false
        },
        {
            name: 'Ballantines Very Old 21 год выдержки 0.7 л 43%',
            description: 'Ballantine’s Finest был представлен миру в 1910 г., а спустя 20 лет ценители выдержанных сортов приветствовали 17- и 30-летний Ballantine’s. В конце 1930-х годов компания продолжила свое стремительное развитие. В 1938 году Ballantine’s присваивается герб, что подтверждает его благородство и высокое шотландское происхождение. На гербе, который и по сей день украшает каждую бутылку Ballantine’s, изображены все этапы производства этого легендарного напитка. В 1960 г. миру был представлен Ballantine’s 12 YO, а спустя 33 года 21-летний.В 2006 г. Сэнди Хислоуп стал 5-м мастером купажа Ballantine’s за 180-летнюю историю существования компании.Ballantine’s — самый продаваемый шотландский виски в Европе, скотч 3 в мире. Сегодня продажи его составляют более 6 миллионов девятилитровых ящиков в год. Это один из самых влиятельных и уважаемых спиртных напитков, обладающих к тому же совершенно особым и неповторимым стилем, характерным для всей линейки виски',
            price: 100.00,
            price2: null,
            images: [
                "/images/whiskey/ballantines_1.jpg",
                "/images/whiskey/ballantines_2.jpg"
            ],
            messages:[
                {
                    author: "Юрий",
                    message: "За такие деньги отлично, мягкий вкус, на утро голова не болит."
                },
                {
                    author: "Анатолий",
                    message: "Достойный вкус за адекватную цену"
                },
            ],
            soldOut: false
        },
        {
            name: 'Chivas Regal 4.5 л 12 лет выдержки 40%',
            description: 'В начале XX века братья Чивас решили производить виски высокой выдержки на экспорт в США, где в связи с быстро развивающейся экономикой был большой спрос на товары класса люкс. Этот вид виски получил название Chivas Regal 25 и был ведущим брендом шотландских виски на американском рынке до вступления в силу Сухого закона в 1920 году. После отмены сухого закона Чивас вернулся на американский рынок под маркой Chivas Regal 12. Он стал стильным напитком эры, во многом благодаря его рекламе как любимого виски Фрэнка Синатры.В 1997 году мастер купажирования Чивас Ригал Колин Скотт (Colin Scott) создал восемнадцатилетний виски. В 2000 году компания Pernord Ricard приобрела Chivas Regal.',
            price: 216.00,
            price2: 200.00,
            images: [
                "/images/whiskey/chivas_regal_1.jpg",
                "/images/whiskey/chivas_regal_2.jpg",
                "/images/whiskey/chivas_regal_3.jpg"
            ],
            messages:[
                {
                    author: "Ігор",
                    message: "Справжній Chivas Regal."
                },
                {
                    author: "Павел",
                    message: "Цена/качество запредельное у этого напитка. Очень легко пьется и с удовольствием. Раздавив 0,5 с вечера, можно быть уверенным, что завтра будет доброе утро!"
                },
            ],
            soldOut: false
        }
    ];

})();





