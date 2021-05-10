import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './auth.guard';

const authRoutes: Routes = [
  {
    component: LoginComponent,
    path: 'auth/login',
  },
];
@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
