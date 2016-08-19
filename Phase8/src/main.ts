import { bootstrap } from "ng-metadata/platform-browser-dynamic";
import * as uiRouter from "angular-ui-router";
import { AppComponent } from "./app/app.component";
import { provideState } from "./app.routes";
import { enableProdMode } from "ng-metadata/core";

if ( ENV === "production" ) {
  enableProdMode();
}

bootstrap( AppComponent, [uiRouter, provideState]);
