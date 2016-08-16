import { ProductService } from './../services/product.service.ts';
import { Product } from './../model/product.ts';
import { IPromise } from 'angular';
import { IStateService } from 'angular-ui-router';
import { Component, Input } from 'ng-metadata/core';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list/product-list.component.html'
})
export class ProductListComponent {
    products: Array<Product>;

    constructor(@Input('$state') private $state: IStateService,
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