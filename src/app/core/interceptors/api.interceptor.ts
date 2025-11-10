import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError, timeout } from 'rxjs';
import { environment } from '../../../environments/environment';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
    // Add authentication token if needed
    // const authToken = inject(AuthService).getToken();
    
    const apiReq = req.clone({
        // headers: req.headers.set('Authorization', `Bearer ${authToken}`)
    });

    return next(apiReq).pipe(
        timeout(environment.apiTimeout),
        catchError((error: HttpErrorResponse) => {
            let errorMessage = '';

            if (error.error instanceof ErrorEvent) {
                // Client-side error
                errorMessage = `Error: ${error.error.message}`;
            } else {
                // Server-side error
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }

            console.error('API Error:', errorMessage);
            return throwError(() => error);
        })
    );
};
