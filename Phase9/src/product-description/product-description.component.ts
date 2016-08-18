import { Product } from './../product/product.ts';
import { Component, Input } from 'ng-metadata/core';

@Component({
    selector: 'app-product-description',
    templateUrl: './product-description/product-description.component.html'
})
export class ProductDescriptionComponent  {
    @Input() product: Product;

    constructor(){}

    $onInit() {}
}