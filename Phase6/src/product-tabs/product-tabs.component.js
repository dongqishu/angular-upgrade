var ProductTabsController = (function () {
    function ProductTabsController() {
    }
    ProductTabsController.prototype.$onInit = function () {
        this.selectedTab = 'description';
    };
    return ProductTabsController;
}());
angular
    .module('app')
    .component('appProductTabs', {
    templateUrl: 'src/product-tabs/product-tabs.component.html',
    controller: ProductTabsController,
    bindings: {
        product: '<'
    }
});
//# sourceMappingURL=product-tabs.component.js.map