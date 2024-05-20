import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import {
  errorInterceptor,
  fakeBackendInterceptor,
  jwtInterceptor,
} from '@app/_helpers';

import { AppComponent } from '@app/app.component';
import { APP_ROUTES } from '@app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES),
    provideHttpClient(
      withInterceptors([
        jwtInterceptor,
        errorInterceptor,

        // fake backend
        fakeBackendInterceptor,
      ])
    ),
  ],
});
