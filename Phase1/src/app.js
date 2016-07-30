angular.module('app', []);

angular.module('app')
       .config(routes);

var routes = function($routeProvider){
    $routeProvider
        .when('/product/:id', {
            templateUrl: '/views/product.html',
            controller: 'ProductController'
        }).
        otherwise({
            redirectTo: '/product/1'
        });
}
