import 'angular';
import 'ng-metadata/platform-browser-dynamic';
import 'ng-metadata/core';
import 'ng-metadata/common';

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';

import { Observable } from 'rxjs';

if (ENV === 'production') {
  // Production


} else {
  // Development
  // require('angular2-hmr');
}