(function () {
    'use strict';

    angular.module('app', ['ngRoute']);

    angular.module('app')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/product/:id', {
                    template: '<app-product></app-product>'
                })
                .when('/products', {
                    template: '<app-product-list></app-product-list>'
                })
                .otherwise({
                    redirectTo: '/products'
                });
        });
})();
