import { Product } from './../model/product.ts';

export class ProductTabsController implements ng.IComponentController {
    product: Product;
    selectedTab: string;

    constructor(){}

    $onInit() {
        this.selectedTab = 'description';
    }
}

export class ProductTabsComponent implements ng.IComponentOptions {
    bindings: any;
    controller:ng.IComponentController;
    templateUrl:string;

    constructor() {
        this.templateUrl = 'product-tabs.component.html';
        this.controller = ProductTabsController;
        this.bindings = {
            product: '<'
        }
    }
}

angular
    .module('app')
    .component('appProductTabs', new ProductTabsComponent());