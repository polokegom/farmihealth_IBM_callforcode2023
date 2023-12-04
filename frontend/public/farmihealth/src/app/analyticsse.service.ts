import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnalyticsseService {

  constructor() { }

  private streamUrl = 'http://localhost:9004/stream/farmhealth';

 
  private eventSource!: EventSource;

  start(): Observable<MessageEvent> {
    this.eventSource = new EventSource(this.streamUrl);
    return new Observable<MessageEvent>((observer) => {
      this.eventSource.onmessage = (event: MessageEvent) => {
        observer.next(event);
      };
    });
  }

  close() {
    if (this.eventSource) {
      this.eventSource.close();
    }
  }
}
