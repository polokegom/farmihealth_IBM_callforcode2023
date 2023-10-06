import { Component, NgZone, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
  poly!: google.maps.Polyline;
  map!: google.maps.Map;

  
  
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
    const myLatlng =  {lat: 44.5452, lng: -78.5389};
  
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 9,
        center: myLatlng,
        mapTypeId: "terrain",

      }
    );
    

    const bounds = {
      north: 44.599,
      south: 44.49,
      east: -78.443,
      west: -78.649,
    };
  
    // Define a rectangle and set its editable property to true.
    const rectangle = new google.maps.Rectangle({
      bounds: bounds,
      editable: true,
      draggable: true,
    });
  
    rectangle.setMap(map);
  
    // listen to changes
    ["bounds_changed", "dragstart", "drag", "dragend"].forEach((eventName) => {
      rectangle.addListener(eventName, () => {
        console.log({ bounds: rectangle.getBounds()?.toJSON(), eventName });
      });
    });
  }
  
  
}