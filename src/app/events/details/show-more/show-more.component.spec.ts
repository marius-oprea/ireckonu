import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ShowMoreComponent } from './show-more.component';

describe('ShowMoreComponent', () => {
  let component: ShowMoreComponent;
  let fixture: ComponentFixture<ShowMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ ShowMoreComponent ]
    });
    fixture = TestBed.createComponent(ShowMoreComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnInit should be called', () => {
    const spy = spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();

    expect(component.show).toBeTruthy();
  });

  it('#onToggleShow should be called', () => {
    const spy = spyOn(component, 'onToggleShow');
    component.onToggleShow();
    expect(spy).toHaveBeenCalled();
  });

  it('#onToggleShow should toggle show component', () => {
    component.onToggleShow();
    expect(component.show).toBeFalsy();

    component.onToggleShow();
    expect(component.show).toBeTruthy();
  });

});
