import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { KafkaClient, Consumer } from 'kafka-node';



@Injectable({
  providedIn: 'root'
})
export class AnalyticsapiService {

  private kafkaClient: any;
  private kafkaConsumer: any;

  constructor() {
    this.kafkaClient = new KafkaClient({ kafkaHost: 'localhost:9092' }); // Adjust with your Kafka broker details
    this.kafkaConsumer = new Consumer(this.kafkaClient, [{ topic: 'polokegos-event', partition: 0 }], {
      autoCommit: false,
    });
  }

  getKafkaMessages(): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      this.kafkaConsumer.on('message', (message: any) => {
        observer.next(message.value);
      });

      this.kafkaConsumer.on('error', (error: any) => {
        observer.error(error);
      });
    });
  }

  disconnect() {
    this.kafkaConsumer.close(true, () => {
      console.log('Kafka Consumer closed');
    });
  }
}
