import { Component, OnInit } from '@angular/core';
import { Tween, update, Easing } from '@tweenjs/tween.js';
import { delay } from 'rxjs';
// Import Google Maps types

// Define the Country interface here
interface Country {
  bounds: number[][];
  name: string;
  start: string[];
  end: string[];
}

@Component({
  selector: 'app-test-code-map',
  templateUrl: './test-code-map.component.html',
  styleUrls: ['./test-code-map.component.css']
})


export class TestCodeMapComponent implements OnInit{

  mapIsLoading: Boolean = true;
  
  constructor() { }

  ngOnInit(): void {
        // Load Google Maps with your API key
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAWliISHIJ4PnZ73U5BQ2W9GN1_YxTuWOg&callback=initMap`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          // Initialize the map
          this.initMap();
        };
        document.head.appendChild(script);
    
  }

 
  initMap(): void {
    const cameraOptions: google.maps.CameraOptions = {
      tilt: 0,
      heading: 0,
      zoom: 3,
      center: { lat: 35.6594945, lng: 139.6999859 },
    };

    const mapOptions = {
      ...cameraOptions,
      mapId: '15431d2b469f209e',
    };

    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      mapOptions
    );

    // Install Tweenjs with npm i @tweenjs/tween.js
    new Tween(cameraOptions) // Create a new tween that modifies 'cameraOptions'.
      .to({ heading: 90, zoom: 18 },15000) // Move to destination in 15 seconds.
      .easing(Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
      .onUpdate(() => {
        map.moveCamera(cameraOptions);
      }).onComplete(()=> {

        map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
      })
      .start(); // Start the tween immediately.

    function animate(time: number) {
      requestAnimationFrame(animate);
      update(time);
    }
    requestAnimationFrame(animate);
  }

  animateToSatelliteMap(map: google.maps.Map): void {

    map.getDiv().style.transition = `opacity 1s`;
    map.getDiv().style.opacity = '0';

    setTimeout(() => {
      map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
      
      setTimeout(() => {
        map.getDiv().style.transition = 'opacity 1s';
        map.getDiv().style.opacity = '1';
      }, 1000);
    }, 1000);
  }

}