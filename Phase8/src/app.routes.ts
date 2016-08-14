import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router';

export class AppRoutes {
    constructor($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider){
        console.log('AppRoutes constructor called');
        
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
     }
} 