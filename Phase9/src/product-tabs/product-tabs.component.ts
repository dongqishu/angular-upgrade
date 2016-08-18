import { Product } from './../product/product.ts';
import { Component, Input, OnInit } from 'ng-metadata/core';
import './product-tabs.component.css';

@Component({
    selector: 'app-product-tabs',
    templateUrl: './product-tabs/product-tabs.component.html'
})
export class ProductTabsComponent implements OnInit {
    @Input() product: Product;
    selectedTab: string;

    constructor(){}

    ngOnInit() {
        this.selectedTab = 'description';
    }
}