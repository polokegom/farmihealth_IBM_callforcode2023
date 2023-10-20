import { Component } from '@angular/core';
import { GlobVarService } from './glob-var.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  title = 'farmihealth';


  constructor(private globalVar: GlobVarService) {
      if ('geolocation' in navigator) {

          navigator.geolocation.getCurrentPosition((position) => {
          globalVar.userLat= position.coords.latitude;
          globalVar.userLon = position.coords.longitude;
        });
      
      } else {
        console.log('Geolocation is not available in this browser.');
      }
  }
  
}
