(function(){
    angular
        .module('app')
        .component('appQuantity', {
            templateUrl: 'src/quantity/quantity.component.html',
            controller: QuantityController,
            bindings: {
                onQuantityChanged: '&'
            }
        });

    function QuantityController() {
        this.$onInit = $onInit;
        this.decreateQuantity = decreaseQuantity;
        this.increaseQuantity = increaseQuantity;

        function $onInit() {
            this.quantity = 1;
        }

        function decreaseQuantity() {
            this.quantity--;
            this.onQuantityChanged({ quantity: this.quantity });
        }

        function increaseQuantity() {
            this.quantity++;
            this.onQuantityChanged({ quantity: this.quantity });
        }
    }
})();


