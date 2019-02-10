import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { EventType } from '../data-models/event-type';

@Injectable()
export class ClickService {
  type: EventType;

  clickSource: Subject<EventType>;
  click$: Observable<EventType>;

  constructor() {
    this.clickSource = new Subject<any>();
    this.click$ = this.clickSource.asObservable();
  }

  setItemClickedType(type: EventType) {
    this.type = type;

    this.clickSource.next(this.type);
  }

  getClickedItemType(): Observable<EventType> {
    return this.click$;
  }
}
