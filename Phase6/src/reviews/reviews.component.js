var ReviewsController = (function () {
    function ReviewsController() {
        console.log('reviews constructor');
    }
    ReviewsController.prototype.$onInit = function () {
        this.hoveringOver = 0;
        console.log('reviews init');
        console.log(this.reviews);
    };
    ReviewsController.prototype.starHover = function (starNum) {
        console.log("star hover " + starNum);
        this.hoveringOver = starNum;
    };
    ReviewsController.prototype.starStyle = function (starNum) {
        if (starNum <= this.hoveringOver || (starNum <= this.reviews.myRating && this.hoveringOver === 0)) {
            return { "color": "gold" };
        }
        return {};
    };
    ReviewsController.prototype.hasStar = function (starNum) {
        if ((starNum <= this.reviews.stars && this.reviews.myRating === null)
            || starNum <= this.hoveringOver ||
            (starNum <= this.reviews.myRating && this.hoveringOver === 0)) {
            return true;
        }
        return false;
    };
    ReviewsController.prototype.starExit = function () {
        console.log("star exit");
        this.hoveringOver = 0;
    };
    return ReviewsController;
}());
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
//# sourceMappingURL=reviews.component.js.map