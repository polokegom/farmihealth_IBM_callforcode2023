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
import { ScanfieldComponent } from './scanfield/scanfield.component';

import { HomepageComponent } from './homepage/homepage.component';
import { AdddroneComponent } from './adddrone/adddrone.component';
import { AddDroneComponent } from './add-drone/add-drone.component';
import { FarmMapComponent } from './farm-map/farm-map.component';
import {GoogleMapsModule} from '@angular/google-maps';
import { TestCodeComponent } from './test-code/test-code.component';
import { TestCodeMapComponent } from './test-code-map/test-code-map.component';
import { SetmapnameComponent } from './setmapname/setmapname.component';
import { SetmapdroneComponent } from './setmapdrone/setmapdrone.component';
import { SetmapscheduleComponent } from './setmapschedule/setmapschedule.component';
import { ViewcropmaphealthComponent } from './viewcropmaphealth/viewcropmaphealth.component';
import { TestPolyComponent } from './test-poly/test-poly.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllmaplistComponent } from './allmaplist/allmaplist.component';
import { ViewmaplistComponent } from './viewmaplist/viewmaplist.component';
import { ViewAvailableMapListComponent } from './view-available-map-list/view-available-map-list.component';
import { ViewScheduleListComponent } from './view-schedule-list/view-schedule-list.component';


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
    ScanfieldComponent,
    HomepageComponent,
    AdddroneComponent,
    AddDroneComponent,
    FarmMapComponent,
    TestCodeComponent,
    TestCodeMapComponent,
    SetmapnameComponent,
    SetmapdroneComponent,
    SetmapscheduleComponent,
    ViewcropmaphealthComponent,
    TestPolyComponent,
    AllmaplistComponent,
    ViewmaplistComponent,
    ViewAvailableMapListComponent,
    ViewScheduleListComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
