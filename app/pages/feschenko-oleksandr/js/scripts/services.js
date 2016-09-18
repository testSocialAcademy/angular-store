(function () {
    angular.module('store')
        .factory('credit_af', function () {
            function twoMonths (startValue) {
                return ((startValue * 1.04) / 2).toFixed(2);
            }
            
            function sixMonths (startValue) {
                return ((startValue * 1.05 + 1) / 6).toFixed(2);
            }
            
            function twelveMonths (startValue) {
                return ((startValue * 1.1 + 2) / 12).toFixed(2);
            }

            return {
                showCredit: function (productPrice) {
                    var fArr = [twoMonths,sixMonths,twelveMonths];

                    return fArr.map(function(func){
                        return func(productPrice);
                    });
                }
             }
        })

})();


