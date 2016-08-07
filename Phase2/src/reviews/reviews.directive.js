(function() {
    'use strict';

    angular
        .module('app')
        .directive('appReviews', ReviewsDirective);

    function ReviewsDirective() {
        var directive = {
            controller: ReviewsController,
            link: link,
            restrict: 'E',
            templateUrl: '/src/reviews/reviews.html',
            scope: {
                // passing product by reference (mutable)
                product: '=product'
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    
    function ReviewsController($scope, ProductService) {
        $scope.hoveringOver = 0;
        $scope.starHover = function(starNum){
            console.log("star hover " + starNum);
            $scope.hoveringOver = starNum;
        }

        $scope.starStyle = function(starNum){
            if (starNum <= $scope.hoveringOver || (starNum <= $scope.product.reviews.myRating && $scope.hoveringOver === 0)) {
                return { "color" : "gold" };
            }
            return {};
        }

        $scope.hasStar = function(starNum){
            if ((starNum <= $scope.product.reviews.stars && $scope.product.reviews.myRating === null) 
            || starNum <= $scope.hoveringOver || 
            (starNum <= $scope.product.reviews.myRating && $scope.hoveringOver === 0)){
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
            // changing state of Product
            $scope.product.reviews.myRating = starNum;
            // calling a service
            ProductService.rateProduct($scope.product.id, starNum);
        }
    }
})();