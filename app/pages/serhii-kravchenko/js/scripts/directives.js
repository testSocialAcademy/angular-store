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
            templateUrl: "/pages/serhii-kravchenko/templates/article.html",
            controller: 'ArticleControllerSkr',
            controllerAs: 'oneArticleSkr'
        }
    })

    .directive("imgSkr", function () {
        return {
            restrict: 'E',
            templateUrl: "/pages/serhii-kravchenko/templates/images.html",
            controller: 'GalleryControllerSkr',
            controllerAs: 'gallerySkr'
        }
    })
    .directive("descSkr", function () {
        return {
            restrict: 'E',
            templateUrl: "/pages/serhii-kravchenko/templates/description.html",
            controller: 'ArticleControllerSkr',
            controllerAs: 'oneArticleSkr'
        }
    })
    .directive("messagesSkr", function () {
        return {
            restrict: 'E',
            templateUrl: "/pages/serhii-kravchenko/templates/messages.html",
            controller: 'ArticleControllerSkr',
            controllerAs: 'oneArticleSkr'
        }
    })
    .directive("revSkr", function () {
        return {
            restrict: 'A',
            controller: 'ReviewControllerSkr',
            controllerAs: 'revSkr'
        }
    });