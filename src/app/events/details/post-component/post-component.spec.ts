import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ PostComponent ]
    });
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should update the item property', () => {
    const item = { name: 'test' };

    component.item = item;

    // trigger initial data binding
    fixture.detectChanges();

    const h1 = fixture.nativeElement.querySelector('#name');
    expect(h1.textContent).toContain(component.item.name);
  });
});
