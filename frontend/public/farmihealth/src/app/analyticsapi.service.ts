import { Injectable } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AnalyticsapiService {
  private apiUrl = 'http://localhost:9004/api/farmhealth';
  private streamUrl = 'http://localhost:9004/stream/farmhealth';

 
  private eventSource!: EventSource;

  constructor(private http: HttpClient) { }

  start():Observable<any> {/*
    this.eventSource = new EventSource(this.streamUrl);
    return new Observable<MessageEvent>((observer) => {
      this.eventSource.onmessage = (event: MessageEvent) => {
        observer.next(event);
      };
    });*/

     return this.http.get(this.streamUrl);
  }

  close() {
    /*if (this.eventSource) {
      this.eventSource.close();
    }*/
  }
  /* private messagesSubject = new Subject<string[]>();
  constructor(private http: HttpClient) {}


  getMessages(): Observable<string[]> {
    return this.http.get<string[]>(apiUrl);
  }

  getMessagesObservable(): Observable<string[]> {
    return this.messagesSubject.asObservable();
  }

  private updateMessages(messages: string[]): void {
    this.messagesSubject.next(messages);
  }*/
}
