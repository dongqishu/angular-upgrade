(function() {
    'use strict';

    angular
        .module('app')
        .directive('appReviews', ReviewsDirective);

    ReviewsDirective.$inject = [];
    function ReviewsDirective() {
        var directive = {
            controller: ReviewsController,
            link: link,
            restrict: 'E',
            templateUrl: '/src/directives/reviews.html',
            scope: {
                reviews: '=reviews'
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    
    function ReviewsController($scope) {
        $scope.hoveringOver = 0;
        $scope.starHover = function(starNum){
            console.log("star hover " + starNum);
            $scope.hoveringOver = starNum;
        }

        $scope.starStyle = function(starNum){
            if (starNum <= $scope.hoveringOver || (starNum <= $scope.reviews.myRating && $scope.hoveringOver === 0)) {
                return { "color" : "gold" };
            }
            return {};
        }

        $scope.hasStar = function(starNum){
            if ((starNum <= $scope.reviews.stars && $scope.reviews.myRating === null) 
            || starNum <= $scope.hoveringOver || 
            (starNum <= $scope.reviews.myRating && $scope.hoveringOver === 0)){
                return true;
            }
            return false;
        }

        $scope.starExit = function(){
            console.log("star exit");
            $scope.hoveringOver = 0;
        }

        $scope.rateProduct = function(starNum){
            console.log("Rating product " + starNum + " stars.");
            $scope.reviews.myRating = starNum;
        }
    }
})();