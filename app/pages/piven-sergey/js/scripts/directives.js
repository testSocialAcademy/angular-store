angular.module('store')
    .directive('showMessageSp', function () {
        return {
            restrict: 'E',
            templateUrl: '/pages/piven-sergey/templates/articles.html',
            controller: 'StoreController_sp',
            controllerAs: 'store_sp'
        }
    })
    .directive('showTitlePrice', function () {
        return {
            restrict: 'E',
            templateUrl: '/pages/piven-sergey/templates/title-price.html',
            controller: 'StoreController_sp',
            controllerAs: 'store_sp'
        }
    })
    .directive('showImg', function () {
        return {
            restrict: 'E',
            templateUrl: '/pages/piven-sergey/templates/images.html',
            controller: 'StoreController_sp',
            controllerAs: 'store_sp'
        }
    })
    .directive('showDescription', function () {
        return {
            restrict: 'E',
            templateUrl: '/pages/piven-sergey/templates/description.html',
            controller: 'StoreController_sp',
            controllerAs: 'store_sp'
        }
    })
    .directive('showMessages', function () {
        return {
            restrict: 'E',
            templateUrl: '/pages/piven-sergey/templates/messages.html',
            controller: 'StoreController_sp',
            controllerAs: 'store_sp'
        }
    })
    .directive('showCredit', function () {
    return {
        restrict: 'E',
        templateUrl: '/pages/piven-sergey/templates/credit.html',
        controller: 'StoreController_sp',
        controllerAs: 'store_sp'
    }
});