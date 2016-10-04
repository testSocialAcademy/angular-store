angular.module('store')
    .factory('creditSkr', function () {
        function twoMonths (startValue) {
            return ((startValue * 1.04) / 2).toFixed(0);
        }

        function sixMonths (startValue) {
            return (((startValue * 1.05) / 6) + 10).toFixed(0);
        }

        function twelveMonths (startValue) {
            return (((startValue * 1.1) / 12) + 15).toFixed(0);
        }

        return {
            showCreditSkr: function (productPrice) {
                var crArrSkr = [twoMonths,sixMonths,twelveMonths];

                return crArrSkr.map(function(func){
                    return func(productPrice);
                });
            }
        }
    });