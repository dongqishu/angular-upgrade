// components
import { ProductDescriptionComponent } from "./product-description/product-description.component";
import { ProductComponent } from "./product/product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductTabsComponent } from "./product-tabs/product-tabs.component";
import { QuantityComponent } from "./quantity/quantity.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { upgradeAdapter } from "./upgradeAdapter";
import { OpaqueToken } from "ng-metadata/core";

// services
import { ProductService } from "./services/product.service";
const productServiceToken = new OpaqueToken("ProductService");

export const AppComponents = [
    ProductComponent,
    ProductDescriptionComponent,
    ProductListComponent,
    upgradeAdapter.provideNg2Component(ProductTabsComponent),
    upgradeAdapter.provideNg2Component(QuantityComponent),
    upgradeAdapter.provideNg2Component(ReviewsComponent),
];

export const AppProviders = [
    ProductService
    // upgradeAdapter.provideNg2Provider( productServiceToken, { useClass: ProductService } ),
];