import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

         const token = localStorage.getItem('num');
        if (token) {
          const cloned = req.clone({
            
                headers: req.headers.set ("Authorization","Bearer"+token)
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
            }
        
        
    

    }
}