angular.module('store')
    .directive("guitarStoreSkr", function () {
        return {
            restrict: 'E',
            templateUrl: "/pages/serhii-kravchenko/templates/articles.html",
            controller: 'GuitarStore',
            controllerAs: 'guitarSkr'
        }
    })
    .directive('articleSkr',function () {
        return{
            restrict:'E',
            templateUrl: "/pages/serhii-kravchenko/template/article.html",
            controller: 'ArticleControllerSkr',
            controllerAs: 'oneArticleSkr'
        }
    })

    .directive("imgSkr", function () {
        return {
            restrict: 'E',
            templateUrl: "/pages/serhii-kravchenko/template/images.html",
            controller: 'GalleryControllerSkr',
            controllerAs: 'gallerySkr'
        }
    })
    .directive("descSkr", function () {
        return {
            restrict: 'E',
            templateUrl: "/pages/serhii-kravchenko/template/description.html",
            controller: 'ArticleControllerSkr',
            controllerAs: 'oneArticleSkr'
        }
    })
    .directive("tabSkr", function () {
        return {
            restrict: 'A',
            templateUrl: "/pages/serhii-kravchenko/images.html",
            controller: 'TabControllerSkr',
            controllerAs: 'tabSkr'
        }
    })
    .directive("revSkr", function () {
        return {
            restrict: 'A',
            templateUrl: "/pages/serhii-kravchenko/images.html",
            controller: 'ReviewControllerSkr',
            controllerAs: 'revSkr'
        }
    });