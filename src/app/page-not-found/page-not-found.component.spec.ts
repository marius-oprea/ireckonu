import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent ],
    });

    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance; // BannerComponent test instance
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display PAGE NOT FOUND text', () => {
    let h1: HTMLElement;
    h1 = fixture.nativeElement.querySelector('div');
    expect(h1.textContent).toContain('PAGE NOT FOUND');
  });

});
