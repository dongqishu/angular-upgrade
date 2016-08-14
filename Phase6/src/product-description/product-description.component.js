var ProductDescriptionController = (function () {
    function ProductDescriptionController() {
    }
    ProductDescriptionController.prototype.$onInit = function () {
    };
    return ProductDescriptionController;
}());
angular
    .module('app')
    .component('appProductDescription', {
    templateUrl: 'src/product-description/product-description.component.html',
    controller: ProductDescriptionController,
    bindings: {
        product: "<"
    }
});
//# sourceMappingURL=product-description.component.js.map