import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DroneapiComponent } from './droneapi/droneapi.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { DronelistComponent } from './dronelist/dronelist.component';
import { MenulistComponent } from './menulist/menulist.component';

import { HomepageComponent } from './homepage/homepage.component';
import { AddDroneComponent } from './add-drone/add-drone.component';
import { FarmMapComponent } from './farm-map/farm-map.component';
import {GoogleMapsModule} from '@angular/google-maps';
import { MatMenuModule } from '@angular/material/menu';
import { TestCodeComponent } from './test-code/test-code.component';
import { TestCodeMapComponent } from './test-code-map/test-code-map.component';
import { TestPolyComponent } from './test-poly/test-poly.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewScheduleListComponent } from './view-schedule-list/view-schedule-list.component';
import { ViewMapListComponent } from './view-map-list/view-map-list.component';
import { ViewCropHealthComponent } from './view-crop-health/view-crop-health.component';
import { SetMapNameComponent } from './set-map-name/set-map-name.component';
import { ConfigMapDroneComponent } from './config-map-drone/config-map-drone.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ViewDroneStatusComponent } from './view-drone-status/view-drone-status.component';
import { RouterModule } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DroneapiComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    DronelistComponent,
    MenulistComponent,
    HomepageComponent,
    AddDroneComponent,
    FarmMapComponent,
    TestCodeComponent,
    TestCodeMapComponent,

    TestPolyComponent,
    ViewScheduleListComponent,
    ViewMapListComponent,
    ViewCropHealthComponent,
    SetMapNameComponent,
    ConfigMapDroneComponent,
    MaintenanceComponent,
    ViewDroneStatusComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    AppRoutingModule,
    RouterModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
