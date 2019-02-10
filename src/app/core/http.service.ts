import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpService {
  constructor(private httpClient: HttpClient) {
  }

  get(url: string): Observable<any> {
    return this.httpClient.get(url)
    .pipe(
      catchError((err: HttpErrorResponse) => this.handleError(err))
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    // handle here custom error messages
    return throwError(error);
  }
}
