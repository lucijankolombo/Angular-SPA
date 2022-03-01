import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AdminOnlyComponent } from './admin-only/admin-only.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [//declare routes
  { path: '', component: UsersListComponent }, 
  { path: 'users', component: UsersListComponent }, 
  { path: 'admin', component: AdminOnlyComponent},
  { path: 'about', component: AboutMeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoadingBarComponent,
    AboutMeComponent,
    AdminOnlyComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
