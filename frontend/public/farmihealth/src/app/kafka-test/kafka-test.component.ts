import {  ChangeDetectionStrategy, Component, OnInit, OnDestroy} from '@angular/core';
import { AnalyticsapiService } from '../analyticsapi.service';
import {Observable, Subscription} from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
@Component({
  selector: 'app-kafka-test',
  templateUrl: './kafka-test.component.html',
  styleUrls: ['./kafka-test.component.css'],
  })
export class KafkaTestComponent implements OnInit, OnDestroy{

  kafkaSubscription!: Subscription;
  //kafkaMessage!: Observable<any>;// = this.kafkaService.getKafkaMessages();
  kafkaMessages: string[] = [];
  kafkaStreams: MessageEvent[] = [];
  newMessage: string = '';
fluxEvents:any = [];
  private subscription!: Subscription;

  constructor(private kafkaService: AnalyticsapiService){///private AnalyticsapiService: AnalyticsService){

    /*this.kafkaService.getMessages().subscribe(messages => {
      this.kafkaMessages = messages;
    });*/
  }


  ngOnInit(): void {
      
	    this.subscription = this.kafkaService.start().subscribe(
      event => this.fluxEvents.push(event),
      error => console.error('Error:', error)
    );

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    //this.kafkaService.close();    
  }
  
}
