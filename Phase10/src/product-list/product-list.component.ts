import { ProductService } from "./../services/product.service";
import { Product } from "./../product/product.model";
import { Component, Input, Inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-product-list",
    templateUrl: "./product-list/product-list.component.html"
})
export class ProductListComponent implements OnInit {
    products: Array<Product>;

    constructor(private ProductService: ProductService,
                private Router: Router) {}

    ngOnInit() {
        this.products = new Array<Product>();

        this.ProductService.getProducts()
            .then((res: any) => {
                this.products = res;
            }, error => console.log(error));
    }

    selectProduct(product) {
        this.Router.navigate(["/product", product.id]);
    }
}
