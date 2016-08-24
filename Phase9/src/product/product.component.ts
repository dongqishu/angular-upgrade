import { Product } from "./product.model";
import { ProductService } from "./../services/product.service";
import { Component, Inject, OnInit } from "ng-metadata/core";
import { ILocationService } from "angular";
import { IStateParamsService } from "angular-ui-router";

@Component({
    selector: "app-product",
    templateUrl: "./product/product.component.html"
})
export class ProductComponent implements OnInit {
    product: Product;
    productLoaded: boolean;
    quantity: number;

    constructor(@Inject("$stateParams") private $stateParams: IStateParamsService,
                @Inject("$location") private $location: ILocationService,
                @Inject("ProductService") private ProductService: ProductService) {}

    ngOnInit() {
        this.product = new Product();
        const id = this.$stateParams["id"];
        this.ProductService.getProductById(id)
            .then((res: any) => {
                this.product = res;
                this.quantity = 1;
                this.productLoaded = true;
            }, error => console.log(error));
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