(function() {
    'use strict';

    angular
        .module('app')
        .component('appReviews', {
            templateUrl: '/src/reviews/reviews.component.html',
            controller: ReviewsController,
            binding: {
                product: "="
            }    
        });
    
    function ReviewsController(ProductService) {
        var ctrl = this;

        ctrl.$onInit = init;
        ctrl.starHover = starHover;
        ctrl.starStyle = starStyle;
        ctrl.hasStar = hasStar;
        ctrl.starExit = starExit;
        ctrl.rateProduct = rateProduct;

        function init(){
            ctrl.hoveringOver = 0;
        }
        
        function starHover(starNum){
            console.log("star hover " + starNum);
            ctrl.hoveringOver = starNum;
        }

        function starStyle(starNum){
            if (starNum <= ctrl.hoveringOver || (starNum <= ctrl.product.reviews.myRating && ctrl.hoveringOver === 0)) {
                return { "color" : "gold" };
            }
            return {};
        }

        function hasStar(starNum){
            if ((starNum <= ctrl.product.reviews.stars && ctrl.product.reviews.myRating === null) 
            || starNum <= ctrl.hoveringOver || 
            (starNum <= ctrl.product.reviews.myRating && ctrl.hoveringOver === 0)){
                return true;
            }
            return false;
        }

        function starExit(){
            console.log("star exit");
            ctrl.hoveringOver = 0;
        }

        function rateProduct(starNum){
            console.log("Rating product " + starNum + " stars.");
            // changing state of Product
            ctrl.product.reviews.myRating = starNum;
            // calling a service
            ProductService.rateProduct(ctrl.product.id, starNum);
        }
    }
})();