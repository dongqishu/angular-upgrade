import { Product } from './../model/product.ts';
import { ProductService } from './../services/product.service.ts';
import { IComponentController, IComponentOptions, ILocationService, IHttpPromiseCallbackArg } from 'angular';
import { IStateParamsService } from 'angular-ui-router';

export class ProductController implements IComponentController {
    product: Product;
    productLoaded: boolean;
    quantity: number;

    constructor(private ProductService: ProductService, 
                private $stateParams: IStateParamsService, 
                private $location: ILocationService){}

    $onInit() {
        this.product = new Product();
        const id = this.$stateParams['id'];
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
        this.templateUrl = './product/product.component.html';
        this.controller = ProductController;
    }
}