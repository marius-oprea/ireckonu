import { Component, Input } from '@angular/core';
import { IreckonuEvent } from '../../../../data-models/ireckonu-event';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() event: IreckonuEvent;
  hideGoing: boolean;
  hideIgnore: boolean;
  goingColor: string;
  ignoreColor: string;

  constructor(private cardService: CardService) {
    this.hideGoing = false;
    this.hideIgnore = false;

    this.goingColor = 'light';
    this.ignoreColor = 'light';
  }

  onGoing(event) {
    this.hideIgnore = true;
    this.goingColor = 'warning';
    event.stopPropagation();
  }

  onIgnore(event) {
    this.hideGoing = true;
    this.ignoreColor = 'dark';
    event.stopPropagation();
  }

  getDate() {
    return this.cardService.getDate(this.event.dateTime);
  }

  getMonth() {
    return this.cardService.getMonth(this.event.dateTime);
  }

  getDayTime() {
    return this.cardService.getDayTime(this.event.dateTime);
  }
}
