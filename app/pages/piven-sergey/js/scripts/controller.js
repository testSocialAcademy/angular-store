(function () {

    var app_sp = angular.module('store', []);

    app_sp.controller("StoreController", function () {
        this.products = gamingPlatforms;
    });

    app_sp.controller("MainPanelController", function () {
        this.tab = 1;
        this.selectTab = function (setTab) {
            this.tab = setTab;
        };
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        }
    });

    app_sp.controller("AdditionalPanelController", function () {
        this.tab = 1;
        this.selectTab = function (setTab) {
            this.tab = setTab;
        };
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        }
    });

    app_sp.controller("ReviewController", function () {
        this.review = {};
        this.addReview = function (products) {
            products.messages.push(this.review);
            this.review = {};
        }
    });

    var gamingPlatforms = [
        {
            title: 'Sony PlayStation 4',
            description: [
                'AMD Radeon Graphics Core Next Engine',
                '8GB of GDDR5 RAM',
                'AMD Jaguar Eight-Core Processor',
                'The Sony PlayStation 4 Gaming Console ushers in an era of next generation gaming. Providing dynamic and ' +
                'connected gaming, powerful performance, high definition graphics, deeply integrated social capabilities, ' +
                'and innovative second-screen features, the PlayStation 4 allows you to game as you see fit. With immersive ' +
                'game play, access to your favorite digital entertainment apps, and PlayStation exclusives, the PlayStation 4 ' +
                'centers around you, the gamer. Play when, where, and how you want.'
            ],
            price: 399.99,
            images: [
                "../../images/gamerStuff/ps4.png",
            ],
            messages: [
                {
                    author: "Bob",
                    message: "I'm an old pc user. I wasn't sure, so I banked on B&H's good return policy. No need to " +
                    "return; the system is worth the money! Any/all issues have to do with inadequate listings of " +
                    "documentation/necessary running info. But if you look, info available somewhere on internet. "
                },
                {
                    author: "Anna",
                    message: "Excellent product!!! My 15 years old sun is happy with the playstation. Sony is a great " +
                    "brand so you can except only excellent products."
                },
            ],
            soldOut: false
        },
        {
            title: 'Sony PlayStation 3',
            description: [
                'Cell Broadband Engine',
                '256MB of XDR Main RAM',
                'RSX Graphics (256MB) ',
                'With a Blu-ray optical drive, an HDMI output, and digital audio support, the 500GB PlayStation 3 Gaming' +
                ' Console from Sony allows you to experience high definition gaming. The PlayStation 3 comes with an ' +
                'included DualShock 3 wireless controller, which allows you to play untethered to the console. To play ' +
                'online multiplayer on the PlayStation Network, you can either use a wired 10/100/1000 Mbps Gigabit ' +
                'Ethernet connection or go wireless on an 802.11b/g Wi-Fi network.'
            ],
            price: 200,
            images: [
                "../../images/gamerStuff/ps3.png",
            ],
            messages: [
                {
                    author: 'Jimm',
                    message: 'Cool console'
                },
                {
                    author: 'John',
                    message: 'Nice old console'
                }
            ],
            soldOut: false
        },
        {
            title: 'Microsoft Xbox One',
            description: [
                '2TB Storage Capacity',
                'Xbox One Wireless Controller',
                'Ultra HD Blu-ray Disc Player',
                'The Xbox One delivers a high-quality experience in both gaming and multimedia. With high-resolution ' +
                'graphics, fast performance, and innovative Kinect features (sold separately), the Xbox One allows you ' +
                'to game on your own terms. You can snap two windows together on the same screen so you can watch TV ' +
                'while you play your game. Xbox Live (sold separately) allows you to test your skills against other ' +
                'players around the world. '
            ],
            price: 299,
            images: [
                "../../images/gamerStuff/xboxOne.png",
            ],
            messages: [
                {
                    author: "Aabutt",
                    message: "The best price ever. I got it really cheap from B&H compared to other retailers." +
                    "Well the best thing I like about Xbox one with Kinect was the experience of not having a " +
                    "controller in your hand and by just talking to the device and with your hand gestures you " +
                    "control everything. This is amazing!I am not a person who would like to run outdoors or do " +
                    "cardio, but xbox with kinect has changed my view honestly. It is fun and a good family product! "
                },
                {
                    author: "LS",
                    message: "Easy and fast delivery, everything came exactly as shown on website. Will definitely " +
                    "order from this website again."
                },
            ],
            soldOut: false
        },
        {
            title: 'Microsoft Xbox 360',
            description: [
                '3.2 GHz Triple Core IBM PowerPC CPU',
                '512MB of RAM',
                '4GB of Storage',
                'With a library of games, and apps like Netflix and HBO GO, the Microsoft Xbox 360 Gaming Console has ' +
                'something for everyone. Play blockbusters like Halo, Forza Motorsport, and explore a massive catalog ' +
                'of games with broad variety and deep value. Your favorite entertainment apps are on Xbox 360, so you ' +
                'can watch HD movies, TV shows, live events, music and sports. Xbox 360 comes with one month of Xbox ' +
                'Live Gold for advanced multiplayer, free games, and exclusive member discounts.'
            ],
            price: 150,
            images: [
                "../../images/gamerStuff/xbox360.png",
            ],
            messages: [
                {
                    author: 'Jimm',
                    message: 'Cool console'
                },
                {
                    author: 'John',
                    message: 'Nice old console'
                }
            ],
            soldOut: false
        }
    ];
    $(document).ready(function () {

        $('.main').animate({opacity: 1}, 1000);

        $('.moreInfo').on('click', function () {
            $(this).parents('.itemBlock').find('.additionalTab').show(1000, function () {
                $(this).animate({opacity: 1}, 500)
            });
            $(this).parents('.itemBlock').find('.closeButton').fadeIn(1000);
            $(this).parents('.itemBlock').find('.moreInfo').fadeOut(1000);
        });

        $('.closeButton').on('click', function () {
            $(this).parents(".itemBlock").find('.additionalTab').animate({opacity: 0}, 500, function () {
                $(this).hide(1000);
                $(this).parents('.itemBlock').find('.moreInfo').fadeIn(1000);
                $(this).parents('.itemBlock').find('.closeButton').fadeOut(1000);
            });
        });

        $('.writeReviewButton').on('click', function () {
            $('.writeReviewButton').fadeOut(500);
            $('.reviewForm').show(500, function () {
                $(this).animate({opacity: 1}, 500);
            })
        });

        $('.cancelReviewButton').on('click', function () {
            $('.reviewForm').animate({opacity: 0}, 500, function () {
                $(this).hide(500);
                $('.writeReviewButton').fadeIn(500);
            })
        });
    });
})();

