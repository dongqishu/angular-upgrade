import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FORM_DIRECTIVES } from "@angular/forms";

@Component({
    selector: "app-quantity",
    templateUrl: "./quantity/quantity.component.html",
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