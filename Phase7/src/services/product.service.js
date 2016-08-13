var ProductService = (function () {
    function ProductService($http) {
        this.$http = $http;
    }
    ProductService.prototype.getProducts = function () {
        return this.$http.get('/src/services/product-list.json');
    };
    ProductService.prototype.getProductById = function (id) {
        return this.$http.get('/src/services/product.json');
    };
    ProductService.prototype.rateProduct = function (id, stars) {
        console.log("Call API to rate product ID " + id + ", Stars: " + stars);
        // call api here to rate product
    };
    return ProductService;
}());
angular
    .module('app')
    .service('ProductService', ProductService);
//# sourceMappingURL=product.service.js.map