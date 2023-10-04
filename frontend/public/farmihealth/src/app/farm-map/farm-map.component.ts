import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-farm-map',
  templateUrl: './farm-map.component.html',
  styleUrls: ['./farm-map.component.css']
})
export class FarmMapComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {


    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAWliISHIJ4PnZ73U5BQ2W9GN1_YxTuWOg&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      this.makeMap();
    };
    document.head.appendChild(script);
  }

  makeMap(): void {
    const mapOptions = {
      center: { lat: -33.9249, lng: 18.4241  }, 
      zoom: 12, 
    };
    const mapElement = document.getElementById('map');
    if (mapElement) {
      const map = new google.maps.Map(mapElement, mapOptions);

      const marker = new google.maps.Marker({
        position: { lat: -33.9249, lng: 18.4241  }, 
        map: map,
        title: 'Cape Town', 
      });

    } else {
      console.error('Cant find map element from DOM');
    }
  }
}
