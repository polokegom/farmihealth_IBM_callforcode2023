import { Component, OnInit } from '@angular/core';
import type * as GeoJSON from "geojson";

 

  interface City {
    center: google.maps.LatLngLiteral;
    population: number;
  }

@Component({
  selector: 'app-view-crop-health',
  templateUrl: './view-crop-health.component.html',
  styleUrls: ['./view-crop-health.component.css']
})
export class ViewCropHealthComponent implements OnInit {


citymap: Record<string, City> = {
    chicago: {
      center: { lat: 41.878, lng: -87.629 },
      population: 2714856,
    },
    newyork: {
      center: { lat: 40.714, lng: -74.005 },
      population: 8405837,
    },
    losangeles: {
      center: { lat: 34.052, lng: -118.243 },
      population: 3857799,
    },
    vancouver: {
      center: { lat: 49.25, lng: -123.1 },
      population: 603502,
    },
  };



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

      this.initMap2();
    };

    document.head.appendChild(script);

  }



  initMap(cameraOptions:any, mapOptions: any): void {
 

  
 }
  
   
  
   initMap2(): void {
    // Create the map.
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 4,
        center: { lat: 37.09, lng: -95.712 },
        mapTypeId: "terrain",
      }
    );
  
    for (const city in this.citymap) {
      // Add the circle for this city to the map.
      const cityCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: this.citymap[city].center,
        radius: Math.sqrt(this.citymap[city].population) * 100,
      });
    }
  }

  
ngAfterViewInit(): void {
  

}

 createControl(map: any) {


  const svgContainer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const divSvgContainer = document.createElement('div');
  svgContainer.setAttribute('width', '100%');
  svgContainer.setAttribute('height', '100%');
  svgContainer.style.zIndex = "30";    //svgContainer.style.marginTop = "200px";
  
  
}



}
