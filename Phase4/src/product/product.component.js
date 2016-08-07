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
        ctrl.decreaseQuantity = decreaseQuantity;
        ctrl.increaseQuantity = increaseQuantity;
        ctrl.addToCart = addToCart;
        ctrl.rateProduct = rateProduct;

        function init(){
            ctrl.product = {};
            ProductService.getProductById($routeParams.id)
                .then(res => {
                    ctrl.product = res.data;
                    ctrl.product.quantity = 1;
                    ctrl.product.selectedTab = 'description';
                    ctrl.productLoaded = true;
                }, error => console.log(error));
        }

        function decreaseQuantity(product){
            if (product.quantity <= 1) return;
            product.quantity--;
        }

        function increaseQuantity(product){
            product.quantity++;
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