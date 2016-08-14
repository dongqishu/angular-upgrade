import { ProductDescriptionComponent } from './product-description/product-description.component.ts';
import { ProductListComponent } from './product-list/product-list.component.ts';
import { ProductTabsComponent } from './product-tabs/product-tabs.component.ts';
import { QuantityComponent } from './quantity/quantity.component.ts';
import { ReviewsComponent } from './reviews/reviews.component.ts';
import { IRouteProvider } from 'angular-route';

angular.module('app', ['ngRoute']);

angular.module('app')
    .config(function ($routeProvider: IRouteProvider) {
        $routeProvider
            .when('/products', {
                template: '<app-product-list></app-product-list>'
            })
            .when('/product/:id', {
                template: '<app-product></app-product>'
            })
            .otherwise({
                redirectTo: '/products'
            });
    });
