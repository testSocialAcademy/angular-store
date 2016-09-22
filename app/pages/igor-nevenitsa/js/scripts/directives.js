angular.module('store')
    .directive('mainBodyin', function () {
        return {
            restrict: 'E',
            templateUrl: '/pages/igor-nevenitsa/templates/articles.html',
            controller: 'SnowboardsController',
            controllerAs: 'SnowboardsController'
        }
    })
    .directive('galleryIn', function () {
        return {
            restrict: 'E',
            templateUrl: '/pages/igor-nevenitsa/templates/images.html',
            controller: 'GalleryController',
            controllerAs: 'gallery'
         }
    })
    .directive('descriptionIn', function () {
        return {
            restrict: 'E',
            templateUrl: '/pages/igor-nevenitsa/templates/description.html',
           /* controller: 'TabController',
            controllerAs: 'tab'*/
            controller: 'SnowboardsController',
            controllerAs: 'SnowboardsController'
        }
    })
    .directive('reviewsIn', function () {
        return {
            restrict: 'E',
            templateUrl: '/pages/igor-nevenitsa/templates/messages.html',
            controller: 'ReviewController',
            controllerAs: 'RevCtrl'
        }
    });
