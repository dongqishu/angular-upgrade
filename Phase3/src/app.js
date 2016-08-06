(function () {
    'use strict';

    angular.module('app', ['ngRoute']);

    angular.module('app')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/products', {
                    template: '<app-product-list></app-product-list>'
                })
                .when('/product/:id', {
                    template: '<app-product></app-product>'
                })
                .otherwise({
                    redirectTo: '/products'
                });
        });
})();
