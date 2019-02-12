import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Connection } from './connection';

@Injectable()
export class DbService implements Connection {
  constructor(
    public connectionService: Connection
    ) {
  }

  getItem(id: string): Observable<any> {
    return this.connectionService.getItem(id);
  }

  getData(): Observable<any> {
    return this.connectionService.getData();
  }
}
