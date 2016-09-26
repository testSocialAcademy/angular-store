(function () {
    angular.module('store')
        .factory("Credit_mu", function Credit_muFactory() {

            function twoMonths(price) {
                var result = [];
                result.push(Math.round(price / 2));
                result.push(Math.round(price * 0.04));
                result.push(result[0] + result[1]);

                return result;
            }

            function sixMonths(price) {
                var result = [];
                result.push(Math.round(price / 6));
                result.push(Math.round(price * 0.05 + 10));
                result.push(result[0] + result[1]);

                return result;
            }

            function twelveMonths(price) {
                var result = [];
                result.push(Math.round(price / 12));
                result.push(Math.round(price * 0.1 + 15));
                result.push(result[0] + result[1]);

                return result;
            }

            return {
                creditInfo: function(price) {
                    var results = [];
                    results.push(twoMonths(price));
                    results.push(sixMonths(price));
                    results.push(twelveMonths(price));
                    return results;
                }
            };
        });
})();
