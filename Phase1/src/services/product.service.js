(function() {
'use strict';

    angular
        .module('app')
        .service('ProductService', ProductService);

    ProductService.$inject = ['$http'];
    function ProductService($http) {
        this.getProducts = getProducts;
        this.getProductById = getProductById;

        function getProducts() { 
            return $http.get('/src/services/productList.json');
        }

        function getProductById(id){
            return $http.get('/src/services/product.json');
        }
    }
})();