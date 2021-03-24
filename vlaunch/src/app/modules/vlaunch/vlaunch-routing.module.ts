import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrandComponent } from "./brand/brand.component";
import { HomeComponent } from "./home/home.component";
import { IdeasComponent } from "./ideas/ideas.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { ProductsComponent } from "./products/products.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { SitemapComponent } from "./sitemap/sitemap.component";
import { StyletoolsComponent } from "./styletools/styletools.component";
import { VlaunchComponent } from "./vlaunch.component";

const vlaunchRoutes: Routes = [
  {
    path: '',
    component: VlaunchComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/:slug', component: ProductsComponent },
      { path: 'products/:slug/:id', component: ProductsComponent },
      { path: 'products/:slug/:id', component: ProductDetailComponent },
      { path: 'project', component: RoomsComponent },
      { path: 'styletools', component: StyletoolsComponent },
      { path: 'brand', component: BrandComponent },
      { path: 'ideas', component: IdeasComponent },

      // Footer categories routes
      { path: 'sitemap', component: SitemapComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(vlaunchRoutes)],
  exports: [RouterModule],
})

export class VlaunchRoutingModule {}