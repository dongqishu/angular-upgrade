import { Product } from "./../product/product.model";
import { Component, Input } from "@angular/core";

@Component({
    selector: "app-product-description",
    templateUrl: "./product-description/product-description.component.html"
})
export class ProductDescriptionComponent  {
    @Input() product: Product;

    constructor() {}

    $onInit() {}
}