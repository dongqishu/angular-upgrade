(function() {
    'use strict';

    angular
        .module('app')
        .component('appReviews', {
            templateUrl: '/src/reviews/reviews.component.html',
            controller: ReviewsController,
            restrict: 'E',
            bindings: {
                product: "="
            }    
        });
    
    function ReviewsController(ProductService) {
        this.$onInit = function(){
            this.hoveringOver = 0;
        }
        
        this.starHover = function(starNum){
            console.log("star hover " + starNum);
            this.hoveringOver = starNum;
        }

        this.starStyle = function(starNum){
            if (starNum <= this.hoveringOver || (starNum <= this.product.reviews.myRating && this.hoveringOver === 0)) {
                return { "color" : "gold" };
            }
            return {};
        }

        this.hasStar = function(starNum){
            if ((starNum <= this.product.reviews.stars && this.product.reviews.myRating === null) 
            || starNum <= this.hoveringOver || 
            (starNum <= this.product.reviews.myRating && this.hoveringOver === 0)){
                return true;
            }
            return false;
        }

        this.starExit = function() {
            this.hoveringOver = 0;
        }

        this.rateProduct = function(starNum){
            this.product.reviews.myRating = starNum;
            ProductService.rateProduct(this.product.id, starNum);
        }
    }
})();