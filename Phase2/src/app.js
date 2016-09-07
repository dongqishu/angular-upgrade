(function () {
    'use strict';

    angular.module('app', ['ngRoute']);

    angular.module('app')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/product/:id', {
                    templateUrl: '/src/product/product.html',
                    controller: 'ProductController'
                })
                .when('/products', {
                    templateUrl: '/src/product-list/product-list.html',
                    controller: 'ProductListController'
                })
                .otherwise({
                    redirectTo: '/products'
                });
        });
})();
