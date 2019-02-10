import { TestBed } from '@angular/core/testing';
import { ClickService } from './click.service';
import { EventType } from '../data-models/event-type';

describe('ClickService', () => {
  let service: ClickService;

  beforeEach((() => {
    TestBed.configureTestingModule({ providers: [ClickService] });
    service = TestBed.get(ClickService);
  }));

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('#getClickedItemType should return value from observable', (done: DoneFn) => {
    // expect event type to be OTHER
    service.getClickedItemType().subscribe(value => {
      expect(value).toBe(EventType.OTHER);
      done();
    });

    // set event type to OTHER
    service.setItemClickedType(EventType.OTHER);
  });

  it('#setItemClickedType should set a value to the observable', (done: DoneFn) => {
    // expect event type NOT to be OTHER
    service.getClickedItemType().subscribe(value => {
      expect(value).not.toBe(EventType.OTHER);
      done();
    });

    // set event type to TODAY
    service.setItemClickedType(EventType.TODAY);
  });
});
