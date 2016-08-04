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
        $scope.starHover = function(stars){
            console.log("star hover " + stars);
        }

        $scope.starExit = function(){
            console.log("star exit");
        }
    }
})();