import { APP_INITIALIZER, PLATFORM_INITIALIZER } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic(
  [
    {
      provide: PLATFORM_INITIALIZER,
      useValue: () => console.log('Angular is checking modules'),
      multi: true
    }
  ]
)
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
