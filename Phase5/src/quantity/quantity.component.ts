class QuantityController {
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
    .component('appQuantity', {
        templateUrl: 'src/quantity/quantity.component.html',
        controller: QuantityController,
        bindings: {
            onQuantityChanged: '&'
        }
    });