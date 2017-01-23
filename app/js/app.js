angular.module('store', ['ngRoute']);


angular.module('store')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                    templateUrl: '/pages/default/index.html'
                }
            )
            .when('/whiskey', {
                    templateUrl: '/pages/feschenko-oleksandr/full_article.html'
                }
            )
            .when('/whiskey/:id', {
                    templateUrl: '/pages/feschenko-oleksandr/full_index.html'
                }
            )
            .when('/consoles', {
                    templateUrl: '/pages/piven-sergey/index.html'
                }
            )

            .when('/consoles/:id', {
                    templateUrl: '/pages/piven-sergey/templates/item.html',
                    controller: 'StoreController_sp',
                    controllerAs: 'store_sp'
                }
            )
            .when('/mobiles', {
                    templateUrl: '/pages/michail_suprunov/full_article.html'
                }
            )
            .when('/mobiles/:id', {
                    templateUrl: '/pages/michail_suprunov/full_index.html'
                }
            )
            .when('/guitars', {
                templateUrl: '/pages/serhii-kravchenko/index.html'
            })
            .when('/guitars/:id', {
                templateUrl: '/pages/serhii-kravchenko/templates/article.html'
            })
            .when('/laptops', {
                templateUrl: '/pages/andrey-ivanov/full_article.html'
            })
            .when('/laptops/:id', {
                    templateUrl: '/pages/andrey-ivanov/full_index.html'
                }
            )
            .when('/snowboards', {
                templateUrl: '/pages/igor-nevenitsa/index.html'
            })
            .when('/snowboards/:id', {
                    templateUrl: '/pages/igor-nevenitsa/templates/full-articles.html'
                }
            )
            .when('/sneakers', {
                    templateUrl: '/pages/baitasova-anastasiia/templates/index.html'
                }
            )
            .when('/sneakers/:id', {
                    templateUrl: '/pages/baitasova-anastasiia/templates/article.html'
                }
            )
            .otherwise({redirectTo: "/"})
    })
;
