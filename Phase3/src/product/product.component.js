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
        this.decreaseQuantity = decreaseQuantity;
        this.increaseQuantity = increaseQuantity;
        this.addToCart = addToCart;

        function init(){
            this.product = {};
            ProductService.getProductById($routeParams.id)
                .then(res => {
                    this.product = res.data;
                    this.product.quantity = 1;
                    this.product.selectedTab = 'description';
                    this.productLoaded = true;
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
    }
})();