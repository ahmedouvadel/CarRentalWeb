import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../Services/AuthSevice/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Intercepted URL:", req.url);

    // Check if accessToken is available
    if (this.authService.accessToken) {
      console.log("Access Token:", this.authService.accessToken);
      
      // Skip login endpoint
      if (!req.url.includes("/auth/login")) {
        const clonedRequest = req.clone({
          headers: req.headers.set('Authorization', 'Bearer ' + this.authService.accessToken)
        });
        return next.handle(clonedRequest);
      }
    } else {
      console.log("No Access Token available");
    }

    return next.handle(req);
  }
}
