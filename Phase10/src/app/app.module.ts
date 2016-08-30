import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent }  from "./app.component";
import { ProductService } from "./../services/product.service";
import { appRoutingProviders, routing }        from "./app.routes";

import { ProductDescriptionComponent } from "./../product-description/product-description.component";
import { ProductComponent } from "./../product/product.component";
import { ProductListComponent } from "./../product-list/product-list.component";
import { ProductTabsComponent } from "./../product-tabs/product-tabs.component";
import { QuantityComponent } from "./../quantity/quantity.component";
import { ReviewsComponent } from "./../reviews/reviews.component";


const AppComponents = [
    AppComponent,
    ProductDescriptionComponent,
    ProductListComponent,
    ProductTabsComponent,
    QuantityComponent,
    ReviewsComponent,
    ProductComponent
];

const AppProviders = [
  ProductService
];

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponents ],
  providers: [ AppProviders, appRoutingProviders ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }