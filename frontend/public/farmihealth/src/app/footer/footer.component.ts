import { Component, NgZone, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import * as d3 from 'd3';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  @ViewChild('mapContainer') mapContainer!: ElementRef;
  private map!: google.maps.Map;
  private drawingManager!: google.maps.drawing.DrawingManager;
  private isFreehandMode = false;
  private freehandPath: google.maps.Polyline | null = null;

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
    const mapOptions: google.maps.MapOptions = {
      center: { lat: -33.9249, lng: 18.4241 },
      zoom: 12,
    };
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
    this.initDrawingManager();

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

  initDrawingManager(): void {
    this.drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: null,
      drawingControl: false,
      drawingControlOptions: {
        drawingModes: [google.maps.drawing.OverlayType.POLYLINE], // Use OverlayType.POLYLINE
      },
    });
    this.drawingManager.setMap(this.map);
    google.maps.event.addListener(this.drawingManager, 'overlaycomplete', (event: google.maps.drawing.OverlayCompleteEvent) => {
      if (this.isFreehandMode && event.type === google.maps.drawing.OverlayType.POLYLINE) {
        this.freehandPath = event.overlay as google.maps.Polyline;
        this.toggleFreehandMode();
      }
    });
  }

  toggleFreehandMode(): void {
    if (!this.isFreehandMode) {
      this.drawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYLINE);
    } else {
      this.drawingManager.setDrawingMode(null);
      if (this.freehandPath) {
        this.freehandPath.setMap(this.map);
      }
    }
    this.isFreehandMode = !this.isFreehandMode;
  }
}
