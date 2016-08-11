class ProductQuantityController {
    quantity: number;
    onQuantityChanged: any;

    constructor(){}

    $onInit() {
        this.quantity = 1;
    }

    decreaseQuantity(): void {
        this.quantity--;
        this.onQuantityChanged({ quantity: this.quantity });
    }

    increaseQuantity(): void {
        this.quantity++;
        this.onQuantityChanged({ quantity: this.quantity });
    }
}

angular
    .module('app')
    .component('appProductQuantity', {
        templateUrl: 'src/product-quantity/product-quantity.component.html',
        controller: ProductQuantityController,
        bindings: {
            onQuantityChanged: '&'
        }
    });