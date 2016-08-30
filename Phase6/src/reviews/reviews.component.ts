import { Reviews } from "./reviews.model";
import { IComponentController, IComponentOptions } from "angular";

export class ReviewsController implements IComponentController {
    hoveringOver: number;
    reviews: Reviews;

    constructor(){
        console.log("reviews constructor");
    }

    $onInit(){
        this.hoveringOver = 0;
        console.log("reviews init");
        console.log(this.reviews);
    }
    
    starHover(starNum: number): void {
        console.log("star hover " + starNum);
        this.hoveringOver = starNum;
    }

    starStyle(starNum: number): any {
        if (starNum <= this.hoveringOver || (starNum <= this.reviews.myRating && this.hoveringOver === 0)) {
            return { "color" : "gold" };
        }
        return {};
    }

    hasStar(starNum: number): boolean {
        if ((starNum <= this.reviews.stars && this.reviews.myRating === null) 
        || starNum <= this.hoveringOver || 
        (starNum <= this.reviews.myRating && this.hoveringOver === 0)){
            return true;
        }
        return false;
    }

    starExit(): void {
        console.log("star exit");
        this.hoveringOver = 0;
    }
}

export class ReviewsComponent implements IComponentOptions {
    bindings: any;
    controller:IComponentController;
    templateUrl:string;

    constructor() {
        this.templateUrl = "./reviews/reviews.component.html";
        this.controller = ReviewsController;
        this.bindings = {
            reviews: "<",
            onRate: "&"
        }
    }
}
