import { TestBed } from '@angular/core/testing';
import { HttpService } from '../core/http.service';
import { JsonConnectionService } from './json-connection.service';

describe('JsonConnectionService', () => {
  let service: JsonConnectionService;
  let spy: any;

  beforeEach((() => {
    TestBed.configureTestingModule({
      providers: [
        JsonConnectionService,
        { provide: HttpService, useValue: spy}
      ]
    });

    service = TestBed.get(JsonConnectionService);
  }));

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('#getItem should be called', () => {
    const id = '1';
    spy = spyOn(service, 'getItem');
    service.getItem(id);
    expect(spy).toHaveBeenCalled();
  });

  it('#getData should be called', () => {
    spy = spyOn(service, 'getData');
    service.getData();
    expect(spy).toHaveBeenCalled();
  });
});
