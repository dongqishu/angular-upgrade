angular
    .module('app')
    .component('appProduct', {
        templateUrl: 'src/product/product.component.html',
        controller: ProductController
    });

class ProductController {
    private product: any;
    private productLoaded: boolean;

    constructor(private ProductService, private $routeParams, private $location){}

    private $onInit(){
        this.product = {};
        this.ProductService.getProductById(this.$routeParams.id)
            .then(res => {
                this.product = res.data;
                this.product.quantity = 1;
                this.product.selectedTab = 'description';
                this.productLoaded = true;
            }, error => console.log(error));
    }

    private decreaseQuantity(product){
        if (product.quantity <= 1) return;
        product.quantity--;
    }

    private increaseQuantity(product){
        product.quantity++;
    }

    private addToCart(product){
        console.log('add to cart');
    }

    private rateProduct(starNum){
        console.log("Rating product " + starNum + " stars.");
        this.product.reviews.myRating = starNum;
        this.ProductService.rateProduct(this.product.id, starNum);
    }
}