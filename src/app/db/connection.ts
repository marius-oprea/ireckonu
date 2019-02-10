import { Observable } from 'rxjs';

export interface Connection {
  getData(): Observable<any>;
  getItem(id: string): Observable<any>;
}
