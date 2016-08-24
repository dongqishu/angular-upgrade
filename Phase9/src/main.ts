import { upgradeAdapter } from "./upgradeAdapter";
import * as uiRouter from "angular-ui-router";
import { AppComponent } from "./app/app.component";
import { provideState } from "./app.routes";
import { enableProdMode } from "@angular/core";
import { ProductService } from './services/product.service';

if ( ENV === "production" ) {
  enableProdMode();
}

upgradeAdapter.addProvider(ProductService);
upgradeAdapter.bootstrap( AppComponent, [uiRouter, provideState] );
