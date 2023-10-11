import { Component, OnInit,  AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { Tween, update, Easing } from '@tweenjs/tween.js';
import { delay } from 'rxjs';
import * as d3 from 'd3';







@Component({
  selector: 'app-test-code-map',
  templateUrl: './test-code-map.component.html',
  styleUrls: ['./test-code-map.component.css']
})


export class TestCodeMapComponent implements OnInit, AfterViewInit, ViewChild{
  @ViewChild('svgContainer', { static: true }) svgContainer!: ElementRef;

  mapIsLoading: Boolean = true;
   svg: any; // Reference to the created SVG
  NEW_ZEALAND_BOUNDS = {
    north: -34.36,
    south: -47.35,
    west: 166.28,
    east: -175.81,
  };
  
  chicago = { lat: 41.85, lng: -87.65 };


  private dragging = false;
  private drawing = false;
  private startPoint!: [number, number];
  private points: [number, number][] = [];
  private g: any;
  private dragger: any;
  constructor() { }
  descendants!: boolean;
  emitDistinctChangesOnly!: boolean;
  first!: boolean;
  read: any;
  isViewQuery!: boolean;
  selector: any;
  static?: boolean | undefined;


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
          this.initMap(cameraOptions,mapOptions);
        };
        document.head.appendChild(script);
    
  }

 
  initMap(cameraOptions:any, mapOptions: any): void {
 

      const map = new google.maps.Map(
        document.getElementById('map') as HTMLElement,
        mapOptions
      );

      

      const centerControl = this.createControl(map);
      google.maps.event.addListenerOnce(map, 'tilesloaded', function() {

    
      });



  /*


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
      this.initMap(cameraOptions,mapOptions)
      //map.setOptions( { minZoom: 10 })
    */



  }
  
  ngAfterViewInit(): void {
    

  }

   createControl(map: any) {

    const btnBack = document.createElement('button');
    btnBack.style.cssText = "background-color:#fff;border:2px solid #fff;border-radius: 3px;"
    btnBack.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    btnBack.style.color = 'rgb(25,25,25)';
    btnBack.style.color = 'rgb(25,25,25)';
    btnBack.style.cursor = 'pointer';
    btnBack.style.fontFamily = 'Roboto,Arial,sans-serif';
    btnBack.style.fontSize = '16px';
    btnBack.style.lineHeight = '38px';
    btnBack.style.left= '0px';
    btnBack.style.width = '70px';

    btnBack.style.margin = '8px 0 22px';
    btnBack.style.marginLeft = '10px';
   // btnBack.style.padding = '0 5px';

    btnBack.textContent = 'Home';
    btnBack.title = 'Select farm area';
    btnBack.type = 'button';

    const btnSelect = document.createElement('button');
    btnSelect.style.cssText = "background-color:#fff;border:2px solid #fff;border-radius: 3px;"
    btnSelect.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    btnSelect.style.color = 'rgb(25,25,25)';
    btnSelect.style.color = 'rgb(25,25,25)';
    btnSelect.style.cursor = 'pointer';
    btnSelect.style.fontFamily = 'Roboto,Arial,sans-serif';
    btnSelect.style.fontSize = '16px';
    btnSelect.style.lineHeight = '38px';
    btnSelect.style.margin = '8px 0 22px';
    btnSelect.style.padding = '0 5px';
    btnSelect.style.width = '220px';

    btnSelect.style.textAlign = 'center';

    btnSelect.textContent = 'Select Drone Area';
    btnSelect.title = 'Select farm area';
    btnSelect.type = 'button';


    const btnContinue = document.createElement('button');
    btnContinue.style.cssText = "background-color:#fff;border:2px solid #fff;border-radius: 3px;"
    btnContinue.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    btnContinue.style.color = 'rgb(25,25,25)';
    btnContinue.style.cursor = 'pointer';
    btnContinue.style.fontFamily = 'Roboto,Arial,sans-serif';
    btnContinue.style.fontSize = '16px';
    btnContinue.style.lineHeight = '38px';
    btnContinue.style.margin = '8px 0 22px';
    btnContinue.style.marginBottom = '25px';
    btnContinue.style.padding = '0 5px';
    btnContinue.style.textAlign = 'center';

    btnContinue.textContent = 'CONTINUE';
    btnContinue.title = 'Select farm area';
    btnContinue.type = 'button';
    btnContinue.style.width = '150px';
    btnContinue.disabled = true;
  
    // Setup the click event listeners: simply set the map to Chicago.
    btnSelect.addEventListener('click', () => {
      if (btnSelect.textContent == "Select Drone Area")
        btnSelect.textContent = 'Remove Selection';
      
        // Create and insert the SVG
        if (!this.svg) {
          this.svg = d3.select(this.svgContainer.nativeElement)
            .append('svg')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('xmlns', 'http://www.w3.org/2000/svg');

          // Add a background image
          this.svg
            .append('image')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', '100%')
            .attr('xlink:href', 'https://assets.amerimacmanagement.com/wp-content/uploads/2021/11/Overhead-Map-of-Possible-Residential-Area.jpg');

          // Other SVG elements can be added here
        }
      
      else
        btnSelect.textContent = 'Select Drone Area';

      //map.setCenter(this.chicago);
    });

    function addHoverStyles() {
      btnSelect.style.backgroundColor = 'lightgrey'; // Example hover style
      // Add more hover styles as needed
    }
    
    // Define a function to remove hover styles
    function removeHoverStyles() {
      btnSelect.style.backgroundColor = 'white'; // Remove the hover style
      // Remove other hover styles as needed
    }
    
    // Add event listeners to apply and remove hover styles
    btnSelect.addEventListener('mouseenter', addHoverStyles);
    btnSelect.addEventListener('mouseleave', removeHoverStyles);

    map.controls[google.maps.ControlPosition.LEFT_TOP].push(btnBack);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(btnSelect);
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(btnContinue);

  
    
  }
  

/*
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
  }*/

}