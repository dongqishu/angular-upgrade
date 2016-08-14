import { Product } from './../model/product.ts';
import { IComponentController, IComponentOptions } from 'angular';

export class ProductDescriptionController implements ng.IComponentController {
    product: Product;

    constructor(){}

    $onInit() {}
}

export class ProductDescriptionComponent implements ng.IComponentOptions {
    public bindings:any;
    public controller:IComponentController;
    public templateUrl:string;

    constructor() {
        this.templateUrl = './product-description/product-description.component.html';
        this.controller = ProductDescriptionController;
        this.bindings = {
            product: "<"
        }
    }
}