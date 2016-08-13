import { Product } from './../model/product.ts';
import { ProductService } from './../services/product.service.ts';

export class ProductController implements ng.IComponentController {
    product: Product;
    productLoaded: boolean;
    quantity: number;

    constructor(private ProductService: ProductService, 
                private $routeParams: ng.route.IRouteParamsService, 
                private $location: ng.ILocationService){}

    $onInit() {
        this.product = new Product();
        const id = this.$routeParams['id'];
        this.ProductService.getProductById(id)
            .then((res: ng.IHttpPromiseCallbackArg<Product>) => {
                this.product = res.data;
                this.quantity = 1;
                this.productLoaded = true;
            }, error => console.log(error));
    }

    quantityChanged(quantity): void {
        this.quantity = quantity;
    }

    addToCart(): void {
        console.log('add to cart product id ' + this.product.id + ', quantity: ' + this.quantity);
    }

    rateProduct(starNum: number): void {
        console.log("Rating product " + starNum + " stars.");
        this.product.reviews.myRating = starNum;
        this.ProductService.rateProduct(this.product.id, starNum);
    }
}

export class ProductComponent implements ng.IComponentOptions {
    public controller:ng.IComponentController;
    public templateUrl:string;

    constructor() {
        this.templateUrl = 'product.component.html';
        this.controller = ProductController;
    }
}

angular
    .module('app')
    .component('appProduct', new ProductComponent());