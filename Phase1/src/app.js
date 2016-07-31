(function () {
    'use strict';

    angular.module('app', ['ngRoute']);

    angular.module('app')
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/products', {
                    templateUrl: '/src/views/product-list.html',
                    controller: 'ProductController'
                })
                .when('/product/:id', {
                    templateUrl: '/src/views/product.html',
                    controller: 'ProductController'
                })
                .otherwise({
                    redirectTo: '/products'
                });
        });
})();
