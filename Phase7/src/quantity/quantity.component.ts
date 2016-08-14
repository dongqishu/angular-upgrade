import { IComponentController, IComponentOptions } from 'angular';
import './quantity.component.css';

export class QuantityController implements IComponentController {
    quantity: number;
    onQuantityChanged: any;

    constructor(){}

    $onInit() {
        this.quantity = 1;
    }

    decreaseQuantity(): void {
        this.quantity--;
        this.onQuantityChanged({ quantity: this.quantity });
    }

    increaseQuantity(): void {
        this.quantity++;
        this.onQuantityChanged({ quantity: this.quantity });
    }
}

export class QuantityComponent implements IComponentOptions {
    bindings: any;
    controller:IComponentController;
    templateUrl:string;

    constructor() {
        this.templateUrl = './quantity/quantity.component.html';
        this.controller = QuantityController;
        this.bindings = {
            onQuantityChanged: '&'
        }
    }
}