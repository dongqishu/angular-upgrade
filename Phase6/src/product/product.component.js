var ProductController = (function () {
    function ProductController(ProductService, $routeParams, $location) {
        this.ProductService = ProductService;
        this.$routeParams = $routeParams;
        this.$location = $location;
    }
    ProductController.prototype.$onInit = function () {
        var _this = this;
        this.product = new Product();
        var id = this.$routeParams['id'];
        this.ProductService.getProductById(id)
            .then(function (res) {
            _this.product = res.data;
            _this.quantity = 1;
            _this.selectedTab = 'description';
            _this.productLoaded = true;
        }, function (error) { return console.log(error); });
    };
    ProductController.prototype.decreaseQuantity = function () {
        if (this.quantity <= 1)
            return;
        this.quantity--;
    };
    ProductController.prototype.increaseQuantity = function () {
        this.quantity++;
    };
    ProductController.prototype.addToCart = function () {
        console.log('add to cart product id ' + this.product.id + ', quantity: ' + this.quantity);
    };
    ProductController.prototype.rateProduct = function (starNum) {
        console.log("Rating product " + starNum + " stars.");
        this.product.reviews.myRating = starNum;
        this.ProductService.rateProduct(this.product.id, starNum);
    };
    return ProductController;
}());
angular
    .module('app')
    .component('appProduct', {
    templateUrl: 'src/product/product.component.html',
    controller: ProductController
});
//# sourceMappingURL=product.component.js.map