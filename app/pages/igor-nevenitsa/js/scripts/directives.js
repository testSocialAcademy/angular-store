angular.module('store')
    .directive('mainBodyin', function () {
        return {
            restrict: 'E',
            templateUrl: '/pages/igor-nevenitsa/templates/articles.html',
            controller: 'SnowboardsController',
            controllerAs: 'SnbCtrl'
        }
    })
    .directive('galleryIn', function () {
        return {
            restrict: 'E',
            templateUrl: '/pages/igor-nevenitsa/templates/images.html',
            controller: 'GalleryController',
            controllerAs: 'SnbGallery'
         }
    })
    .directive('descriptionIn', function () {
        return {
            restrict: 'E',
            templateUrl: '/pages/igor-nevenitsa/templates/description.html',
            controller: 'SnowboardsController',
            controllerAs: 'SnbCtrl'
        }
    })
    .directive('creditsIn', function () {
        return {
            restrict: 'E',
            templateUrl: '/pages/igor-nevenitsa/templates/credits.html',
            scope: {
                price: "="
            },
            controller: 'CreditsController',
            controllerAs: 'CredCtrl'
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
