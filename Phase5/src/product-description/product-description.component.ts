class ProductDescriptionController {
    product: Product;

    constructor(){}

    $onInit() {
    }
}

angular
    .module('app')
    .component('appProductDescription', {
        templateUrl: 'src/product-description/product-description.component.html',
        controller: ProductDescriptionController,
        bindings: {
            product: "<"
        }
    });