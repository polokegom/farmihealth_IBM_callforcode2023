import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-map-list',
  templateUrl: './view-map-list.component.html',
  styleUrls: ['./view-map-list.component.css']
})
export class ViewMapListComponent implements OnInit{

  constructor() {

  }
  
  listOfFarms: String[] = []
  
  ngOnInit(): void {

    this.listOfFarms.push("Maryland Farm");
    this.listOfFarms.push("My Potato Farm");
    this.listOfFarms.push("Tshebangs Farm");
    this.listOfFarms.push("Goergias Farm");
    this.listOfFarms.push("Onion 22 Farm");
    this.listOfFarms.push("Celery Farm");

  }




}
