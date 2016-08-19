import { Product } from "./../product/product.model";
import { IComponentController, IComponentOptions } from "angular";
import "./product-tabs.component.css";

export class ProductTabsController implements IComponentController {
    product: Product;
    selectedTab: string;

    constructor(){}

    $onInit() {
        this.selectedTab = "description";
    }
}

export class ProductTabsComponent implements IComponentOptions {
    bindings: any;
    controller:IComponentController;
    templateUrl:string;

    constructor() {
        this.templateUrl = "./product-tabs/product-tabs.component.html";
        this.controller = ProductTabsController;
        this.bindings = {
            product: "<"
        }
    }
}