import { Product } from './../model/product.ts';

export class ProductService {
    constructor(public $http: ng.IHttpService){}

    public getProducts() { 
        return this.$http.get<Array<Product>>('/src/services/product-list.json');
    }

    public getProductById(id: number){
        return this.$http.get<Product>('/src/services/product.json');
    }

    public rateProduct(id: number, stars: number): void{
        console.log("Call API to rate product ID " + id + ", Stars: " + stars);
        // call api here to rate product
    }
}

angular
    .module('app')
    .service('ProductService', ProductService);