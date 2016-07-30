(function(){
    'use strict';

    angular.module('app', ['ngRoute']);

    angular.module('app')
        .config(function($routeProvider, $locationProvider){
                $routeProvider
                    .when('/product/:id', {
                        templateUrl: '/src/views/product.html',
                        controller: 'ProductController'
                    }).
                    otherwise({
                        redirectTo: '/product/1'
                    });
                });
})();

