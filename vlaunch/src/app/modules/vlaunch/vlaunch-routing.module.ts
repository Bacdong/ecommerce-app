import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { BrandComponent } from './brand/brand.component';
import { HomeComponent } from './home/home.component';
import { IdeasComponent } from './ideas/ideas.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { StyletoolsComponent } from './styletools/styletools.component';
import { VlaunchComponent } from './vlaunch.component';
import {CartComponent} from './cart/cart.component';
import { FilterComponent } from 'src/app/shared/components/filter/filter.component';
import {UserComponent} from './user/user.component';
import {ProfileComponent} from './user/profile/profile.component';
import {PasswordComponent} from './user/password/password.component';

let vlaunchRoutes: Routes;
vlaunchRoutes = [
  {
    path: '',
    component: VlaunchComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'products/:slug', component: ProductsComponent},
      {path: 'products/:slug/:id', component: ProductsComponent},
      {path: 'products/item/:slug/:id', component: ProductDetailComponent},
      {path: 'project', component: RoomsComponent},
      {path: 'styletools', component: StyletoolsComponent},
      {path: 'brand', component: BrandComponent},
      {path: 'ideas', component: IdeasComponent},
      {path: 'cart', component: CartComponent},
      {path: 'filter', component: FilterComponent},
      // Footer categories routes
      {path: 'sitemap', component: SitemapComponent},
      // Redirect to 404
      {
        path: 'user',
        component: UserComponent,
        children: [
          {
            path: 'profile',
            component: ProfileComponent
          },
          {
            path: 'password',
            component: PasswordComponent
          }
        ]
      },
      {path: '404', component: PageNotFoundComponent},
      {path: '**', redirectTo: '/404'},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(vlaunchRoutes)],
  exports: [RouterModule],
  bootstrap: []
})

export class VlaunchRoutingModule {}
