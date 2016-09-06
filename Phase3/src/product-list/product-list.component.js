(function() {
    'use strict';

    angular
        .module('app')
        .component('appProductList', {
            templateUrl: '/src/product-list/product-list.component.html',
            controller: ProductListController
        });

    function ProductListController($location, ProductService) {
        this.$onInit = init;
        this.selectProduct = selectProduct;

        function init(){
            this.products = [];

            ProductService.getProducts()
                .then(res => {
                    this.products = res.data;
                }, error => console.log(error));
        }
        
        function selectProduct(product){
            $location.path('/product/' + product.id);
        }
    }
})();