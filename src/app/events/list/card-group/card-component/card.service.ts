import { Injectable } from '@angular/core';
import * as moment from 'moment';

const dateFormat = 'DD/MM/YYYY';

@Injectable()
export class CardService {

  getDate(date) {
    return moment(date, dateFormat).format('DD').toString();
  }

  getMonth(date) {
    return moment(date, dateFormat).format('MMM').toString() + '.';
  }

  getDayTime(date) {
    const d = moment(date, dateFormat);
    return d.format('dddd').toString() + ' from ' + d.format('hh a').toString().toUpperCase();
  }
}
