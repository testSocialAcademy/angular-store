(function () {
angular.module('store')
    .factory('Credits', function creditFactory_in() {

        function credForTwo (price) {
            return Math.round((price * 1.04)/ 2);
        }
        function credForSix (price) {
            var credForSixVar = Math.round(((price * 1.05) + 2) / 6 );
            console.log(credForSixVar + "    credForSixVar");
            return Math.round(((price * 1.05) + 2) / 6 );
        }
        function credForTwelve (price) {
            return Math.round(((price * 1.1) + 3) / 12 );
        }

        return {
            allCredits_in: function (price) {
                console.log(price + "    PRICE");
               var allCredsInFactory =
                   [credForTwo, credForSix, credForTwelve];
                return allCredsInFactory.map(function(f){
                    return f(price);
                });
            }
        };

/*
return {
 showCredit: function (productPrice) {
 var fArr = [twoMonths,sixMonths,twelveMonths];

 return fArr.map(function(func){
 return func(productPrice);
 });
 }
 }
 */

    });
})();

/*
return {
    creditInfo: function(price) {
        var results = [];
        results.push(twoMonths(price));
        results.push(sixMonths(price));
        results.push(twelveMonths(price));
        return results;
    }
};*/
