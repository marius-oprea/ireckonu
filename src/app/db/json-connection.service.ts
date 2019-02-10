import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Connection } from './connection';
import { HttpService } from '../core/http.service';
import { IreckonuEvent } from '../data-models/ireckonu-event';

const url = 'https://tsh-app.firebaseio.com/events.json';

@Injectable()
export class JsonConnectionService implements Connection {
  constructor(private httpService: HttpService) {
  }

  getData(): Observable<IreckonuEvent[]> {
    return this.httpService.get(url);
  }

  getItem(id: string): Observable<IreckonuEvent> {
    return new Observable((observable) => {
      this.httpService.get(url).subscribe(result => {
        const r = result as IreckonuEvent[];
        const found = r.find((e: any) => e.id === id);
        observable.next(found);
      }, error => {
        console.error(error);
        observable.error(error);
      });
    });
  }
}
