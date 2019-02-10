import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseConnectionService } from './firebase-connection.service';

describe('FirebaseConnectionService', () => {
  let service: FirebaseConnectionService;
  let spy: any;

  beforeEach((() => {
    spy = jasmine.createSpyObj('AngularFirestore', ['collection']);

    TestBed.configureTestingModule({
      providers: [
        FirebaseConnectionService,
        { provide: AngularFirestore, useValue: spy}
      ]
    });

    service = TestBed.get(FirebaseConnectionService);
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
