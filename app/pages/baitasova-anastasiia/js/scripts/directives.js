angular.module('store')

    .directive('articlesPage', function () {
        return {
            restrict: 'E',
            templateUrl: '/pages/baitasova-anastasiia/templates/articles.html',
        }
    })

    .directive('imagesPage', function () {
    return {
        restrict: 'E',
        templateUrl: '/pages/baitasova-anastasiia/templates/images.html',
    }
    });

