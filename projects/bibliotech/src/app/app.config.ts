import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Importez HttpClientInMemoryWebApiModule.forRoot avec le service InMemoryDataService
    importProvidersFrom([
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
        dataEncapsulation: false, // Notez la correction ici
      }),
    ]),
  ],
};
