import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CarsComponent } from './cars/cars.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AddCarsComponent } from './add-cars/add-cars.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppHttpInterceptor } from './interceptors/app-http.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    MediaComponent,
    SettingsComponent,
    DashboardComponent,
    StatisticsComponent,
    CarsComponent,
    UsersComponent,
    LoginComponent,
    AddCarsComponent,
    AddUsersComponent,
    AdminComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    //{ provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
],
    /* provideAnimationsAsync(),
    provideAnimationsAsync('noop'),
   */
  bootstrap: [AppComponent]
})
export class AppModule { }
