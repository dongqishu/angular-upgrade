import { Product } from "./product.model";
import { ProductService } from "./../services/product.service";
import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-product",
    templateUrl: "./product/product.component.html"
})
export class ProductComponent implements OnInit {
    product: Product;
    productLoaded: boolean;
    quantity: number;

    constructor(private ProductService: ProductService,
                private route: ActivatedRoute) {}

    ngOnInit() {
        this.product = new Product();

        this.route.params.subscribe(params => {
            const id = +params["id"];
            this.ProductService.getProductById(id)
                .then((res: any) => {
                    this.product = res;
                    this.quantity = 1;
                    this.productLoaded = true;
                }, error => console.log(error));
        });
    }

    quantityChanged(quantity): void {
        this.quantity = quantity;
    }

    addToCart(): void {
        console.log("add to cart product id " + this.product.id + ", quantity: " + this.quantity);
    }

    rateProduct(starNum): void {
        console.log("Rating product " + starNum + " stars.");
        this.product.reviews.myRating = starNum;
        this.ProductService.rateProduct(this.product.id, starNum);
    }
}