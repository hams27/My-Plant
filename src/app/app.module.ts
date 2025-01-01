import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MenuComponent } from './menu/menu.component';
import{FormsModule}from '@angular/forms';
import { AnalysticsComponent } from './analystics/analystics.component';
import { ProfileComponent } from './profile/profile.component';
import { NotficationsComponent } from './notfications/notfications.component';
import { NavComponent } from './nav/nav.component';
import { HistoryComponent } from './history/history.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    AnalysticsComponent,
    ProfileComponent,
    NotficationsComponent,
    NavComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
