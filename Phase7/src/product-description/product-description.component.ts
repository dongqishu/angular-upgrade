import { Product } from './../model/product.ts';

export class ProductDescriptionController implements ng.IComponentController {
    product: Product;

    constructor(){}

    $onInit() {}
}

export class ProductDescriptionComponent implements ng.IComponentOptions {
    public bindings:any;
    public controller:ng.IComponentController;
    public templateUrl:string;

    constructor() {
        this.templateUrl = 'product-description.component.html';
        this.controller = ProductDescriptionController;
        this.bindings = {
            product: "<"
        }
    }
}

angular
    .module('app')
    .component('appProductDescription', new ProductDescriptionComponent());