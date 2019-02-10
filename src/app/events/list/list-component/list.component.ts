import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ListService } from '../list.service';
import { DbService } from '../../../db/db.service';
import { MessagesHandlingService } from '../../../core/messages-handling.service';
import { IreckonuEvent } from '../../../data-models/ireckonu-event';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  events: IreckonuEvent[];
  allEvents: IreckonuEvent[];
  todayEvents$: Observable<IreckonuEvent[]>;
  thisWeekEvents$: Observable<IreckonuEvent[]>;
  otherEvents$: Observable<IreckonuEvent[]>;
  query: string;

  todayEvents: IreckonuEvent[];
  thisWeekEvents: IreckonuEvent[];
  otherEvents: IreckonuEvent[];

  dbSubscription: any;

  constructor(
    private dbService: DbService,
    private eventListService: ListService,
    private errrorHandlingService: MessagesHandlingService) {

    this.todayEvents = [];
    this.thisWeekEvents = [];
    this.otherEvents = [];
    this.query = '';
  }

  ngOnInit() {
    this.dbSubscription = this.dbService.getData().subscribe(result => {
      this.events = result as IreckonuEvent[];
      this.allEvents = result as IreckonuEvent[];
      this.sortEvents(this.events);
    }, error => {
      console.error(error);
      this.errrorHandlingService.showMessage('Error getting data from server!', 'danger');
    });
  }

  sortEvents(events) {
    this.eventListService.sortEvents(events);

    this.todayEvents = this.eventListService.getTodayEvents();
    this.thisWeekEvents = this.eventListService.getThisWeekEvents();
    this.otherEvents = this.eventListService.getOtherEvents();
  }

  search(event) {
    this.query = event.target.value.toLowerCase();

    this.events = this.allEvents.filter((e) => {
      return e.title.toLowerCase().indexOf(this.query) > -1;
    });

    this.sortEvents(this.events);
  }

  ngOnDestroy() {
    if (this.dbSubscription) {
      this.dbSubscription.unsubscribe();
    }
  }
}
