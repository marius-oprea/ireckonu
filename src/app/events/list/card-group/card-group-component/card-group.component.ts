import { Component, Input, ElementRef, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ClickService } from '../../../../core/click.service';
import { EventType } from '../../../../data-models/event-type';
import { IreckonuEvent } from '../../../../data-models/ireckonu-event';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss']
})
export class CardGroupComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() events: any;
  @Input() type: EventType;
  selected: boolean;
  id: string;
  lastClickedType: EventType;
  clickSubscription: any;

  constructor(private router: Router, public clickService: ClickService) {
  }

  ngOnInit() {
    this.clickSubscription = this.clickService.getClickedItemType().subscribe(result => {
      this.lastClickedType = result as EventType;
    }, error => {
      console.error(error);
    });
  }

  onClick(event: IreckonuEvent) {
    this.clickService.setItemClickedType(this.type);
    this.clickService.type = this.type;

    this.selected = true;
    this.id = event.id;

    this.router.navigate(['event', event.id]);
  }

  ngOnDestroy() {
    if (this.clickSubscription) {
      this.clickSubscription.unsubscribe();
    }
  }
}
