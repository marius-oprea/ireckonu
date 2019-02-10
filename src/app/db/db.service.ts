import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Connection } from './connection';
import { FirebaseConnectionService } from './firebase-connection.service';
import { JsonConnectionService } from './json-connection.service';

@Injectable()
export class DbService implements Connection {
  constructor(
    /* uncomment which backend service you want to use */
    // public connectionService: FirebaseConnectionService,
    public connectionService: JsonConnectionService
    ) {
  }

  getItem(id: string): Observable<any> {
    return this.connectionService.getItem(id);
  }

  getData(): Observable<any> {
    return this.connectionService.getData();
  }
}
