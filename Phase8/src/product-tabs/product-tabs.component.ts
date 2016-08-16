import { Product } from './../model/product.ts';
import { Component, Input } from 'ng-metadata/core';
import './product-tabs.component.css';

@Component({
    selector: 'app-product-tabs',
    templateUrl: './product-tabs/product-tabs.component.html'
})
export class ProductTabsComponent {
    @Input() product: Product;
    selectedTab: string;

    constructor(){}

    $onInit() {
        this.selectedTab = 'description';
    }
}