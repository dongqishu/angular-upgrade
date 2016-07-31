(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['$scope', 'ProductService', '$routeParams'];
    function ProductController($scope, ProductService, $routeParams) {
        $scope.product = {};
        $scope.products = [];

        if ($routeParams.id){
            ProductService.getProductById($routeParams.id)
                .then(res => {
                    $scope.product = res.data;
                    $scope.product.quantity = 1;
                }, error => console.log(error));
        } else {
            ProductService.getProducts()
                .then(res => {
                    $scope.products = res.data;
                }, error => console.log(error));
        }
    }
})();