(function() {
    'use strict';

    angular
        .module('app')
        .component('appReviews', {
            templateUrl: '/src/reviews/reviews.component.html',
            controller: ReviewsController,
            bindings: {
                product: "="
            }    
        });
    
    function ReviewsController(ProductService) {
        this.$onInit = init;
        this.starHover = starHover;
        this.starStyle = starStyle;
        this.hasStar = hasStar;
        this.starExit = starExit;
        this.rateProduct = rateProduct;

        function init(){
            this.hoveringOver = 0;
        }
        
        function starHover(starNum){
            console.log("star hover " + starNum);
            this.hoveringOver = starNum;
        }

        function starStyle(starNum){
            if (starNum <= this.hoveringOver || (starNum <= this.product.reviews.myRating && this.hoveringOver === 0)) {
                return { "color" : "gold" };
            }
            return {};
        }

        function hasStar(starNum){
            if ((starNum <= this.product.reviews.stars && this.product.reviews.myRating === null) 
            || starNum <= this.hoveringOver || 
            (starNum <= this.product.reviews.myRating && this.hoveringOver === 0)){
                return true;
            }
            return false;
        }

        function starExit(){
            console.log("star exit");
            this.hoveringOver = 0;
        }

        function rateProduct(starNum){
            console.log("Rating product " + starNum + " stars.");
            // changing state of Product
            this.product.reviews.myRating = starNum;
            // calling a service
            ProductService.rateProduct(this.product.id, starNum);
        }
    }
})();