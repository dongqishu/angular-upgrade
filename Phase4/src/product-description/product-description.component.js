(function(){
    'use strict';

    angular
        .module('app')
        .component('appProductDescription', {
            templateUrl: 'src/product-description/product-description.component.html',
            controller: function() {},
            bindings: {
                product: "<"
            }
        });
})();

