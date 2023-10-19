import { UserPageComponent } from '../app/user-page/user-page.component';
import { CanDeactivateGuard } from '../guard/candeactive-guard';
import { UsersListComponent } from './users-list/users-list.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'userRegister',
    component: UserRegisterComponent,
    canDeactivate: [CanDeactivateGuard],
  },
  {
    path: 'userRegister/:id',
    component: UserRegisterComponent,
    canDeactivate: [CanDeactivateGuard],
  },
  { path: 'userPage/:id', component: UserPageComponent },
  { path: 'userList', component: UsersListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
