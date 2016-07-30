(function(){
    'use strict';

    angular.module('app', ['ngRoute']);

    angular.module('app')
        .config(function($routeProvider, $locationProvider){
                $routeProvider
                    .when('/product/:id', {
                        templateUrl: '/Phase1/src/views/product.html',
                        controller: 'ProductController'
                    }).
                    otherwise({
                        redirectTo: '/product/1'
                    });
                $locationProvider.html5Mode(true);
                });
})();

