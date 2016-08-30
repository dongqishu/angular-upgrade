import { ProductService } from "./../services/product.service";
import { Product } from "./../product/product.model";
import { IStateService } from "angular-ui-router";
import { Component, Input, Inject, OnInit } from "@angular/core";

@Component({
    selector: "app-product-list",
    templateUrl: "./product-list/product-list.component.html"
})
export class ProductListComponent implements OnInit {
    products: Array<Product>;

    constructor(private ProductService: ProductService,
                @Inject("$state") private $state: IStateService) {}

    ngOnInit() {
        this.products = new Array<Product>();

        this.ProductService.getProducts()
            .then((res: any) => {
                this.products = res;
            }, error => console.log(error));
    }

    selectProduct(product) {
        this.$state.go("productDetails", { id: product.id });
    }
} 