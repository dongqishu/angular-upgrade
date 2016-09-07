import { 
    Component, 
    Input, 
    OnInit, 
    Output, 
    EventEmitter 
} from "ng-metadata/core";
import "./quantity.component.css";

@Component({
    selector: "app-quantity",
    templateUrl: "./quantity/quantity.component.html"
})
export class QuantityComponent implements OnInit {
    quantity: number;
    @Output() onQuantityChanged = new EventEmitter<number>();

    constructor() {}

    ngOnInit() {
        this.quantity = 1;
    }

    decreaseQuantity(): void {
        if (this.quantity === 1) return;
        this.quantity--;
        this.onQuantityChanged.emit(this.quantity);
    }

    increaseQuantity(): void {
        this.quantity++;
        this.onQuantityChanged.emit(this.quantity);
    }
}