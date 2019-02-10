import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpService } from './http.service';

describe('HttpService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: HttpService;
  const testUrl = 'http://fake-site.com/fake.json';

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [HttpService]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);

    service = TestBed.get(HttpService);
  }));

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('can test HttpClient.get', () => {
    const testData = {name: 'Test Data'};

    // Make an HTTP GET request
    httpClient.get(testUrl)
      .subscribe(data =>
        // When observable resolves, result should match test data
        expect(data).toEqual(testData)
      );

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne(testUrl);

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

  it('can test for 404 error', () => {
    const emsg = 'deliberate 404 error';

    httpClient.get(testUrl).subscribe(
      data => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    const req = httpTestingController.expectOne(testUrl);

    // Respond with mock error
    req.flush(emsg, { status: 404, statusText: 'Not Found' });
  });

  it('can test for network error', () => {
    const emsg = 'simulated network error';

    httpClient.get(testUrl).subscribe(
      data => fail('should have failed with the network error'),
      (error: HttpErrorResponse) => {
        expect(error.error.message).toEqual(emsg, 'message');
      }
    );

    const req = httpTestingController.expectOne(testUrl);

    // Create mock ErrorEvent, raised when something goes wrong at the network level.
    // Connection timeout, DNS error, offline, etc
    const mockError = new ErrorEvent('Network error', {
      message: emsg,
    });

    // Respond with mock error
    req.error(mockError);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

});
