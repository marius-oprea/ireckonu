import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DbService } from 'src/app/db/db.service';
import { ListService } from '../list.service';
import { MessagesHandlingService } from '../../../core/messages-handling.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    let dbServiceStub: Partial<DbService>;
    let listServiceStub: Partial<ListService>;
    let messageHandlingServiceStub: Partial<MessagesHandlingService>;

    let dbService;
    let listService;
    let messageHandlingService;

    dbServiceStub = {};
    listServiceStub = {};
    messageHandlingServiceStub = {};

    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ ListComponent ],
      providers: [
        {provide: DbService, useValue: dbServiceStub },
        {provide: ListService, useValue: listServiceStub },
        {provide: MessagesHandlingService, useValue: messageHandlingServiceStub },
      ]
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;

    dbService = TestBed.get(DbService);
    listService = TestBed.get(ListService);
    messageHandlingService = TestBed.get(MessagesHandlingService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should check the title to be EVENTS', () => {
    let element: HTMLElement;
    element = fixture.nativeElement.querySelector('ion-title');
    expect(element.textContent).toContain('EVENTS');
  });

  it('#ngOnInit should be called', () => {
    const spy = spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('#sortEvents should be called', () => {
    const spy = spyOn(component, 'sortEvents');
    component.sortEvents([]);
    expect(spy).toHaveBeenCalled();
  });

  it('#search should be called', () => {
    const spy = spyOn(component, 'search');
    component.search({});
    expect(spy).toHaveBeenCalled();
  });

  it('#ngOnDestroy should be called', () => {
    const spy = spyOn(component, 'ngOnDestroy');
    component.ngOnDestroy();
    expect(spy).toHaveBeenCalled();
  });

});
