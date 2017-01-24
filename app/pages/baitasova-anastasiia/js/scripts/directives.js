angular.module('store')

    .directive('articlesPage', function () {
        return {
            restrict: 'E',
            templateUrl: '/pages/baitasova-anastasiia/templates/articles.html',
            controller: 'ArticlesController',
            controllerAs: 'ArticlesCtrl'
        }
    })

    .directive('articlesImg', function () {
    return {
        restrict: 'A',
        templateUrl: '/pages/baitasova-anastasiia/templates/images.html',
    }
    })

    .directive('articlesImg2', function () {
        return {
            restrict: 'A',
            templateUrl: '/pages/baitasova-anastasiia/templates/images.html',
        }
    })

    .directive('messagesPage', function () {
    return {
        restrict: 'E',
        templateUrl: '/pages/baitasova-anastasiia/templates/messages.html',
    }
    })

    .directive('descriptionPage', function () {
        return {
            restrict: 'E',
            templateUrl: '/pages/baitasova-anastasiia/templates/description.html',
        }
    });

