import { ProductService } from './../services/product.service.ts';
import { Product } from './../model/product.ts';

export class ProductListController implements ng.IComponentController {
    products: Array<Product>;

    constructor(private $location: ng.ILocationService, 
                private ProductService: ProductService) {}

    $onInit() {
        this.products = new Array<Product>();

        this.ProductService.getProducts()
            .then((res: ng.IHttpPromiseCallbackArg<Array<Product>>) => {
                this.products = res.data;
            }, error => console.log(error));
    } 
    
    selectProduct(product){
        this.$location.path('/product/' + product.id);
    }
} 

export class ProductListComponent implements ng.IComponentOptions {
    public controller:ng.IComponentController;
    public templateUrl:string;

    constructor() {
        this.templateUrl = 'product-list.component.html';
        this.controller = ProductListController;
    }
}

angular
    .module('app')
    .component('appProductList', new ProductListComponent());