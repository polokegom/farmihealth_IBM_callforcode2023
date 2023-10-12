import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-poly',
  templateUrl: './test-poly.component.html',
  styleUrls: ['./test-poly.component.css']
})
export class TestPolyComponent implements OnInit{

  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAWliISHIJ4PnZ73U5BQ2W9GN1_YxTuWOg&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      const cameraOptions: google.maps.CameraOptions = {
        tilt: 0,
        heading: 0,
        zoom: 18,
        center: { lat: 35.6594945, lng: 139.6999859 },
      };
  
      const mapOptions = {
        ...cameraOptions,
        mapId: '15431d2b469f209e',
        fullscreenControl: false, 
        mapTypeControl: false, 
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        minZoom: 16,/*
        restriction: {
          latLngBounds: this.NEW_ZEALAND_BOUNDS,
          strictBounds: false,
        },
    */
      };
      // Initialize the map
      //this.initMap(cameraOptions,mapOptions);
    };
    document.head.appendChild(script);



  }

}
