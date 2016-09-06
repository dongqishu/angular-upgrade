(function() {
    'use strict';

    angular
        .module('app')
        .component('appProduct', {
            templateUrl: 'src/product/product.component.html',
            controller: ProductController
        });

    function ProductController(ProductService, $routeParams, $location) {
        this.$onInit = init;
        this.quantityChanged = quantityChanged;
        this.addToCart = addToCart;
        this.rateProduct = rateProduct;

        function init(){
            this.product = {};
            ProductService.getProductById($routeParams.id)
                .then(res => {
                    this.product = res.data;
                    this.quantity = 1;
                    this.productLoaded = true;
                }, error => console.log(error));
        }

        function quantityChanged(quantity) {
            this.quantity = quantity;
        }

        function addToCart(product){
            console.log('add to cart');
        }

        function rateProduct(starNum){
            console.log("Rating product " + starNum + " stars.");
            this.product.reviews.myRating = starNum;
            ProductService.rateProduct(this.product.id, starNum);
        }
    }
})();