angular.module('store')
    .directive('mainBody', function () {
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
            controllerAs: 'SnbCtrl'
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
