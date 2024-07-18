import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AppHttpInterceptor } from './app-http.interceptor';
import { AuthService } from '../Services/AuthSevice/auth.service';

describe('AppHttpInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
        {
          provide: AuthService, useValue: {
            accessToken: 'fake-token', // Mock accessToken
          }
        }
      ]
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    authService = TestBed.inject(AuthService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add an Authorization header', () => {
    // Arrange
    const testUrl = '/test-url';
    authService.accessToken = 'fake-token'; // Set the fake token

    // Act
    httpClient.get(testUrl).subscribe(response => {
      expect(response).toBeTruthy();
    });

    // Assert
    const httpRequest = httpMock.expectOne(testUrl);

    expect(httpRequest.request.headers.has('Authorization')).toEqual(true);
    expect(httpRequest.request.headers.get('Authorization')).toBe('Bearer fake-token');
  });

  it('should not add an Authorization header for /auth/login', () => {
    // Arrange
    const loginUrl = '/auth/login';
    authService.accessToken = 'fake-token'; // Set the fake token

    // Act
    httpClient.post(loginUrl, {}).subscribe(response => {
      expect(response).toBeTruthy();
    });

    // Assert
    const httpRequest = httpMock.expectOne(loginUrl);

    expect(httpRequest.request.headers.has('Authorization')).toEqual(false);
  });
});
