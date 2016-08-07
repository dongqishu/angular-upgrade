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
        var ctrl = this;

        ctrl.$onInit = init;
        ctrl.starHover = starHover;
        ctrl.starStyle = starStyle;
        ctrl.hasStar = hasStar;
        ctrl.starExit = starExit;

        function init(){
            ctrl.hoveringOver = 0;
        }
        
        function starHover(starNum){
            console.log("star hover " + starNum);
            ctrl.hoveringOver = starNum;
        }

        function starStyle(starNum){
            if (starNum <= ctrl.hoveringOver || (starNum <= ctrl.reviews.myRating && ctrl.hoveringOver === 0)) {
                return { "color" : "gold" };
            }
            return {};
        }

        function hasStar(starNum){
            if ((starNum <= ctrl.reviews.stars && ctrl.reviews.myRating === null) 
            || starNum <= ctrl.hoveringOver || 
            (starNum <= ctrl.reviews.myRating && ctrl.hoveringOver === 0)){
                return true;
            }
            return false;
        }

        function starExit(){
            console.log("star exit");
            ctrl.hoveringOver = 0;
        }
    }
})();