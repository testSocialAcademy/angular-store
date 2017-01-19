(function () {
    angular.module('store')
        .factory('creditService_ai', function () {

            function twoMonths (price) {
                return ((price * 1.04) / 2 ).toFixed(2);
            }

            function sixMonths (price) {
                return ((price * 1.05 + 100) / 6 ).toFixed(2);
            }

            function twelveMonths (price) {
                return ((price * 1.1 + 150) / 12 ).toFixed(2);
            }

            return {
                showCredit: function (price) {

                    var arrPrice = [twoMonths,sixMonths,twelveMonths];

                    return arrPrice.map(function(func){
                        return func(price);
                    });

                }
            }
        })

})();


