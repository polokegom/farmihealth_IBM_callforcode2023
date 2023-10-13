import { Component, OnInit } from '@angular/core';
import type * as GeoJSON from "geojson";

 

  interface location {
    center: google.maps.LatLngLiteral;
    size: number;
  }

@Component({
  selector: 'app-view-crop-health',
  templateUrl: './view-crop-health.component.html',
  styleUrls: ['./view-crop-health.component.css']
})
export class ViewCropHealthComponent implements OnInit {




citymap: Record<string, location> = {
    point1: {
      center: { lat: 37.094, lng: -95.713 },
      size: 0.2
    },
    point2: {
      center:{ lat: 37.092, lng: -95.715 },
      size: 0.1,
    },
    point3: {
      center: { lat: 37.09, lng: -95.712 },
      size: 0.2,
    },
    
    point4: {
      center: { lat: 37.092, lng: -95.716 },
      size: 0.3,
    },
    point5: {
      center: { lat: 37.0906, lng: -95.714 },
      size: 0.2,
    },
    point6: {
      center: { lat: 37.0915, lng: -95.713 },
      size: 0.3,
    },

    point7: {
      center: { lat: 37.089, lng: -95.716 },
      size: 0.3,
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
        zoom: 15,
        center: { lat: 37.09, lng: -95.712 },
        fullscreenControl: false, 
        mapTypeControl: false, 
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
      }
    );
  
    for (const city in this.citymap) {
      // Add the circle for this city to the map.
      const cityCircle = new google.maps.Circle({
        strokeColor: "red",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "red",
        fillOpacity: 0.35,
        map,
        center: this.citymap[city].center,
        radius: Math.sqrt(this.citymap[city].size) * 100,
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
