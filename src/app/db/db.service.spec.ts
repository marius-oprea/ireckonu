import { DbService } from './db.service';
import { TestBed } from '@angular/core/testing';
import { FirebaseConnectionService } from './firebase-connection.service';

describe('DbService', () => {
  let service: DbService;
  let spy: any;

  beforeEach((() => {
    /* uncomment which backend service you want to use */
    spy = jasmine.createSpyObj('FirebaseConnectionService', ['getItem', 'getData']);
    // spy = jasmine.createSpyObj('FirebaseConnectionService', ['getItem', 'getData']);

    TestBed.configureTestingModule({
      providers: [
        DbService,
        /* uncomment which backend service you want to use */
         { provide: FirebaseConnectionService, useValue: spy},
         // { provide: JsonConnectionService, useValue: spy}
      ]
    });

    service = TestBed.get(DbService);
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
