import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Inject } from '@angular/core';
import { AccountService } from '@app/_services';
import { catchError, throwError } from 'rxjs';

export function errorInterceptor(
  request: HttpRequest<any>,
  next: HttpHandlerFn
) {
  const accountService = Inject(AccountService);
  return next(request).pipe(
    catchError((err) => {
      if ([401, 403].includes(err.status) && accountService.userValue) {
        // auto logout if 401 or 403 response returned from api
        accountService.logout();
      }

      const error = err.error?.message || err.statusText;
      console.error(err);
      return throwError(() => error);
    })
  );
}
