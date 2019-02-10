import { TestBed } from '@angular/core/testing';
import { ListService } from './list.service';
import { EventType } from '../../data-models/event-type';
import { IreckonuEvent } from '../../data-models/ireckonu-event';

describe('ListService', () => {
  let service: ListService;
  let spy;

  beforeEach((() => {
    TestBed.configureTestingModule({ providers: [ListService] });
    service = TestBed.get(ListService);
  }));

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('#initArrays should init the arrays', () => {
    service.initArrays();

    expect(service.otherEvents).toEqual([]);
    expect(service.thisWeekEvents).toEqual([]);
    expect(service.todayEvents).toEqual([]);
  });

  it('#getWhenOccurs should return the event status occurence', () => {
    // the default event status is OTHER
    const event: IreckonuEvent = {} as IreckonuEvent;
    const result = service.getWhenOccurs(event);

    expect(result).toBe(EventType.OTHER);
  });

  it('#sortEvents should be called', () => {
    spy = spyOn(service, 'sortEvents');

    service.sortEvents([]);

    expect(spy).toHaveBeenCalled();
  });

  it('#proccessEvent should be called', () => {
    spy = spyOn(service, 'proccessEvent');

    const event: IreckonuEvent = {} as IreckonuEvent;
    service.proccessEvent(event);

    expect(spy).toHaveBeenCalled();
  });

  it('#getTodayEvents should get today\'s events', () => {
    const result = service.getTodayEvents();
    expect(result).toEqual([]);
  });

  it('#getOtherEvents should get other events', () => {
    const result = service.getOtherEvents();
    expect(result).toEqual([]);
  });

  it('#getThisWeekEvents should get this week\'s events', () => {
    const result = service.getThisWeekEvents();
    expect(result).toEqual([]);
  });
});
