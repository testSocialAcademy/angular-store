angular.module('store', ['ngRoute']);


angular.module('store')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                    templateUrl: '/pages/default/home.html'
                }
            )
            .when('/guitars', {
                templateUrl: '/pages/serhii-kravchenko/home.html'
            })
            .when('/guitars:id', {
                templateUrl: '/pages/serhii-kravchenko/full_article.html'
            })
    });
