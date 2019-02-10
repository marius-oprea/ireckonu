import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CardGroupComponent } from './card-group.component';
import { ClickService } from '../../../../core/click.service';

describe('CardGroupComponent', () => {
  let component: CardGroupComponent;
  let fixture: ComponentFixture<CardGroupComponent>;

  beforeEach(() => {

    const clickServiceSpy = jasmine.createSpyObj('ClickService', ['getClickedItemType']);
    const routerServiceSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ CardGroupComponent ],
      providers: [
        {provide: Router, useValue: routerServiceSpy },
        {provide: ClickService, useValue: clickServiceSpy }
      ]
    });
    fixture = TestBed.createComponent(CardGroupComponent);
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

  it('#onClick should be called', () => {
    const spy = spyOn(component, 'onClick');
    component.onClick({});
    expect(spy).toHaveBeenCalled();
  });

  it('#ngOnDestroy should be called', () => {
    const spy = spyOn(component, 'ngOnDestroy');
    component.ngOnDestroy();
    expect(spy).toHaveBeenCalled();
  });

});

