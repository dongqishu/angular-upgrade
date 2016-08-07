angular
    .module('app')
    .component('appProductList', {
        templateUrl: '/src/product-list/product-list.component.html',
        controller: ProductListController
    });

class ProductListController{
    private products: any[];

    constructor(private $location, private ProductService) {}

    private $onInit() {
        this.products = [];

        this.ProductService.getProducts()
            .then(res => {
                this.products = res.data;
            }, error => console.log(error));
    } 
    
    private selectProduct(product){
        this.$location.path('/product/' + product.id);
    }
} 