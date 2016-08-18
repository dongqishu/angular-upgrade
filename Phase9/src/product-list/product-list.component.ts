import { ProductService } from './../services/product.service.ts';
import { Product } from './../model/product.ts';
import { IPromise } from 'angular';
import { IStateService } from 'angular-ui-router';
import { Component, Input, Inject, OnInit } from 'ng-metadata/core';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list/product-list.component.html'
})
export class ProductListComponent implements OnInit {
    products: Array<Product>;

    constructor(@Inject('$state') private $state: IStateService, private ProductService: ProductService) {}

    ngOnInit() {
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