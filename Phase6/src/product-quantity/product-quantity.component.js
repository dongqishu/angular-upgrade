var ProductQuantityController = (function () {
    function ProductQuantityController() {
    }
    ProductQuantityController.prototype.$onInit = function () {
        this.quantity = 1;
    };
    ProductQuantityController.prototype.decreaseQuantity = function () {
        this.quantity--;
        this.onQuantityChanged({ quantity: this.quantity });
    };
    ProductQuantityController.prototype.increaseQuantity = function () {
        this.quantity++;
        this.onQuantityChanged({ quantity: this.quantity });
    };
    return ProductQuantityController;
}());
angular
    .module('app')
    .component('appProductQuantity', {
    templateUrl: 'src/product-quantity/product-quantity.component.html',
    controller: ProductQuantityController,
    bindings: {
        onQuantityChanged: '&'
    }
});
//# sourceMappingURL=product-quantity.component.js.map