angular.module('store')
    .directive('mainBody_IN', function () {
        return {
            restrict: 'E',
            templateUrl: '/pages/igor-nenenitsa/templates/articles.html',
            controller: 'StoreController_sp',
            controllerAs: 'store_sp'
        }
    })