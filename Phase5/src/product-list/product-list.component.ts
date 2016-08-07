class ProductListController {
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

angular
    .module('app')
    .component('appProductList', {
        templateUrl: '/src/product-list/product-list.component.html',
        controller: ProductListController
    });