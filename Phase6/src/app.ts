// services
import { ProductService } from "./services/product.service";

// components
import { ProductDescriptionComponent } from "./product-description/product-description.component";
import { ProductComponent } from "./product/product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductTabsComponent } from "./product-tabs/product-tabs.component";
import { QuantityComponent } from "./quantity/quantity.component";
import { ReviewsComponent } from "./reviews/reviews.component";

// routes
import { AppRoutes } from "./app.routes";

// angular
import * as angular from "angular";
import "angular-ui-router";

const app = angular.module("app", ["ui.router"]);

app.config(AppRoutes);

app.component("appProductList", new ProductListComponent());
app.component("appProduct", new ProductComponent());
app.component("appProductDescription", new ProductDescriptionComponent());
app.component("appProductTabs", new ProductTabsComponent());
app.component("appQuantity", new QuantityComponent());
app.component("appReviews", new ReviewsComponent());
app.service("ProductService", ProductService);
