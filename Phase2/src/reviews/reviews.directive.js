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
            $scope.hoveringOver = 0;
        }

        $scope.rateProduct = function(starNum){
            $scope.product.reviews.myRating = starNum;
            ProductService.rateProduct($scope.product.id, starNum);
        }
    }
})();