import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DbService } from '../../../db/db.service';
import { MessagesHandlingService } from '../../../core/messages-handling.service';
import { DetailsService } from '../details.service';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(() => {
    const activatedRouteServiceSpy = jasmine.createSpyObj('ActivatedRoute', ['getClickedItemType']);
    const dbServiceSpy = jasmine.createSpyObj('DbService', ['getItem']);
    const locationServiceSpy = jasmine.createSpyObj('Location', ['back']);
    const messagesHandlingServiceSpy = jasmine.createSpyObj('MessagesHandlingService', ['showMessage']);
    const detailsServiceSpy = jasmine.createSpyObj('DetailsService', ['getPosts']);

    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ DetailsComponent ],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRouteServiceSpy },
        {provide: DbService, useValue: dbServiceSpy },
        {provide: Location, useValue: locationServiceSpy },
        {provide: MessagesHandlingService, useValue: messagesHandlingServiceSpy },
        {provide: DetailsService, useValue: detailsServiceSpy }
      ]
    });
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnInit should be called', () => {
    const spy = spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('#initShowMore should be called', () => {
    const spy = spyOn(component, 'initShowMore');
    component.initShowMore();
    expect(spy).toHaveBeenCalled();
  });

  it('#initPosts should be called', () => {
    const spy = spyOn(component, 'initPosts');
    component.initPosts();
    expect(spy).toHaveBeenCalled();
  });

  it('#getWhen should return when event occurs as string', () => {
    expect(component.getWhen('30-01-2019 21:22:48')).toBe('Wednesday, January 30 from 12:00 AM');
  });

  it('#onBack should be called', () => {
    const spy = spyOn(component, 'onBack');
    component.onBack();
    expect(spy).toHaveBeenCalled();
  });

  it('#ngOnDestroy should be called', () => {
    const spy = spyOn(component, 'ngOnDestroy');
    component.ngOnDestroy();
    expect(spy).toHaveBeenCalled();
  });
});
