import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard.service';
import { MenuComponent } from './menu/menu.component';
import { AnalysticsComponent } from './analystics/analystics.component';
import { ProfileComponent } from './profile/profile.component';
import { NotficationsComponent } from './notfications/notfications.component';
import { NavComponent } from './nav/nav.component';
import { HistoryComponent } from './history/history.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home' ,component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'dashboardservice',component:DashboardService},
  {path:'menu',component:MenuComponent},
  {path:'analystics',component:AnalysticsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'notfications',component:NotficationsComponent},
  {path:'nav',component:NavComponent},
  {path:'history',component:HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
