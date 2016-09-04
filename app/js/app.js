angular.module('store', ['ngRoute']);


angular.module('store')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                    templateUrl: '/pages/default/home.html'
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
    });
