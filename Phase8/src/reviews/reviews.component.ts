import { Reviews } from './reviews.model.ts';
import { Component, Input, OnInit, Output, EventEmitter } from 'ng-metadata/core';

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews/reviews.component.html'
})
export class ReviewsComponent implements OnInit {
    hoveringOver: number;
    @Input() reviews: Reviews;
    @Output() onRate = new EventEmitter<number>()

    constructor(){}

    ngOnInit(){
        this.hoveringOver = 0;
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
