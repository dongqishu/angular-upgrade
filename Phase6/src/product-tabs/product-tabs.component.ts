class ProductTabsController {
    product: Product;
    selectedTab: string;

    constructor(){}

    $onInit() {
        this.selectedTab = 'description';
    }
}

angular
    .module('app')
    .component('appProductTabs', {
        templateUrl: 'src/product-tabs/product-tabs.component.html',
        controller: ProductTabsController,
        bindings: {
            product: '<'
        }
    });