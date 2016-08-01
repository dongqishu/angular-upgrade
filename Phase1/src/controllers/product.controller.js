(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['$scope', 'ProductService', '$routeParams', '$location'];
    function ProductController($scope, ProductService, $routeParams, $location) {
        $scope.product = {};
        $scope.products = [];

        if ($routeParams.id){
            ProductService.getProductById($routeParams.id)
                .then(res => {
                    $scope.product = res.data;
                    $scope.product.quantity = 1;
                    $scope.product.selectedTab = 'description';
                }, error => console.log(error));
        } else {
            ProductService.getProducts()
                .then(res => {
                    $scope.products = res.data;
                }, error => console.log(error));
        }

        $scope.selectProduct = function(product){
            $location.path('/product/' + product.id);
        }

        $scope.decreaseQuantity = function(product){
            if (product.quantity <= 1) return;
            product.quantity--;
        }

        $scope.increaseQuantity = function(product){
            product.quantity++;
        }

        $scope.addToCart = function(product){
            console.log('add to cart');
        }
    }
})();