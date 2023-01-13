import { UserPageComponent } from '../app/user-page/user-page.component';
import { CanDeactivateGuard } from '../guard/candeactive-guard';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './user-register/user-register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersListComponent } from './users-list/users-list.component';
import { CommonModule } from '@angular/common'
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ModalComponent } from './modal/modal.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UserRegisterComponent,
    UsersListComponent,
    ModalComponent,
    RegisterComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    CommonModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
