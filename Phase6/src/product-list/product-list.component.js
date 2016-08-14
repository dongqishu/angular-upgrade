var ProductListController = (function () {
    function ProductListController($location, ProductService) {
        this.$location = $location;
        this.ProductService = ProductService;
    }
    ProductListController.prototype.$onInit = function () {
        var _this = this;
        this.products = new Array();
        this.ProductService.getProducts()
            .then(function (res) {
            _this.products = res.data;
        }, function (error) { return console.log(error); });
    };
    ProductListController.prototype.selectProduct = function (product) {
        this.$location.path('/product/' + product.id);
    };
    return ProductListController;
}());
angular
    .module('app')
    .component('appProductList', {
    templateUrl: '/src/product-list/product-list.component.html',
    controller: ProductListController
});
//# sourceMappingURL=product-list.component.js.map