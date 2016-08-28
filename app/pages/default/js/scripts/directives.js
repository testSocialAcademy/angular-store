angular.module('store')
.directive('showMessage', function () {
    return {
        restrict: 'E',
        templateUrl: '/pages/default/templates/show_message.html'
    }
});