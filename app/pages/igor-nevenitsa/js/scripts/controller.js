(function () {
    angular.module('store')
                .controller('SnowboardsController', ["$http", "$routeParams", function ($http, $routeParams) {

                    var _this = this;
                    this.boards = [];
                    this.selectedSnowboard = {};
                    console.log(this.boards + "  SnowboardsController");

                    $http({method: 'GET', url: '/pages/igor-nevenitsa/boards.json' })/*+ $routeParams.id*/

                        .success(function (data) {
                            _this.boards = data;
                            data.forEach(function (dataMap) {
                                if(dataMap.id == $routeParams.id) {
                                    _this.selectedSnowboard = dataMap;
                                    console.log(SnowboardsController.boards + "  " + "SnowboardsController2");
                                }
                            });
                        })
                        .catch(function(er){
                            _this.errors = er.data.error;
                        })
                }])

            .controller("StoreController_IN", function () {
                this.products = SnowboardsController.boards;
                console.log(this.products + "  StoreController_IN");
            })


            .controller('TabController', function(){
            this.tab = 1;

            this.setTab = function(newValue){
                this.tab = newValue;
            };

            this.isSet = function(tabName){
                return this.tab === tabName;
                 };
            })

            .controller('GalleryController', function(){
            this.current = 0;
            this.setCurrent = function(newGallery){
                this.current = newGallery || 0;
                };
             })


            .controller('ReviewController', function() {
            this.review = {};
            this.addReview = function(product) {
                product.messages.push(this.review);
                this.review = {};
                 };

             });


    /*.controller("currentSnb", function () {

     this.selectedSnowboardID = id;
     })*/

    /*.controller('NotesCreateControllerIN', [function() {
     this.saveNote = function(note){
     $http({method: 'POST', url: '/notes', data: note});
     };
     }])*/

    /*   .controller('SnowboardsController', ["$http", function($http) {
     var _this = this;
     var id;
     this.boards = [];
     this.selectedSnowboard = {};
     _this.selectedSnowboard = function (id_snb) {
     id = id_snb;
     console.log(id);
     };


     $http.get("/pages/igor-nevenitsa/boards.json")
     .success(function(data){
     _this.boards = data;
     /!*success(function (data) {
     data.forEach(function (dataMap) {
     if(dataMap.id == $routeParams.id) {
     _this.selectedSnowboard = dataMap;
     }
     });
     })*!/
     })
     }])*/


})();

