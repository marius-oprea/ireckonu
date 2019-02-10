import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { IreckonuEvent } from '../../data-models/ireckonu-event';
import { EventType } from '../../data-models/event-type';


@Injectable()
export class ListService {
  todayEvents: IreckonuEvent[];
  thisWeekEvents: IreckonuEvent[];
  otherEvents: IreckonuEvent[];

  constructor() {
    this.initArrays();
  }

  initArrays() {
    this.todayEvents = [];
    this.thisWeekEvents = [];
    this.otherEvents = [];
  }

  getWhenOccurs(event: IreckonuEvent) {
    // the format, corrects and validate the string date
    const eventTime = moment(event.dateTime, 'DD/MM/YYYY');
    const currentTime =  moment.now();

    let status;

    if (eventTime.isSame(currentTime, 'day')) {
      status = EventType.TODAY;
    } else if (eventTime.isSame(currentTime, 'week')) {
      status = EventType.THIS_WEEK;
    } else {
      status = EventType.OTHER;
    }

    return status;
  }

  sortEvents(events: IreckonuEvent[]) {
    this.initArrays();

    events.forEach(event => {
      this.proccessEvent(event);
    });
  }

  proccessEvent(event: IreckonuEvent) {
    const status = this.getWhenOccurs(event);

    switch (status) {
      case EventType.TODAY:
        this.todayEvents.push(event);
      break;

      case EventType.THIS_WEEK:
        this.thisWeekEvents.push(event);
      break;

      case EventType.OTHER:
        this.otherEvents.push(event);
      break;
    }
  }

  getTodayEvents(): IreckonuEvent[] {
    return this.todayEvents;
  }

  getThisWeekEvents(): IreckonuEvent[] {
    return this.thisWeekEvents;
  }

  getOtherEvents(): IreckonuEvent[] {
    return this.otherEvents;
  }
}
