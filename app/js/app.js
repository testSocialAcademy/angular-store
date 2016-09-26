angular.module('store', ['ngRoute']);


angular.module('store')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                    templateUrl: '/pages/default/home.html'
                }
            )
            .when('/whiskey', {
                    templateUrl: '/pages/feschenko-oleksandr/index.html'
                }
            )
            .when('/whiskey/:id', {
                    templateUrl: '/pages/feschenko-oleksandr/full_index.html'
                }
            )
            .when('/consoles', {
                    templateUrl: '/pages/piven-sergey/home.html'
                }
            )


            .when('/consoles/:id', {
                    templateUrl: '/pages/piven-sergey/templates/item.html',
                    controller: 'StoreController_sp',
                    controllerAs: 'store_sp'
                }
            )
            .when('/mobiles', {
                    templateUrl: '/pages/michail_suprunov/index.html'
                }
            )
            .when('/mobiles/:id', {
                    templateUrl: '/pages/michail_suprunov/full_index.html'
                }
            )

            .when('/guitars', {
                templateUrl: '/pages/serhii-kravchenko/home.html'
            })
            .when('/guitars/:id', {
                templateUrl: '/pages/serhii-kravchenko/templates/article.html'
            })
            .when('/laptops', {
                templateUrl: '/pages/andrey-ivanov/index.html'
            })
            .when('/laptops/:id', {
                    templateUrl: '/pages/andrey-ivanov/full_index.html'
                }
            )
            .otherwise({redirectTo: "/"})
    })
;
