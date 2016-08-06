(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProductController', ProductController);

    function ProductController($scope, ProductService, $routeParams, $location) {
       init();

       $scope.decreaseQuantity = decreaseQuantity;
       $scope.increaseQuantity = increaseQuantity;
       $scope.addToCart = addToCart;

        function init(){
            $scope.product = {};
            ProductService.getProductById($routeParams.id)
                .then(res => {
                    $scope.product = res.data;
                    $scope.product.quantity = 1;
                    $scope.product.selectedTab = 'description';
                    $scope.productLoaded = true;
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