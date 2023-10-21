import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-schedule-list',
  templateUrl: './view-schedule-list.component.html',
  styleUrls: ['./view-schedule-list.component.css']
})
export class ViewScheduleListComponent implements OnInit {

  listOfDates: Set<Date> = new Set<Date>();
  strListOfDates: String[] = []
  ngOnInit(): void {
    alert("--------")
    this.listOfDates.add(new Date("2023-10-09T14:00:04"));
    this.listOfDates.add(new Date("2023-10-06T14:00:04"));
    this.listOfDates.add(new Date("2023-10-08T14:00:04"));
    this.listOfDates.add(new Date("2023-10-09T15:00:04"));
    this.listOfDates.add(new Date("2023-10-09T16:00:04"));
    this.listOfDates.add(new Date("2023-10-09T17:00:04"));
    this.listOfDates.add(new Date("2023-10-08T18:00:04"));
    this.listOfDates.add(new Date("2023-10-09T19:00:04"));
    this.listOfDates.add(new Date("2023-10-09T10:00:04"));
    
    //Get a list of unique dates from the Kafka Topic
    let uniqListOfDates: Set<String> = new Set<String>;
    for (const dateTime of this.listOfDates){
      dateTime.setHours(0,0,0,0)
      uniqListOfDates.add(dateTime.toISOString());
    }
    let sortedListOfDates: Date[] = [...uniqListOfDates].map((date) => new Date(date.toString()));
    sortedListOfDates.sort((a, b) => b.getTime() - a.getTime());
      
    let options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    this.strListOfDates = sortedListOfDates.map((date:  Date) => Intl.DateTimeFormat('en-US',options).format((date)));
  
  
  }

  constructor() {

  }



}
