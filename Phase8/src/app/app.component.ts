import { AppComponents } from "./../bootstrap";
import { AppProviders } from "./../bootstrap";
import { Component, OnInit } from "ng-metadata/core";

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

