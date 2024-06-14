import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { CarsComponent } from './cars/cars.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { AddCarsComponent } from './add-cars/add-cars.component';
import { AddUsersComponent } from './add-users/add-users.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,/*  canActivate: [AuthGuard]  */},
  { path: 'statistics', component: StatisticsComponent,/*  canActivate: [AuthGuard]  */},
  { path: 'cars', component: CarsComponent, /* canActivate: [AuthGuard] */ },
  { path: 'users', component: UsersComponent, /* canActivate: [AuthGuard] */ },
  { path: 'settings', component: SettingsComponent, /* canActivate: [AuthGuard] */ },
  { path: 'login', component: LoginComponent },
  { path:'addcar', component: AddCarsComponent},
  { path:'adduser', component: AddUsersComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
