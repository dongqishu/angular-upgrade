import { upgradeAdapter } from './upgradeAdapter';
import * as uiRouter from 'angular-ui-router';
import { AppComponent } from './app/app.component';
import { provideState } from './app.routes';
import { enableProdMode } from '@angular/core';

if ( ENV === 'production' ) {
  enableProdMode();
}

upgradeAdapter.bootstrap( AppComponent, [uiRouter, provideState] );
