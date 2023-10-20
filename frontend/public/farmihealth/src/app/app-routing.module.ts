import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MenulistComponent } from './menulist/menulist.component';
import { SetMapDroneComponent } from './set-map-drone/set-map-drone.component';
import { ViewCropHealthComponent } from './view-crop-health/view-crop-health.component';
import { ViewDroneStatusComponent } from './view-drone-status/view-drone-status.component';
import { ViewDroneListComponent } from './view-drone-list/view-drone-list.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewMapListComponent } from './view-map-list/view-map-list.component';
import { ViewScheduleListComponent } from './view-schedule-list/view-schedule-list.component';

const routes: Routes = [

  {path: '',component:HomepageComponent},
  {path: 'menu',component:MenulistComponent},
  {path: 'maps',component:SetMapDroneComponent},
  {path: 'farmhealth/status',component:ViewCropHealthComponent},
  {path: 'farmhealth/map',component:ViewMapListComponent},
  {path: 'farmhealth/schedule',component:ViewScheduleListComponent},
  {path: 'drone',component:ViewDroneListComponent},
  {path: 'settings', component:SettingsComponent},
  {path: 'login',  component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'schedule', component:SettingsComponent},
  {path: '404', component:SettingsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
