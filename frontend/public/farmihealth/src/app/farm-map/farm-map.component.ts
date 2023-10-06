import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-farm-map',
  templateUrl: './farm-map.component.html',
  styleUrls: ['./farm-map.component.css']
})
export class FarmMapComponent implements OnInit {
  private map: google.maps.Map | undefined; ;
  private lassoSelecting: boolean = false;
  private lassoPolygon!: google.maps.Polygon ;
  private lassoCoordinates: google.maps.LatLng[] = [];


  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAWliISHIJ4PnZ73U5BQ2W9GN1_YxTuWOg&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      this.initMap();
    };
    document.head.appendChild(script);   
  }

  initMap(): void {
    const mapOptions = {
      center: { lat: -33.9249, lng: 18.4241 },
      zoom: 12,
    };
    const mapElement = document.getElementById('map');
    if (mapElement) {
      this.map = new google.maps.Map(mapElement, mapOptions);
    } else {
      console.error('Can\'t find map element from DOM');
    }
  }

  activateLassoSelect(): void {
    if (!this.lassoSelecting) {
      this.lassoSelecting = true;
      this.lassoCoordinates = [];
      this.createLassoPolygon();
    }
  }

  private createLassoPolygon(): void {
    this.lassoPolygon = new google.maps.Polygon({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      editable: false,
      map: this.map,
    });

    google.maps.event.addListener(this.map!, 'mousemove', (event: google.maps.MapMouseEvent) => {
      if (this.map && !this.lassoSelecting) {
        const latLng = event.latLng;
        if (latLng) {
          this.lassoCoordinates.push(latLng);
          this.lassoPolygon.getPath().push(latLng);
        }
      }
    });

    google.maps.event.addListener(this.map!, 'mouseup', () => {
      if (this.map && !this.lassoSelecting) {
        this.lassoSelecting = false;
        // Process selected items within the lassoed area
        // You can access the selected coordinates in this.lassoCoordinates
        this.processSelectedItems(this.lassoCoordinates);
      }
    });
  }

  private processSelectedItems(selectedCoordinates: google.maps.LatLng[]): void {
    // Implement your logic to process selected items here
    console.log('Selected Coordinates:', selectedCoordinates);
  }
}
