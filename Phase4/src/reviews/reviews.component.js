(function() {
    'use strict';

    angular
        .module('app')
        .component('appReviews', {
            templateUrl: '/src/reviews/reviews.component.html',
            controller: ReviewsController,
            bindings: {
                reviews: "<",
                onRate: "&"
            }    
        });
    
    function ReviewsController() {
        this.$onInit = init;
        this.starHover = starHover;
        this.starStyle = starStyle;
        this.hasStar = hasStar;
        this.starExit = starExit;

        function init(){
            this.hoveringOver = 0;
        }
        
        function starHover(starNum){
            console.log("star hover " + starNum);
            this.hoveringOver = starNum;
        }

        function starStyle(starNum){
            if (starNum <= this.hoveringOver || (starNum <= this.reviews.myRating && this.hoveringOver === 0)) {
                return { "color" : "gold" };
            }
            return {};
        }

        function hasStar(starNum){
            if ((starNum <= this.reviews.stars && this.reviews.myRating === null) 
            || starNum <= this.hoveringOver || 
            (starNum <= this.reviews.myRating && this.hoveringOver === 0)){
                return true;
            }
            return false;
        }

        function starExit(){
            console.log("star exit");
            this.hoveringOver = 0;
        }
    }
})();