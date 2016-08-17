import { bootstrap } from 'ng-metadata/platform-browser-dynamic';
import * as uiRouter from 'angular-ui-router';
import { AppComponent } from './app/app.component.ts';
import { provideState } from './app.routes.ts';
import { enableProdMode } from 'ng-metadata/core';

if ( ENV === 'production' ) {
  enableProdMode();
}

bootstrap( AppComponent, [uiRouter, provideState]);
