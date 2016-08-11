class ProductController {
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

angular
    .module('app')
    .component('appProduct', {
        templateUrl: 'src/product/product.component.html',
        controller: ProductController
    });