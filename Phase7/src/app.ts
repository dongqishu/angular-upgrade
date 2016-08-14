// services
import { ProductService } from './services/product.service.ts';

// components
import { ProductDescriptionComponent } from './product-description/product-description.component.ts';
import { ProductComponent } from './product/product.component.ts';
import { ProductListComponent } from './product-list/product-list.component.ts';
import { ProductTabsComponent } from './product-tabs/product-tabs.component.ts';
import { QuantityComponent } from './quantity/quantity.component.ts';
import { ReviewsComponent } from './reviews/reviews.component.ts';

// angular
import * as angular from 'angular';
import 'angular-ui-router';
import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router';

const app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {
        $urlRouterProvider.otherwise('/products');

        $stateProvider
            .state('products', {
                url: '/products',
                template: '<app-product-list></app-product-list>'
            })
            .state('productDetails', {
                url: '/product/:id', 
                template: '<app-product></app-product>'
            });
    });

app.component('appProductList', new ProductListComponent());
app.component('appProduct', new ProductComponent());
app.component('appProductDescription', new ProductDescriptionComponent());
app.component('appProductTabs', new ProductTabsComponent());
app.component('appQuantity', new QuantityComponent());
app.component('appReviews', new ReviewsComponent());
app.service('ProductService', ProductService);
