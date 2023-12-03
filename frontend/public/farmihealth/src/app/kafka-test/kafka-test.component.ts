import { Component, OnInit, OnDestroy} from '@angular/core';
import { AnalyticsapiService } from '../analyticsapi.service';
import {Observable, Subscription} from 'rxjs';
@Component({
  selector: 'app-kafka-test',
  templateUrl: './kafka-test.component.html',
  styleUrls: ['./kafka-test.component.css']
})
export class KafkaTestComponent implements OnInit, OnDestroy{

  kafkaSubscription!: Subscription;
  //kafkaMessage!: Observable<any>;// = this.kafkaService.getKafkaMessages();
  kafkaMessages: any[] = [];


  constructor(private kafkaService: AnalyticsapiService){///private AnalyticsapiService: AnalyticsService){

  }


  ngOnInit(): void {
      
    this.kafkaSubscription = this.kafkaService.getKafkaMessages().subscribe(
      (message) => {
        this.kafkaMessages.push(message);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  ngOnDestroy() {
    this.kafkaService.disconnect();
    this.kafkaSubscription.unsubscribe();  }
  
}
