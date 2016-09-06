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
    });
