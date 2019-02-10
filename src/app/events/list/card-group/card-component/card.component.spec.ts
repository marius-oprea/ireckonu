import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './card.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardService } from './card.service';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {

    const cardServiceStub = {};

    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ CardComponent ],
      providers: [ {provide: CardService, useValue: cardServiceStub } ]
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('#onGoing should be called', () => {
    const spy = spyOn(component, 'onGoing');
    component.onGoing({});
    expect(spy).toHaveBeenCalled();
  });

  it('#onIgnore should be called', () => {
    const spy = spyOn(component, 'onIgnore');
    component.onIgnore({});
    expect(spy).toHaveBeenCalled();
  });

  it('#getDate should be called', () => {
    const spy = spyOn(component, 'getDate');
    component.getDate();
    expect(spy).toHaveBeenCalled();
  });

  it('#getMonth should be called', () => {
    const spy = spyOn(component, 'getMonth');
    component.getMonth();
    expect(spy).toHaveBeenCalled();
  });

  it('#getDayTime should be called', () => {
    const spy = spyOn(component, 'getDayTime');
    component.getDayTime();
    expect(spy).toHaveBeenCalled();
  });

});
