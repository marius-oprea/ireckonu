import { TestBed } from '@angular/core/testing';
import { CardService } from './card.service';

describe('CardService', () => {
  let service: CardService;

  beforeEach((() => {
    TestBed.configureTestingModule({ providers: [CardService] });
    service = TestBed.get(CardService);
  }));

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('#getDate should return only the day number', () => {
    const result = service.getDate('30-01-2019 21:22:48');
    expect(result).toBe('30');
  });

  it('#getMonth should return only the month name', () => {
    const result = service.getMonth('30-01-2019 21:22:48');
    expect(result).toBe('Jan.');
  });

  it('#getDayTime should return the day of the week and hour as string', () => {
    const result = service.getDayTime('30-01-2019 21:22:48');
    expect(result).toBe('Wednesday from 12 AM');
  });

});
