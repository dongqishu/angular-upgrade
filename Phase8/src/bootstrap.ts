// components
import { ProductDescriptionComponent } from './product-description/product-description.component.ts';
import { ProductComponent } from './product/product.component.ts';
import { ProductListComponent } from './product-list/product-list.component.ts';
import { ProductTabsComponent } from './product-tabs/product-tabs.component.ts';
import { QuantityComponent } from './quantity/quantity.component.ts';
import { ReviewsComponent } from './reviews/reviews.component.ts';

// services
import { ProductService } from './services/product.service.ts';

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