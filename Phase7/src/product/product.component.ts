import { Product } from './../model/product.ts';
import { ProductService } from './../services/product.service.ts';
import { IComponentController, IComponentOptions, ILocationService, IHttpPromiseCallbackArg } from 'angular';
import { IRouteParamsService } from 'angular-route';

interface IRouteParams extends IRouteParamsService {
    property1:string;
 }

export class ProductController implements IComponentController {
    product: Product;
    productLoaded: boolean;
    quantity: number;

    constructor(private ProductService: ProductService, 
                private $routeParams: any, 
                private $location: ILocationService){}

    $onInit() {
        this.product = new Product();
        const id = this.$routeParams['id'];
        this.ProductService.getProductById(id)
            .then((res: IHttpPromiseCallbackArg<Product>) => {
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

export class ProductComponent implements IComponentOptions {
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