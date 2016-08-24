import { FORM_PROVIDERS } from '@angular/forms';
import { Component, OnInit } from "ng-metadata/core";
import { upgradeAdapter} from './../upgradeAdapter';
import { ProductService } from './../services/product.service';

import { ProductDescriptionComponent } from "./../product-description/product-description.component";
import { ProductComponent } from "./../product/product.component";
import { ProductListComponent } from "./../product-list/product-list.component";
import { ProductTabsComponent } from "./../product-tabs/product-tabs.component";
import { QuantityComponent } from "./../quantity/quantity.component";
import { ReviewsComponent } from "./../reviews/reviews.component";


const AppComponents = [
    ProductComponent,
    ProductDescriptionComponent,
    ProductListComponent,
    upgradeAdapter.provideNg2Component(ProductTabsComponent),
    upgradeAdapter.provideNg2Component(QuantityComponent),
    upgradeAdapter.provideNg2Component(ReviewsComponent),
];

const AppProviders = [
  upgradeAdapter.provideNg2Provider('ProductService', { useClass: ProductService } )
];

@Component({
  selector: "my-app",
  templateUrl: "./app/app.component.html",
  directives: [AppComponents],
  providers: [AppProviders]
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log("hello from AppComponent during OnInit" );
  }
}


