import { CanDeactivateGuard } from '../guard/candeactive-guard';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserPageComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'user/:id', component: UserPageComponent, canDeactivate: [CanDeactivateGuard] },
    { path: 'user', component: UserPageComponent },
    { path: 'userList', component: UsersListComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }