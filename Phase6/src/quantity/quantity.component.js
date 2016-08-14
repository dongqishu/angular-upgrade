var QuantityController = (function () {
    function QuantityController() {
    }
    QuantityController.prototype.$onInit = function () {
        this.quantity = 1;
    };
    QuantityController.prototype.decreaseQuantity = function () {
        this.quantity--;
        this.onQuantityChanged({ quantity: this.quantity });
    };
    QuantityController.prototype.increaseQuantity = function () {
        this.quantity++;
        this.onQuantityChanged({ quantity: this.quantity });
    };
    return QuantityController;
}());
angular
    .module('app')
    .component('appQuantity', {
    templateUrl: 'src/quantity/quantity.component.html',
    controller: QuantityController,
    bindings: {
        onQuantityChanged: '&'
    }
});
//# sourceMappingURL=quantity.component.js.map