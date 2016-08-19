(function() {
    'use strict';

    angular
        .module('app')
        .component('appProduct', {
            templateUrl: 'src/product/product.component.html',
            controller: ProductController
        });

    function ProductController(ProductService, $routeParams, $location) {
        var ctrl = this;

        ctrl.$onInit = init;
        ctrl.quantityChanged = quantityChanged;
        ctrl.addToCart = addToCart;
        ctrl.rateProduct = rateProduct;

        function init(){
            ctrl.product = {};
            ProductService.getProductById($routeParams.id)
                .then(res => {
                    ctrl.product = res.data;
                    ctrl.quantity = 1;
                    ctrl.productLoaded = true;
                }, error => console.log(error));
        }

        function quantityChanged(quantity) {
            ctrl.quantity = quantity;
        }

        function addToCart(product){
            console.log('add to cart');
        }

        function rateProduct(starNum){
            console.log("Rating product " + starNum + " stars.");
            ctrl.product.reviews.myRating = starNum;
            ProductService.rateProduct(ctrl.product.id, starNum);
        }
    }
})();