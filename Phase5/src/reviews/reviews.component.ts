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

class ReviewsController{
    private hoveringOver: number;
    private reviews: any;

    private $onInit(){
        this.hoveringOver = 0;
    }
    
    private starHover(starNum: number): void {
        console.log("star hover " + starNum);
        this.hoveringOver = starNum;
    }

    private starStyle(starNum: number): any {
        if (starNum <= this.hoveringOver || (starNum <= this.reviews.myRating && this.hoveringOver === 0)) {
            return { "color" : "gold" };
        }
        return {};
    }

    private hasStar(starNum: number): boolean{
        if ((starNum <= this.reviews.stars && this.reviews.myRating === null) 
        || starNum <= this.hoveringOver || 
        (starNum <= this.reviews.myRating && this.hoveringOver === 0)){
            return true;
        }
        return false;
    }

    private starExit(): void{
        console.log("star exit");
        this.hoveringOver = 0;
    }
}
