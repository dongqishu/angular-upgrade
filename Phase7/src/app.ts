import { ProductDescriptionComponent } from './product-description/product-description.component.ts';
import { ProductListComponent } from './product-list/product-list.component.ts';
import { ProductTabsComponent } from './product-tabs/product-tabs.component.ts';
import { QuantityComponent } from './quantity/quantity.component.ts';
import { ReviewsComponent } from './reviews/reviews.component.ts';
import * as angular from 'angular';
import 'angular-ui-router';
import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router';

angular.module('app', ['ui.router']);

angular.module('app')
    .config(function ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {
        $urlRouterProvider.otherwise('/products');

        $stateProvider
            .state('product.list', {
                url: '/products',
                template: '<app-product-list></app-product-list>'
            })
            .state('product.details', {
                url: '/product/:id', 
                template: '<app-product></app-product>'
            });
    });
