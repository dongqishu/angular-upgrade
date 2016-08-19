// components
import { ProductDescriptionComponent } from "./product-description/product-description.component";
import { ProductComponent } from "./product/product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductTabsComponent } from "./product-tabs/product-tabs.component";
import { QuantityComponent } from "./quantity/quantity.component";
import { ReviewsComponent } from "./reviews/reviews.component";

// services
import { ProductService } from "./services/product.service";

export const AppComponents = [
    ProductComponent,
    ProductDescriptionComponent,
    ProductListComponent,
    ProductTabsComponent,
    QuantityComponent,
    ReviewsComponent
];

export const AppProviders = [
    ProductService
];