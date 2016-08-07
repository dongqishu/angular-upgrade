(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProductListController', ProductListController);

    function ProductListController($scope, $location, ProductService) {
        init();

        $scope.selectProduct = selectProduct;

        function init(){
            $scope.products = [];

            ProductService.getProducts()
                .then(res => {
                    $scope.products = res.data;
                }, error => console.log(error));
        }
        
        function selectProduct(product){
            $location.path('/product/' + product.id);
        }
    }
})();