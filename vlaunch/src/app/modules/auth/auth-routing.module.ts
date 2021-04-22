import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const authRoutes: Routes = [
  {
    component: LoginComponent,
    path: 'auth/login',
  },
  // {
  //   path: 'user',
  //   component: UserComponent,
  //   children : [
  //     {
  //       path: 'profile',
  //       component: ProfileComponent
  //     }
  //   ]
  // },

];
@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
