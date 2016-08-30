import { Product } from "./../product/product.model";
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-product-tabs",
    templateUrl: "./product-tabs/product-tabs.component.html",
    styleUrls: ["./product-tabs/product-tabs.component.css"]
})
export class ProductTabsComponent implements OnInit {
    @Input() product: Product;

    selectedTab: string;

    constructor() {}

    ngOnInit() {
        this.selectedTab = "description";
    }
}