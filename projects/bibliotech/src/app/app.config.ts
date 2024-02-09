import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { InMemoryDataService } from './component/book/service/in-memory-data.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
        dataEncapsulation: false,
      }),
    ]),
    ReactiveFormsModule,
  ],
};
