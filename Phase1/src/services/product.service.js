(function() {
'use strict';

    angular
        .module('app')
        .service('ProductService', ProductService);

    ProductService.$inject = ['$http'];
    function ProductService($http) {
        this.getProducts = getProducts;
        this.getProductById = getProductById;
        this.rateProduct = rateProduct;

        function getProducts() { 
            return $http.get('/src/services/product-list.json');
        }

        function getProductById(id){
            return $http.get('/src/services/product.json');
        }

        function rateProduct(id, stars){
            console.log("Call API to rate product ID " + id + ", Stars: " + stars);
            // call api here to rate product
        }
    }
})();