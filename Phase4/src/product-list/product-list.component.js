(function() {
    'use strict';

    angular
        .module('app')
        .component('appProductList', {
            templateUrl: '/src/product-list/product-list.component.html',
            controller: ProductListController
        });

    function ProductListController($location, ProductService) {
        var ctrl = this;

        ctrl.$onInit = init;
        ctrl.selectProduct = selectProduct;

        function init(){
            ctrl.products = [];

            ProductService.getProducts()
                .then(res => {
                    ctrl.products = res.data;
                }, error => console.log(error));
        }
        
        function selectProduct(product){
            $location.path('/product/' + product.id);
        }
    }
})();