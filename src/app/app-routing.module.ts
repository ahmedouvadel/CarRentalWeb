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
import { AdminComponent } from './admin/admin.component';
import { AuthenticationGuard } from './guard/authentication.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: 'admin', 
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'cars/addcar', component: AddCarsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/adduser', component: AddUsersComponent },
      { path: 'settings', component: SettingsComponent },
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
