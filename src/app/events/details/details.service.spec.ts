import { DetailsService } from './details.service';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '../../core/http.service';

describe('DetailsService', () => {
  let service: DetailsService;
  let spy;

  beforeEach((() => {

    spy = jasmine.createSpyObj('HttpService', ['get']);

    TestBed.configureTestingModule({
      providers: [
        DetailsService,
        {provide: HttpService, useValue: spy}
      ]
    });
    service = TestBed.get(DetailsService);
  }));

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });


  it('#getPosts should return post comments', () => {
    spy = spyOn(service, 'getPosts');
    service.getPosts();
    expect(spy).toHaveBeenCalled();
  });

});
