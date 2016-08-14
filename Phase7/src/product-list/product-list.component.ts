import { ProductService } from './../services/product.service.ts';
import { Product } from './../model/product.ts';
import { IComponentController, IComponentOptions, IPromise } from 'angular';
import { IStateService } from 'angular-ui-router';

export class ProductListController implements IComponentController {
    products: Array<Product>;

    constructor(private $state: IStateService,
                private ProductService: ProductService) {}

    $onInit() {
        this.products = new Array<Product>();

        this.ProductService.getProducts()
            .then((res: any) => {
                this.products = res;
            }, error => console.log(error));
    } 
    
    selectProduct(product){
        this.$state.go('productDetails', { id: product.id });
    }
} 

export class ProductListComponent implements IComponentOptions {
    public controller:IComponentController;
    public templateUrl:string;

    constructor() {
        this.templateUrl = './product-list/product-list.component.html';
        this.controller = ProductListController;
    }
}