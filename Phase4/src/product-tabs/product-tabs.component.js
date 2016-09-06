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
        this.$onInit = $onInit;
        
        function $onInit(){
            this.selectedTab = 'description';
        }
    }
})();


