import { MessagesHandlingService } from './messages-handling.service';
import { TestBed } from '@angular/core/testing';
import { ToastController } from '@ionic/angular';

describe('MessagesHandlingService', () => {
  let service: MessagesHandlingService;
  let spy: any;

  beforeEach((() => {
    TestBed.configureTestingModule({
      providers: [
        MessagesHandlingService,
        { provide: ToastController, useValue: spy}
      ]
    });
    service = TestBed.get(MessagesHandlingService);
  }));

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('#showMessage should be called', () => {
    spy = spyOn(service, 'showMessage');

    service.showMessage('message', 'danger');

    expect(spy).toHaveBeenCalled();
  });
});
