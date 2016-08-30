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
        var ctrl = this;
        ctrl.$onInit = $onInit;
        ctrl.decreateQuantity = decreaseQuantity;
        ctrl.increaseQuantity = increaseQuantity;

        function $onInit() {
            ctrl.quantity = 1;
        }

        function decreaseQuantity() {
            ctrl.quantity--;
            ctrl.onQuantityChanged({ quantity: ctrl.quantity });
        }

        function increaseQuantity() {
            ctrl.quantity++;
            ctrl.onQuantityChanged({ quantity: ctrl.quantity });
        }
    }
})();


