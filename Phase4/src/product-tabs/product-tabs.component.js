(function() {
    'use strict';

    angular
        .module('app')
        .component('appProductTabs', {
            templateUrl: 'src/product-tabs/product-tabs.component.html',
            controller: ProductTabsController,
            bindings: {
                product: '<'
            }
        });

    function  ProductTabsController() {
        var ctrl = this;
        ctrl.$onInit = $onInit;
        
        function $onInit(){
            ctrl.selectedTab = 'description';
        }
    }
})();


