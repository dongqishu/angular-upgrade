import { IStateProvider, IUrlRouterProvider } from "angular-ui-router";

provideState.$inject = ["$stateProvider", "$urlRouterProvider"];
export function provideState($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {
    $urlRouterProvider.otherwise("/products");

    $stateProvider
        .state("products", {
            url: "/products",
            template: "<app-product-list></app-product-list>"
        })
        .state("productDetails", {
            url: "/product/:id",
            template: "<app-product></app-product>"
        });
}