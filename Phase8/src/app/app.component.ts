import { AppComponents } from './../bootstrap.ts';
import { AppProviders } from './../bootstrap.ts';
import { Component } from 'ng-metadata/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  directives: [AppComponents],
  providers: [AppProviders]
})
export class AppComponent { 
  constructor(){}

  ngOnInit() {
    console.log( 'hello from AppComponent during OnInit' );
  }
}

